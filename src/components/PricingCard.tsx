import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  ram: string;
  cpu: string;
  storage: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ name, price, ram, cpu, storage, features, popular }: PricingCardProps) => {
  return (
    <div
      className={`glass-card glass-card-hover relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
        popular ? "border-primary/40 ring-1 ring-primary/20" : ""
      }`}
    >
      {popular && (
        <div className="popular-badge absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-foreground">{price}</span>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
      </div>

      {/* Specs */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {[
          { label: "RAM", value: ram },
          { label: "CPU", value: cpu },
          { label: "Storage", value: storage },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-secondary p-2.5 text-center">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className="mt-0.5 text-sm font-semibold text-foreground">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check size={16} className="mt-0.5 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all duration-300 ${
          popular
            ? "btn-primary-glow text-primary-foreground"
            : "border border-border bg-secondary text-foreground hover:bg-muted"
        }`}
      >
        Get Started
      </a>
    </div>
  );
};

export default PricingCard;
