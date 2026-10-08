import type { ReactNode } from "react"

type Tone = "success" | "pending" | "notice"

const ICONS: Record<Tone, ReactNode> = {
  success: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
  pending: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  notice: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
}

/** Page shell + card for the post-checkout pages (success / cancel), in the site's soft wash. */
export function ResultCard({
  tone,
  eyebrow,
  title,
  children,
}: {
  tone: Tone
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-1 items-center bg-gradient-to-br from-gradient-primary-start via-gradient-sage to-gradient-primary-end py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[34rem] px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-lg sm:p-10">
          <div
            className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
              tone === "notice" ? "bg-amber-50 text-amber-700" : "bg-gradient-primary-start text-primary"
            }`}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {ICONS[tone]}
            </svg>
          </div>
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
          <div className="space-y-5 text-gray-700">{children}</div>
        </div>
      </div>
    </section>
  )
}

/** Small key/value list used for booking details. */
export function DetailList({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="divide-y divide-border rounded-xl border border-border bg-gray-50 px-4 text-sm">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between gap-4 py-2.5">
          <dt className="text-gray-600">{label}</dt>
          <dd className="text-right font-semibold text-gray-900">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
