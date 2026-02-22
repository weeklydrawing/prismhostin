import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const TermsOfService = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
            <span className="text-gradient-blue">Prism</span>Hosting
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Terms of <span className="text-gradient-blue">Service</span>
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">Last updated: January, 2026</p>

          <div className="prose-custom space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms" or "ToS") govern your access to and use of any and all services, tools, platforms, sub-projects, websites, applications, APIs, infrastructure, and related software operated or provided by Allay Studios LLC ("we", "our", or "us"). These Terms apply globally to all products and sub-brands, including experimental and unreleased services. By using our services, you confirm that you have read, understood, and fully agree to be legally bound by these Terms.
            </p>

            {[
              {
                title: "1. Scope of Agreement",
                content: `These Terms apply to all products and services offered by Allay Studios LLC. We operate both creative and technical service offerings, including commissioned development services and hosting-related infrastructure. This includes:\n\n• Hosting & infrastructure services (game servers, VPS, dedicated servers, databases, cloud storage, ...)\n• Custom development services, software creation, design, and studio-related contract work\n• Web platforms, SaaS tools, portals, automation systems, and internal dashboards\n• APIs, integrations, and experimental or beta platforms\n• Any services provided under affiliated sub-brands, projects, or exploratory releases`
              },
              {
                title: "2. Account Registration & Responsibilities",
                content: "You must provide accurate and complete information when registering for an account. You are solely responsible for all activities under your account, including any misuse or unauthorized access. We are not liable for any loss or damage resulting from your failure to protect your credentials."
              },
              {
                title: "3. Age Requirements",
                content: "You must be at least 13 years old to use our services. To enter into binding agreements, make purchases, or manage billing, you must be 18 years or older. Users under 18 may only purchase or manage paid services with explicit parental or legal guardian consent."
              },
              {
                title: "4. Payments, Billing & Credit",
                content: `4.1 Hosting Services (Prepaid & Contract)\n\n• All hosting services are billed upfront unless otherwise agreed in writing.\n• Hosting services activate only after full, confirmed receipt of payment.\n• Game server hosting is eligible for a refund within 48 hours of initial purchase (excluding renewals). Refunds are issued exclusively as account credit and remain at the sole discretion of management.\n• Any abuse or misuse of our services will result in immediate termination without refund.\n• Account credit is non-refundable and non-transferable.\n• No refunds apply to VPS hosting, dedicated servers, database hosting, domains, or any infrastructure-based services.\n• Chargebacks or payment disputes result in immediate termination and may lead to legal action.\n\n4.2 Studio Services (Development / Creative Work)\n\n• All development, design, and custom studio services are non-refundable under all conditions.\n• Work begins only after payment or agreed deposit has been received.`
              },
              {
                title: "5. Service Access, Uptime & Maintenance",
                content: `We target a monthly uptime of 99.7% for our hosting infrastructure. If uptime falls below this level due to issues originating from our infrastructure, customers may request pro-rated non-cash service credits, capped at 100% of the monthly fee.\n\nThe following do not count toward downtime:\n• Scheduled or emergency maintenance\n• Customer-caused issues, misconfigurations, or overloaded services\n• Third-party provider failures or upstream outages\n• Network attacks, DDoS events, or external routing issues\n• Outages affecting fewer than 2% of users`
              },
              {
                title: "6. Resource Usage & Fair Use Policy",
                content: "We operate under a fair usage policy. Excessive or harmful resource consumption may result in throttling, limitations, or suspension. Hosting services may not be used as proxy routing points, tunneling nodes, or for any similar traffic redistribution purpose. Free or included resources must be used primarily within our infrastructure."
              },
              {
                title: "7. Prohibited Use",
                content: `You agree not to use any of our services for:\n\n• Malware, DDoS tools, or illegal material\n• Unauthorized access attempts ("hacking")\n• Cryptocurrency mining without written permission\n• Network abuse, scanning, or exploitation attempts\n• Proxy routing, tunneling, or anonymization services\n• Any activity violating local, national, or international law`
              },
              {
                title: "8. Intellectual Property",
                content: "All content, code, systems, and software provided by us remain the sole property of Allay Studios LLC or its licensors. You are prohibited from copying, reverse-engineering, modifying, or redistributing any intellectual property without prior written consent."
              },
              {
                title: "9. Modifications to Terms",
                content: "These Terms may be updated at any time with or without notice. Your continued use of our services after any updates constitutes acceptance of the revised Terms."
              },
              {
                title: "10. Liability Disclaimer",
                content: "To the fullest extent permitted by applicable law, Allay Studios LLC disclaims all liability for any damages of any kind — including direct, indirect, incidental, special, punitive, or consequential damages — regardless of the cause or theory of liability."
              },
              {
                title: "11. Data Protection & GDPR",
                content: "We comply with the General Data Protection Regulation (GDPR) and other relevant privacy laws. You may request access, correction, or deletion of your personal data at any time."
              },
              {
                title: "12. Support Policy",
                content: "We provide full support for hosting-related issues such as network availability, hardware, control panels, and service uptime. Customers are responsible for their own software environments."
              },
              {
                title: "13. Force Majeure",
                content: "We are not responsible for any delay or failure in performance caused by factors beyond our reasonable control."
              },
              {
                title: "14. Severability",
                content: "If any part of these Terms is found to be invalid, illegal, or unenforceable, the remaining parts shall continue in full force and effect."
              },
              {
                title: "15. Governing Law",
                content: "These Terms are governed by the laws of the State of Wyoming, United States. Jurisdiction for any disputes lies exclusively with the competent courts of Natrona County, Wyoming."
              },
              {
                title: "16. Contact",
                content: "For support: info@allay-studios.com\nFor legal inquiries: legal@wonnky.com"
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.03, duration: 0.4 }}
                className="glass-card rounded-2xl p-6"
              >
                <h2 className="mb-3 text-lg font-bold text-foreground">{section.title}</h2>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
