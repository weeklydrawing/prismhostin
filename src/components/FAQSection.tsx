import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What languages are supported for Discord bots?",
    a: "We support Node.js, Python, Java, C#, Go, Rust, and any other language that can run a Discord bot. Our platform is designed to be flexible with your preferred stack.",
  },
  {
    q: "What web technologies do you support?",
    a: "Our web hosting supports PHP and HTML out of the box. All plans include free SSL certificates, MySQL database support (Basic plan and above), and full FTP access.",
  },
  {
    q: "How quickly can I deploy?",
    a: "Deployment is instant. Once you upload your files or connect your repository, your project goes live immediately with zero configuration required.",
  },
  {
    q: "Is there a setup fee?",
    a: "No. All plans come with free instant setup. The price you see is the price you pay — no hidden fees.",
  },
  {
    q: "What happens if I exceed my resource limits?",
    a: "You can upgrade your plan at any time with no downtime. We'll also notify you if you're approaching your limits so you can plan ahead.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 7-day money-back guarantee on all plans. If you're not satisfied, contact our support team for a full refund.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-hero px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card rounded-xl border-none px-5"
            >
              <AccordionTrigger className="py-4 text-left text-sm font-medium text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
