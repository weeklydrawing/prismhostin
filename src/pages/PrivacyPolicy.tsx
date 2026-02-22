import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const PrivacyPolicy = () => {
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
            Privacy <span className="text-gradient-blue">Policy</span>
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">Last updated: January, 2026</p>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how Allay Studios LLC ("we", "us", or "our") collects, uses, and protects your personal information when you use our services, websites, dashboards, and digital platforms. We are based in the United States and operate globally, including users in the European Union and other international regions.
            </p>

            {[
              {
                title: "1. Purpose",
                content: "This policy outlines how we handle your data in accordance with U.S. federal and state privacy laws, and with global standards including GDPR (EU) and CCPA (California)."
              },
              {
                title: "2. Information We Collect",
                content: "• Account registration data (email, password, optional OAuth logins like Discord or Google)\n• Billing details and transaction history via Stripe and PayPal\n• Server metadata and usage logs (e.g. IP addresses, panel activity, node data)\n• Website usage and technical analytics\n• Support communications\n• Cookies and similar technologies"
              },
              {
                title: "3. How We Use Your Data",
                content: "• To register and maintain hosting accounts\n• To provide and manage infrastructure services\n• To process payments and generate invoices\n• To send service-related notifications and updates\n• To prevent fraud and unauthorized access\n• To comply with legal and tax obligations\n• To analyze service usage and improve performance"
              },
              {
                title: "4. Cookies & Tracking",
                content: "We use cookies and similar technologies for authentication, analytics, and improving user experience. Essential cookies are required for login and dashboard features."
              },
              {
                title: "5. Payments & Billing",
                content: "Payments are processed via Stripe, PayPal, and Cryptomus. We do not store full credit card data on our servers."
              },
              {
                title: "6. Hosting & Infrastructure",
                content: "Our infrastructure is hosted in secure data centers in the United States and the European Union. Access to user data is strictly limited to authorized personnel."
              },
              {
                title: "7. Data Retention",
                content: "We retain data only as long as necessary for legal, operational, and service-related purposes. You may request deletion of your account and data at any time by contacting us."
              },
              {
                title: "8. Third-Party Services",
                content: "We may use third-party service providers under strict confidentiality agreements. All subprocessors are vetted for security and compliance."
              },
              {
                title: "9. International Transfers",
                content: "By using our services, you consent to your data being processed in the United States and other countries outside of your jurisdiction. We implement appropriate safeguards to protect international data flows."
              },
              {
                title: "10. Your Rights",
                content: "• Right to access your stored personal data\n• Right to correct or update incorrect data\n• Right to delete your data (if no legal obligation exists)\n• Right to object or restrict processing\n• Right to data portability\n• Right to file a complaint with a data authority"
              },
              {
                title: "11. Data Protection for EU Residents",
                content: "If you are located in the European Union, your data is processed in accordance with the General Data Protection Regulation (GDPR). We rely on your consent, contract necessity, and legal obligations as lawful bases for processing."
              },
              {
                title: "12. Children's Privacy",
                content: "Our services are not directed to individuals under the age of 13, and we do not knowingly collect data from children."
              },
              {
                title: "13. Security",
                content: "We implement industry-standard measures including encryption, access controls, and secure hosting to protect your data. However, no internet transmission is ever 100% secure."
              },
              {
                title: "14. Dispute Resolution",
                content: "EU residents may use the European Commission's Online Dispute Resolution platform: https://ec.europa.eu/consumers/odr"
              },
              {
                title: "15. Contact",
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

export default PrivacyPolicy;
