import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b-0">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-[240px] h-[60px] md:w-[360px] md:h-[90px]">
            <Image 
              src="/images/Logo.png" 
              alt="True Waves Scaff" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Services</Link>
          <Link href="/about" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex h-10 items-center justify-center rounded-xl bg-[var(--primary-500)] px-6 text-sm font-medium text-[var(--foreground)] shadow-md shadow-[var(--primary-500)]/20 hover:bg-[var(--primary-400)] transition-colors">
            Get Quote
          </Link>
          {/* Mobile menu toggle could go here */}
        </div>
      </div>
    </header>
  );
}
