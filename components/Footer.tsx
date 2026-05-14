import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Inline SVG icons for social brands (since they were removed in lucide v1.0)
  const SocialIcons = {
    Facebook: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    Twitter: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
    ),
    Instagram: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    Linkedin: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    )
  };

  return (
    <footer className="bg-[var(--primary-950)] text-white/70 pt-20 pb-10 mt-auto relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-500)]/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--primary-600)]/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="relative w-[180px] h-[45px] mb-8 brightness-0 invert opacity-90">
              <Image 
                src="/images/Logo.png" 
                alt="True Waves Scaff" 
                fill 
                className="object-contain" 
              />
            </div>
            <p className="text-white/60 mb-8 leading-relaxed max-w-sm">
              Your trusted partner in premium scaffolding & formwork solutions. Committed to safety, reliability, and engineering excellence across Tamil Nadu.
            </p>
            <div className="flex gap-4">
              {[
                { icon: SocialIcons.Facebook, href: "#" },
                { icon: SocialIcons.Twitter, href: "#" },
                { icon: SocialIcons.Instagram, href: "#" },
                { icon: SocialIcons.Linkedin, href: "#" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--primary-500)] hover:border-[var(--primary-500)] hover:text-white transition-all duration-300 group"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-8 text-lg flex items-center gap-2">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Our Services", href: "/services" },
                { name: "About Company", href: "/about" },
                { name: "Project Gallery", href: "#" },
                { name: "Contact Support", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-[var(--primary-400)] flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-8 text-lg">Contact Details</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[var(--primary-400)]" />
                </div>
                <div>
                  <span className="block text-white text-sm font-medium mb-1">Our Location</span>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Madurai Office<br />
                    No. 5, North Street, Singarayar Colony,<br />
                    Narimedu, Madurai - 625002
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[var(--primary-400)]" />
                </div>
                <div>
                  <span className="block text-white text-sm font-medium mb-1">Phone Number</span>
                  <p className="text-sm text-white/60">+91 (Provide Number)</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[var(--primary-400)]" />
                </div>
                <div>
                  <span className="block text-white text-sm font-medium mb-1">Email Address</span>
                  <p className="text-sm text-white/60">contact@truewavesscaff.com</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-8 text-lg">Work With Us</h4>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Ready to start your next project? Get in touch for a comprehensive quote and consultation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white rounded-full transition-all duration-300 font-medium group"
            >
              Get a Quote
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50 order-2 md:order-1">
            © {currentYear} True Waves Scaff. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 order-1 md:order-2">
            <span className="text-sm text-white/50">Crafted by</span>
            <a 
              href="https://www.godivatech.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-[var(--primary-400)] text-sm font-semibold transition-all"
            >
              Godiva Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
