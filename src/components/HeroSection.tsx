import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-hero relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(210 100% 50%)" }} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground animate-fade-up">
          <Zap size={14} className="text-primary" />
          99.9% Uptime Guaranteed
        </div>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Power Your
          <br />
          <span className="text-gradient-blue">Digital Projects</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Lightning-fast Discord bot hosting and web hosting. Deploy in seconds with enterprise-grade infrastructure starting from just £0.50/mo.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#bot-plans"
            className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            View Plans
            <ArrowRight size={16} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "<50ms", label: "Latency" },
            { value: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-foreground sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
