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
    tag: null,
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

const PlanCard = ({ plan, index }: { plan: (typeof botPlans)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`glass-card group relative flex flex-col rounded-2xl p-6 transition-all duration-500 ${
      plan.popular ? "border-primary/40 ring-1 ring-primary/20" : ""
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold">
        Most Popular
      </div>
    )}

    <h3 className="text-lg font-semibold">{plan.name}</h3>
    <div className="text-3xl font-bold">{plan.price}/mo</div>

    <div className="grid grid-cols-3 gap-2 my-4">
      <div>{plan.ram}</div>
      <div>{plan.cpu}</div>
      <div>{plan.storage}</div>
    </div>

    <ul className="flex-1 space-y-2">
      {plan.features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-sm">
          <Check size={14} /> {f}
        </li>
      ))}
    </ul>

    <a href="https://discord.gg/M8tFEWJHVS" className="mt-4 block text-center border py-2 rounded-lg">
      Get Started
    </a>
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
    <div className="min-h-screen">
      <ParticleBackground />

      <nav className="fixed top-0 w-full flex justify-between p-4">
        <Link to="/">PrismHosting</Link>
        <Link to="/">Back</Link>
      </nav>

      <div className="pt-24 px-6">
        <AnimatePresence mode="wait">
          {!selected ? (
            <div className="grid sm:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <button key={cat.id} onClick={() => setSelected(cat.id)}>
                  <cat.icon />
                  <h3>{cat.label}</h3>
                  <p>{cat.desc}</p>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <button onClick={() => setSelected(null)}>Back</button>

              <h2>
                {selected === "bot"
                  ? "Bot Hosting"
                  : selected === "web"
                  ? "Web Hosting"
                  : "Minecraft Hosting"}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((p, i) => (
                  <PlanCard key={p.name} plan={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Plans;
