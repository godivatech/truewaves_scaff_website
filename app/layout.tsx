import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "True Waves Scaff | Scaffolding Rental & Material Supply in Madurai",
  description:
    "Your trusted partner in scaffolding & formwork solutions. We provide safe, reliable scaffolding rental, formwork solutions, and material supply in Madurai and Tamil Nadu.",
  keywords: [
    "Scaffolding rental in Madurai",
    "Formwork solutions Madurai",
    "Scaffolding suppliers Tamil Nadu",
    "Construction materials",
  ],
  openGraph: {
    title: "True Waves Scaff | Scaffolding Rental in Madurai",
    description: "Safe, reliable, and easy-to-manage scaffolding and material solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased bg-[var(--surface-0)]`} suppressHydrationWarning>
        <LenisProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
