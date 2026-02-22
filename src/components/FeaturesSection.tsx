import { Shield, Zap, Globe, Server, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Deploy",
    desc: "Push your code and go live in seconds. Zero downtime deployments.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    desc: "Enterprise-grade security with built-in DDoS mitigation on every plan.",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Low-latency infrastructure optimised for Discord API and web traffic.",
  },
  {
    icon: Server,
    title: "NVMe Storage",
    desc: "Blazing-fast NVMe SSDs for maximum I/O performance.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    desc: "SLA-backed uptime guarantee with automatic failover.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Expert support team available around the clock via Discord and email.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-section px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Built for <span className="text-gradient-blue">Performance</span>
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Everything you need to run your projects reliably at scale.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_hsla(210,100%,50%,0.12)]"
            >
              {/* Background hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 50%, hsla(210, 100%, 50%, 0.06), transparent 70%)" }} />
              <div className="relative z-10">
                <div className="feature-icon mb-4 inline-flex rounded-xl p-3 transition-transform duration-300 group-hover:scale-110">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
