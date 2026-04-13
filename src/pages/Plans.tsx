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
    tag: null, // ✅ enabled
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
    popular: true,
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

const minecraftPlans = [
  {
    name: "Grass",
    price: "£1.50",
    ram: "1 GB",
    cpu: "100%",
    storage: "5 GB",
    features: ["Paper/Spigot Support", "DDoS Protection", "24/7 Uptime", "Plugin Support"],
  },
  {
    name: "Stone",
    price: "£3",
    ram: "2 GB",
    cpu: "150%",
    storage: "10 GB",
    features: ["Paper/Spigot Support", "DDoS Protection", "24/7 Uptime", "Plugin Support", "Free Backups"],
    popular: true,
  },
  {
    name: "Diamond",
    price: "£5",
    ram: "4 GB",
    cpu: "200%",
    storage: "20 GB",
    features: ["Paper/Spigot Support", "DDoS Protection", "24/7 Uptime", "Plugin Support", "Free Backups", "Priority Support"],
  },
  {
    name: "Netherite",
    price: "£8",
    ram: "6 GB",
    cpu: "250%",
    storage: "30 GB",
    features: ["Paper/Spigot Support", "DDoS Protection", "24/7 Uptime", "Plugin Support", "Free Backups", "Priority Support", "Dedicated Resources"],
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

  const plans =
    selected === "bot"
      ? botPlans
      : selected === "web"
      ? webPlans
      : selected === "minecraft"
      ? minecraftPlans
      : [];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />

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
            <motion.div key="categories" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* KEEPING YOUR ORIGINAL CATEGORY UI */}
              <div className="mb-16 text-center">
                <div className="mb-4">Choose Your Service</div>
                <h1>What are you hosting?</h1>
                <p>Select a category to see available plans.</p>
              </div>

              <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => setSelected(cat.id)}>
                    <cat.icon size={32} />
                    <h3>{cat.label}</h3>
                    <p>{cat.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key={selected}>
              <button onClick={() => setSelected(null)}>Back</button>

              <h2>
                {selected === "bot"
                  ? "Bot Hosting"
                  : selected === "web"
                  ? "Web Hosting"
                  : "Minecraft Hosting"}
              </h2>

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
