import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { hotel } from "@/data/hotel";

const footerLinks = {
  explore: [
    { label: "Rooms & Suites", href: "#rooms" },
    { label: "Dining", href: "#" },
    { label: "Spa & Wellness", href: "#" },
    { label: "Local Experiences", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl mb-4">
              <span className="text-primary">
                {hotel.name.split(" ")[0]}
              </span>
              <span className="text-foreground font-light">
                {hotel.name.split(" ")[1]}
              </span>
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Modern hotel websites designed to convert visitors into guests.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-overline text-foreground mb-6">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-overline text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-overline text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-body text-muted-foreground">
                <MapPin size={18} className="mt-0.5 text-primary shrink-0" />
                <span>
                  {hotel.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${hotel.phone.main}`}
                  className="flex items-center gap-3 text-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  {hotel.phone.main}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${hotel.mail}`}
                  className="flex items-center gap-3 text-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  {hotel.mail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} {hotel.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-caption text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
