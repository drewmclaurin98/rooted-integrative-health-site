'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is NIS a medical treatment?',
    answer:
      'NIS is not a medical treatment and does not diagnose, treat, or cure any medical condition. It is a wellness assessment approach that aims to support neurological communication and the body\'s natural regulatory processes. It is not a substitute for medical care.',
  },
  {
    question: 'Is it safe?',
    answer:
      'Yes. NIS sessions are non-invasive and involve only light touch. There are no needles, medications, or physical manipulation. Sessions are generally well-tolerated by all ages.',
  },
  {
    question: 'Does it hurt?',
    answer:
      'No. The assessment involves gentle pressure at specific neurological points. Most clients report the experience as comfortable and relaxing.',
  },
  {
    question: 'How many sessions are typically recommended?',
    answer:
      'This varies depending on your concerns and how your body responds. Many clients begin to notice changes within the first few sessions. Your practitioner will discuss a recommended frequency after your initial assessment.',
  },
  {
    question: 'Is NIS covered by insurance?',
    answer:
      'NIS sessions are typically not covered by health insurance in Minnesota, as it is considered a wellness service rather than a medical treatment. Payment plans and pricing will be provided at the time of booking. We recommend contacting your insurer directly if you have specific coverage questions.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-gray-900 font-medium text-base"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden min-h-0">
                    <p className="mt-4 pb-1 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
