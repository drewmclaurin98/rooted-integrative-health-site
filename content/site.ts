/**
 * Single source of truth for business / practice information.
 * Update contact details, hours, and location here — every component reads from this.
 */

export const site = {
  name: "Rooted Integrative Health",
  tagline: "Supporting Your Body's Natural Regulation",
  url: "https://rootedintegrativehealth.com",

  practitioner: {
    name: "Caitlin McLaurin",
    credential: "RN",
    title: "Certified NIS Practitioner",
    // Short trust line shown under the hero headline.
    trustLine: "Caitlin McLaurin, RN · Certified NIS Practitioner",
  },

  location: {
    city: "St. Paul",
    region: "MN",
    regionName: "Minnesota",
    // Address intentionally omitted until the practice location is finalized.
    // Set `address` (street) once confirmed; the site will show it and add it to structured data.
    address: "",
    byAppointmentOnly: true,
    // Safe copy to display until an address is finalized.
    note: "In-person sessions in St. Paul, Minnesota. Exact appointment location provided when booking.",
    // TODO: set real hours once finalized.
    hours: "By appointment only",
  },

  contact: {
    email: "caitlin.j.mclaurin@gmail.com",
    phone: "(206) 715-8708",
    instagram: "https://www.instagram.com/rootedintegrative",
    instagramHandle: "@rootedintegrative",
  },

  // Short disclaimer for the footer.
  disclaimerShort:
    "Rooted Integrative Health provides wellness services and does not diagnose, treat, cure, or prevent medical conditions. Services are not a substitute for medical care.",

  // Full legal disclaimer for the /disclaimer page.
  disclaimerFull:
    "Caitlin McLaurin is a Registered Nurse and Certified NIS practitioner, not a doctor, and as such is not a substitute for diagnosis and treatment by a qualified, licensed, medical professional. The purpose of NIS is to help restore normal physiological function, and is not intended to diagnose, treat, cure, or prevent any disease. Any information given is offered as personal opinion and suggestion, not diagnosis. Any nutritional supplements, dietary advice, and/or home care suggestions are offered as personal recommendations, not a prescription. Caitlin McLaurin is not a doctor, and makes no claims for any cures and/or diagnosis either stated or implied and assumes no liability for the use of any information disclosed. The above disclaimer applies to information discussed during an office visit, via phone or email correspondence, or correspondence via any other media or means.",
}

export type Site = typeof site
