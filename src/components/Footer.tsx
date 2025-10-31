import { NavigateNext, Facebook, Twitter, LinkedIn, Instagram, KeyboardArrowUp } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: LinkedIn, href: "#", label: "LinkedIn" },
    { Icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-all duration-300 hover:scale-110 glow-blue"
        aria-label="Back to top"
      >
        <KeyboardArrowUp className="text-2xl" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">New Moon Entrepreneur</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for technology and security solutions in Kenya. Professional installation, quality products, and 24/7 support.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:glow-blue flex items-center justify-center transition-all duration-300"
                >
                  <social.Icon className="text-primary hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <NavigateNext className="text-primary group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• CCTV Installation</li>
              <li>• Alarm Systems</li>
              <li>• Intercom Systems</li>
              <li>• Networking Solutions</li>
              <li>• Electrical Wiring</li>
              <li>• Maintenance & Support</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} New Moon Entrepreneur. All rights reserved.</p>
          <p className="mt-2">Professional Technology & Security Solutions in Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
