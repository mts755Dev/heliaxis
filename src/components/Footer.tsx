import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const solutionLinks = [
  { name: "Residential Solutions", href: "/residential" },
  { name: "Commercial & Public Sector", href: "/commercial" },
  { name: "Consultation & Advisory", href: "/consultation" },
];

const resourceLinks = [
  { name: "Funding & Support", href: "/funding" },
  { name: "Smart Export Guarantee", href: "/seg" },
  { name: "About Us", href: "/about" },
];

const serviceLinks = [
  { name: "Solar PV Systems", href: "/residential#solar" },
  { name: "Battery Storage", href: "/residential#battery" },
  { name: "Infrared Heating", href: "/residential#infrared" },
  { name: "LED Lighting", href: "/residential#led" },
];

export function Footer() {
  return (
    <footer className="bg-heliaxis-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="p-2 rounded-[10px] border-2 border-heliaxis-gold">
                <Image
                  src="/assets/heliaxis-logo.png"
                  alt="Heliaxis"
                  width={180}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Energy That Revolves Around You. Delivering renewable energy solutions for homes, businesses and public sector organisations across Wales and the South West of England.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heliaxis-gold hover:text-heliaxis-navy transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heliaxis-gold hover:text-heliaxis-navy transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heliaxis-gold hover:text-heliaxis-navy transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-heliaxis-gold">Solutions</h3>
            <ul className="space-y-4">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-heliaxis-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-heliaxis-gold">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-heliaxis-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-heliaxis-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@heliaxis.co.uk"
                  className="flex items-center gap-3 text-white/70 hover:text-heliaxis-gold transition-colors"
                >
                  <Mail className="w-5 h-5 text-heliaxis-gold" />
                  hello@heliaxis.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+441633965205"
                  className="flex items-center gap-3 text-white/70 hover:text-heliaxis-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-heliaxis-gold" />
                  +44 1633 965205
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-heliaxis-gold flex-shrink-0 mt-0.5" />
                  <span>Wales & South West England</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex justify-center items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Heliaxis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

