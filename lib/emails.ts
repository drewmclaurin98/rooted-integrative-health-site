/**
 * Booking emails (sent from the Stripe webhook via Resend) and the .ics calendar invite.
 * Plain HTML strings with inline styles so they render in every mail client.
 */
import { Resend } from "resend"
import { site } from "@/content/site"
import { durationFor, formatBookingTime } from "@/lib/booking"

type BookingInfo = {
  id: number
  serviceName: string
  price: number
  bookingTime: Date
  customerEmail: string | null
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

/** iCalendar timestamp in UTC, e.g. 20261007T150000Z */
const icsDate = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")

/** A single-event .ics file both Google Calendar and Apple Calendar can import. */
export function bookingIcs(b: BookingInfo): string {
  const end = new Date(b.bookingTime.getTime() + durationFor(b.serviceName) * 60_000)
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Rooted Integrative Health//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:booking-${b.id}@rootedintegrativehealth.com`,
    `DTSTAMP:${icsDate(new Date())}`,
    `DTSTART:${icsDate(b.bookingTime)}`,
    `DTEND:${icsDate(end)}`,
    `SUMMARY:${b.serviceName} with ${site.practitioner.name}`,
    `DESCRIPTION:${site.location.note}`,
    `LOCATION:${site.location.city}\\, ${site.location.regionName}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ]
  return lines.join("\r\n")
}

function layout(title: string, body: string): string {
  return `<!doctype html><html><body style="margin:0;background:#F6F8F8;font-family:Arial,Helvetica,sans-serif;color:#18252A">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px"><tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #DCE3E4">
      <tr><td style="background:#1F3236;padding:20px 28px;color:#ffffff;font-family:Georgia,serif;font-size:18px">${esc(site.name)}</td></tr>
      <tr><td style="padding:28px">
        <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:24px;font-weight:600">${esc(title)}</h1>
        ${body}
      </td></tr>
      <tr><td style="padding:16px 28px;border-top:1px solid #DCE3E4;font-size:12px;color:#4A5A5E">
        ${esc(site.name)} · ${esc(site.location.city)}, ${esc(site.location.regionName)} · ${esc(site.contact.email)} · ${esc(site.contact.phone)}
      </td></tr>
    </table>
  </td></tr></table></body></html>`
}

const row = (label: string, value: string) =>
  `<tr><td style="padding:6px 0;color:#4A5A5E;width:110px">${esc(label)}</td><td style="padding:6px 0;font-weight:bold">${esc(value)}</td></tr>`

function details(b: BookingInfo): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 20px;font-size:15px">
    ${row("Session", b.serviceName)}
    ${row("When", formatBookingTime(b.bookingTime))}
    ${row("Length", `${durationFor(b.serviceName)} minutes`)}
    ${row("Paid", `$${b.price}`)}
  </table>`
}

export function clientEmailHtml(b: BookingInfo): string {
  return layout(
    "Your session is booked",
    `<p style="margin:0 0 20px;font-size:15px;line-height:1.6">Thank you for booking with ${esc(site.practitioner.name)}. Here are your details:</p>
    ${details(b)}
    <p style="margin:0 0 12px;font-size:15px;line-height:1.6">${esc(site.location.note)}</p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.6">A calendar invite is attached. If you need to reschedule or cancel, reply to this email or call ${esc(site.contact.phone)}.</p>`,
  )
}

export function practitionerEmailHtml(b: BookingInfo): string {
  return layout(
    "New booking",
    `${details(b)}
    <p style="margin:0;font-size:15px;line-height:1.6">Client email: <strong>${esc(b.customerEmail ?? "not provided")}</strong></p>`,
  )
}

/**
 * Sends the client confirmation and the practitioner notification. Never throws: a mail
 * problem must not fail the Stripe webhook (the booking is already confirmed and paid).
 */
export async function sendBookingEmails(b: BookingInfo): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.FROM_EMAIL
  if (!apiKey || !from) {
    console.warn("Booking emails skipped: RESEND_API_KEY or FROM_EMAIL is not set")
    return
  }
  const resend = new Resend(apiKey)
  const attachments = [{ filename: "appointment.ics", content: Buffer.from(bookingIcs(b)).toString("base64") }]
  const when = formatBookingTime(b.bookingTime)

  const sends: Promise<unknown>[] = [
    resend.emails.send({
      from,
      to: site.contact.email,
      replyTo: b.customerEmail ?? undefined,
      subject: `New booking: ${b.serviceName}, ${when}`,
      html: practitionerEmailHtml(b),
      attachments,
    }),
  ]
  if (b.customerEmail) {
    sends.push(
      resend.emails.send({
        from,
        to: b.customerEmail,
        replyTo: site.contact.email,
        subject: `Your ${b.serviceName} is confirmed: ${when}`,
        html: clientEmailHtml(b),
        attachments,
      }),
    )
  }

  const results = await Promise.allSettled(sends)
  for (const r of results) {
    if (r.status === "rejected") console.error("Booking email failed:", r.reason)
    else if (r.value && typeof r.value === "object" && "error" in r.value && r.value.error)
      console.error("Booking email failed:", r.value.error)
  }
}
