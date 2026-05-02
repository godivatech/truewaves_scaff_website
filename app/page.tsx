import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { SplitCTA } from "@/components/sections/SplitCTA";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { WhatsAppConnect } from "@/components/sections/WhatsAppConnect";
import { Leadership } from "@/components/sections/Leadership";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <About />
      <SplitCTA />
      <QuoteForm />
      <WhatsAppConnect />
      <Leadership />
      <FinalCTA />
    </>
  );
}
