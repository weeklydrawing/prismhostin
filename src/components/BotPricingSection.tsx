import PricingCard from "./PricingCard";

const commonFeatures = [
  "DDoS Protection",
  "99.9% Uptime SLA",
  "24/7 Support",
  "Instant Setup",
];

const plans = [
  {
    name: "Micro",
    price: "£0.50",
    ram: "256 MB",
    cpu: "50%",
    storage: "1 GB",
    features: ["Node.js & Python", ...commonFeatures],
  },
  {
    name: "Small",
    price: "£1",
    ram: "500 MB",
    cpu: "75%",
    storage: "2 GB",
    features: ["Node.js, Python & More", ...commonFeatures],
  },
  {
    name: "Medium",
    price: "£1.50",
    ram: "756 MB",
    cpu: "100%",
    storage: "3 GB",
    features: ["All Languages Supported", ...commonFeatures, "Priority Support"],
    popular: true,
  },
  {
    name: "Large",
    price: "£2",
    ram: "1 GB",
    cpu: "125%",
    storage: "4 GB",
    features: ["All Languages Supported", ...commonFeatures, "Priority Support", "Custom Domain"],
  },
];

const BotPricingSection = () => {
  return (
    <section id="bot-plans" className="bg-hero px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            🤖 Discord Bot Hosting
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Bot Hosting <span className="text-gradient-blue">Plans</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Run your Discord bots 24/7 with Node.js, Python, Java, and more. No hidden fees.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotPricingSection;
