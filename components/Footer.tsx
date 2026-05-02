import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--surface-1)] border-t border-[var(--surface-4)] pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="relative w-[200px] h-[50px] mb-6">
              <Image 
                src="/images/Logo.png" 
                alt="True Waves Scaff" 
                fill 
                className="object-contain" 
              />
            </div>
            <p className="text-[var(--text-muted)] max-w-sm mb-6 leading-relaxed">
              Your trusted partner in scaffolding & formwork solutions. From small projects to large developments, we provide safe, reliable scaffolding and material solutions.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-[var(--foreground)] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li><Link href="/services" className="hover:text-[var(--foreground)] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[var(--foreground)] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--foreground)] transition-colors">Get a Quote</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--foreground)] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-[var(--foreground)] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li>Madurai, Tamil Nadu</li>
              <li>Phone: +91 (Provide Number)</li>
              <li>Email: contact@truewavesscaff.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--surface-4)] pt-8 flex flex-col lg:flex-row items-center justify-between text-sm text-[var(--text-muted)] gap-4">
          <p>© {new Date().getFullYear()} True Waves Scaff. All rights reserved.</p>
          
          <p className="text-center">
            Designed and developed by <a href="https://www.godivatech.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--primary-500)] hover:text-[var(--primary-600)] transition-colors">Godiva Tech</a>
          </p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
