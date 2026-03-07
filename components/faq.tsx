"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/lib/language-context";

export default function FAQs() {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    }
  ];

  return (
    <section className="scroll-py-12 py-12 sm:py-16 md:scroll-py-32 md:py-32 bg-[#030303]">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        <div className="grid gap-y-8 sm:gap-y-12 px-2 lg:grid-cols-[400px_1fr] lg:gap-x-16">
          <div className="text-center lg:text-left">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              {t('faq.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              {t('faq.subtitle')}
            </p>
            <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#34bb92] text-black rounded-lg font-medium hover:bg-[#2da881] transition-colors flex items-center gap-2 mx-auto lg:mx-0 text-sm sm:text-base">
              {t('faq.button')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="sm:mx-auto sm:max-w-2xl lg:mx-0 lg:max-w-none">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg px-4 sm:px-6 bg-[#0a0a0a] hover:border-[#34bb92]/30 transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-[#34bb92] hover:no-underline text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-xs sm:text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
