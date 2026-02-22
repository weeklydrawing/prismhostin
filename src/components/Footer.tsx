import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  const usefulLinks = [
    { label: "Status", href: "https://status.prismhosting.ink", external: true },
    { label: "Panel", href: "https://panel.prismhosting.ink", external: true },
    { label: "Billing", href: "https://billing.prismhosting.ink", external: true },
  ];

  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 text-xl font-bold text-foreground">
              <span className="text-gradient-blue">Prism</span>Hosting
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lightning-fast hosting for Discord bots and websites. Deploy in seconds.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Useful Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="mailto:support@prismhosting.ink" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">PrismHosting</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
