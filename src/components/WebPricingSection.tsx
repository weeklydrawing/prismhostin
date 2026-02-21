import PricingCard from "./PricingCard";

const commonFeatures = [
  "PHP & HTML Support",
  "Free SSL Certificate",
  "DDoS Protection",
  "99.9% Uptime SLA",
  "24/7 Support",
];

const plans = [
  {
    name: "Starter",
    price: "£1",
    ram: "512 MB",
    cpu: "50%",
    storage: "2 GB",
    features: [...commonFeatures],
  },
  {
    name: "Basic",
    price: "£2",
    ram: "1 GB",
    cpu: "75%",
    storage: "5 GB",
    features: [...commonFeatures, "MySQL Database"],
  },
  {
    name: "Standard",
    price: "£3.50",
    ram: "1.5 GB",
    cpu: "100%",
    storage: "10 GB",
    features: [...commonFeatures, "MySQL Database", "Custom Domain"],
    popular: true,
  },
  {
    name: "Premium",
    price: "£5",
    ram: "2 GB",
    cpu: "150%",
    storage: "20 GB",
    features: [...commonFeatures, "MySQL Database", "Custom Domain", "Priority Support"],
  },
];

const WebPricingSection = () => {
  return (
    <section id="web-plans" className="bg-section px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            🌐 Web Hosting
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Web Hosting <span className="text-gradient-blue">Plans</span>
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Fast, reliable PHP & HTML hosting with NVMe storage and free SSL on every plan.
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

export default WebPricingSection;
