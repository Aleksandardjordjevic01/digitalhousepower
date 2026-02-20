"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We provide full digital services including website and application development, graphic design, digital marketing, SEO optimization, e-commerce solutions, as well as long-term maintenance and technical support."
  },
  {
    question: "Do you do custom solutions or do you use templates?",
    answer: "We work exclusively on custom solutions. Every project is designed and developed according to the client’s specific needs, without using generic templates."
  },
  {
    question: "How long does it take to create a website?",
    answer: "The development timeline depends entirely on the project requirements and complexity. Each project is unique, so timelines are defined individually in agreement with the client, based on scope and functionality."
  },
  {
    question: "What does the collaboration process look like?",
    answer: "The process includes requirement analysis, planning, design, development, testing, and project launch, with continuous client communication."
  },
  {
    question: "How can I start cooperation?",
    answer: "You can contact us via the contact form, email, or request consultation. After that, we analyze your project and propose the best solution."
  }
];

export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 bg-[#030303]">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid gap-y-12 px-2 lg:grid-cols-[400px_1fr] lg:gap-x-16">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl text-white">
              Frequently asked Questions
            </h2>
            <p className="text-gray-400">
              Got questions? We&apos;ve got answers. Explore our FAQs to learn more about our process, pricing, and how we can bring your vision to life.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#34bb92] text-black rounded-lg font-medium hover:bg-[#2da881] transition-colors flex items-center gap-2 mx-auto lg:mx-0">
              Ask a question
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="sm:mx-auto sm:max-w-2xl lg:mx-0 lg:max-w-none">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg px-6 bg-[#0a0a0a] hover:border-[#34bb92]/30 transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-[#34bb92] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
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
