import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQS } from '@/data/schedule'
import { Bratwurst } from '@/components/BavarianArt'
import Float from '@/components/FloatingDecor'

const FaqSection = () => {
  return (
    <section id="faq" className="relative overflow-hidden bg-brand-gold py-16 md:py-24">
      <Float className="bottom-12 left-8 hidden w-32 opacity-90 xl:block" tilt={-14} variant="float-slow">
        <Bratwurst className="w-full" />
      </Float>

      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="inline-block border-4 border-brand-ink bg-white px-4 py-1.5 font-display text-xs tracking-[0.24em] text-brand-ink poster-shadow-sm">
            Before you commit
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[0.9] text-brand-ink sm:text-5xl md:text-6xl">
            Questions,
            <br />
            <span className="text-brand-blue">answered</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 border-4 border-brand-ink bg-white poster-shadow">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className={`border-brand-ink px-5 sm:px-7 ${i > 0 ? 'border-t-4' : 'border-t-0'} border-b-0`}
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg leading-tight tracking-wide text-brand-ink hover:no-underline sm:text-xl [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[3] [&>svg]:text-brand-blue">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm font-medium leading-relaxed text-brand-ink/75 sm:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection
