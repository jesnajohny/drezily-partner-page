import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { PricingPlans } from './components/PricingPlans';
import { BackgroundGlow } from './components/BackgroundGlow';

export default function App() {
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadData, setLeadData] = useState({ email: '', storeUrl: '' });
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleLeadSubmit = (email: string, storeUrl: string) => {
    // Save lead data
    setLeadData({ email, storeUrl });
    setLeadSubmitted(true);
    
    // Scroll to pricing section
    setTimeout(() => {
      pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#F9F5F0] relative overflow-hidden">
      <Navbar />
      <BackgroundGlow />
      <div className="pt-[50px]">
        <HeroSection onSubmit={handleLeadSubmit} isSubmitted={leadSubmitted} />
        <ValueProposition />
        <div ref={pricingRef}>
          <PricingPlans isVisible={leadSubmitted} leadEmail={leadData.email} />
        </div>
      </div>
    </div>
  );
}