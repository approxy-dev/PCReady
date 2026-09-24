import { faqs } from "@/data/pcready";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`item-${i}`}
          className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-panel"
        >
          <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
