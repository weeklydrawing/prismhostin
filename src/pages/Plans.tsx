import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Globe, Gamepad2, Check, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const categories = [
  {
    id: "bot",
    label: "Bot Hosting",
    icon: Bot,
    desc: "Run your Discord bots 24/7",
    tag: null,
  },
  {
    id: "web",
    label: "Web Hosting",
    icon: Globe,
    desc: "PHP & HTML hosting",
    tag: null,
  },
  {
    id: "minecraft",
    label: "Minecraft",
    icon: Gamepad2,
    desc: "Game server hosting",
    tag: "Coming Soon",
  },
];

const botPlans = [
  {
    name: "Micro",
    price: "£0.50",
    ram: "256 MB",
    cpu: "50%",
    storage: "1 GB",
    features: ["Node.js & Python", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support"],
  },
  {
    name: "Small",
    price: "£1",
    ram: "500 MB",
    cpu: "75%",
    storage: "2 GB",
    features: ["Node.js & Python", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support", "Instant Setup"],
    popular: true.
  },
  {
    name: "Medium",
    price: "£1.50",
    ram: "756 MB",
    cpu: "100%",
    storage: "3 GB",
    features: ["Node.js & Python", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support", "Instant Setup", "Priority Support"],
  },
  {
    name: "Large",
    price: "£2",
    ram: "1 GB",
    cpu: "125%",
    storage: "4 GB",
    features: ["Node.js & Python", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support", "Instant Setup", "Priority Support", "Custom Domain"],
  },
];

const webPlans = [
  {
    name: "Starter",
    price: "£1",
    ram: "512 MB",
    cpu: "50%",
    storage: "2 GB",
    features: ["PHP & HTML Support", "Free SSL Certificate", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support"],
  },
  {
    name: "Basic",
    price: "£2",
    ram: "1 GB",
    cpu: "75%",
    storage: "5 GB",
    features: ["PHP & HTML Support", "Free SSL Certificate", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support", "MySQL Database"],
  },
  {
    name: "Standard",
    price: "£3.50",
    ram: "1.5 GB",
    cpu: "100%",
    storage: "10 GB",
    features: ["PHP & HTML Support", "Free SSL Certificate", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support", "MySQL Database", "Custom Domain"],
    popular: true,
  },
  {
    name: "Premium",
    price: "£5",
    ram: "2 GB",
    cpu: "150%",
    storage: "20 GB",
    features: ["PHP & HTML Support", "Free SSL Certificate", "DDoS Protection", "99.9% Uptime SLA", "24/7 Support", "MySQL Database", "Custom Domain", "Priority Support"],
  },
];

const PlanCard = ({
  plan,
  index,
}: {
  plan: (typeof botPlans)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`glass-card group relative flex flex-col rounded-2xl p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_40px_hsla(210,100%,50%,0.15)] ${
      plan.popular ? "border-primary/40 ring-1 ring-primary/20" : ""
    }`}
  >
    {plan.popular && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="popular-badge absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-primary-foreground"
      >
        Most Popular
      </motion.div>
    )}

    <div className="mb-6">
      <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
        <span className="text-sm text-muted-foreground">/mo</span>
      </div>
    </div>

    <div className="mb-6 grid grid-cols-3 gap-3">
      {[
        { label: "RAM", value: plan.ram },
        { label: "CPU", value: plan.cpu },
        { label: "Storage", value: plan.storage },
      ].map((s) => (
        <div key={s.label} className="rounded-lg bg-secondary p-2.5 text-center transition-colors duration-300 group-hover:bg-muted">
          <div className="text-xs text-muted-foreground">{s.label}</div>
          <div className="mt-0.5 text-sm font-semibold text-foreground">{s.value}</div>
        </div>
      ))}
    </div>

    <ul className="mb-8 flex-1 space-y-3">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <Check size={16} className="mt-0.5 shrink-0 text-primary" />
          {f}
        </li>
      ))}
    </ul>

    <motion.a
      href="https://discord.gg/M8tFEWJHVS"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all duration-300 ${
        plan.popular
          ? "btn-primary-glow text-primary-foreground"
          : "border border-border bg-secondary text-foreground hover:bg-muted"
      }`}
    >
      Get Started
    </motion.a>
  </motion.div>
);

const Plans = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const plans = selected === "bot" ? botPlans : selected === "web" ? webPlans : [];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
            <span className="text-gradient-blue">Prism</span>Hosting
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
        <AnimatePresence mode="wait">
          {!selected ? (
            /* Category Selection */
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <Sparkles size={14} className="text-primary" />
                  Choose Your Service
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
                >
                  What are you <span className="text-gradient-blue">hosting</span>?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mx-auto max-w-md text-muted-foreground"
                >
                  Select a category to see available plans and pricing.
                </motion.p>
              </div>

              <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
                {categories.map((cat, i) => {
                  const isDisabled = cat.tag === "Coming Soon";
                  return (
                    <motion.button
                      key={cat.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.1 }}
                      whileHover={isDisabled ? {} : { y: -6, scale: 1.03 }}
                      whileTap={isDisabled ? {} : { scale: 0.97 }}
                      onClick={() => !isDisabled && setSelected(cat.id)}
                      disabled={isDisabled}
                      className={`glass-card group relative flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-500 ${
                        isDisabled
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer hover:border-primary/40 hover:shadow-[0_8px_40px_hsla(210,100%,50%,0.15)]"
                      }`}
                    >
                      {cat.tag && (
                        <span className="absolute top-3 right-3 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {cat.tag}
                        </span>
                      )}
                      <div className="feature-icon mb-5 rounded-2xl p-4 transition-all duration-300 group-hover:scale-110">
                        <cat.icon size={32} className="text-primary" />
                      </div>
                      <h3 className="mb-1 text-lg font-bold text-foreground">{cat.label}</h3>
                      <p className="text-sm text-muted-foreground">{cat.desc}</p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* Plans Grid */
            <motion.div
              key={`plans-${selected}`}
              initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mb-12">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ x: -4 }}
                  onClick={() => setSelected(null)}
                  className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft size={16} />
                  Back to categories
                </motion.button>

                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {selected === "bot" ? "🤖 Discord Bot Hosting" : "🌐 Web Hosting"}
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-3 text-3xl font-bold text-foreground sm:text-4xl"
                  >
                    {selected === "bot" ? "Bot Hosting" : "Web Hosting"}{" "}
                    <span className="text-gradient-blue">Plans</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mx-auto max-w-lg text-muted-foreground"
                  >
                    {selected === "bot"
                      ? "Run your Discord bots 24/7 with Node.j or Python."
                      : "Fast, reliable PHP & HTML hosting with NVMe storage."}
                  </motion.p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map((p, i) => (
                  <PlanCard key={p.name} plan={p} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Plans;
