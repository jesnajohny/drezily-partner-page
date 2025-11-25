import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onSubmit: (email: string, storeUrl: string) => void;
  isSubmitted: boolean;
}

export function HeroSection({ onSubmit, isSubmitted }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [errors, setErrors] = useState({ email: '', storeUrl: '' });

  const validateForm = () => {
    const newErrors = { email: '', storeUrl: '' };
    let isValid = true;

    if (!email || !email.includes('@')) {
      newErrors.email = 'Please enter a valid business email';
      isValid = false;
    }

    if (!storeUrl || !storeUrl.startsWith('http')) {
      newErrors.storeUrl = 'Please enter a valid store URL';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(email, storeUrl);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Headline */}
        <h1 className="text-[#333333] mb-6">
          The Smartest AI Platform for Personalised Fashion Shopping.
        </h1>

        {/* Sub-headline */}
        <p className="text-[#776F69] mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          Get your products in front of the customer who would love it. Stop guessing—let our AI match your brand with high-intent shoppers instantly.
        </p>

        {/* Onboarding Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
            <div>
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-white border border-[rgba(103,103,103,0.3)] rounded-[25px] text-[#333333] placeholder-[rgba(119,111,105,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FF3450] focus:border-transparent transition-all"
              />
              {errors.email && (
                <p className="text-[#FF3450] text-sm mt-2 text-left">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="url"
                placeholder="Paste your store link (e.g., myshopify.com)"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
                className="w-full px-6 py-4 bg-white border border-[rgba(103,103,103,0.3)] rounded-[25px] text-[#333333] placeholder-[rgba(119,111,105,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FF3450] focus:border-transparent transition-all"
              />
              {errors.storeUrl && (
                <p className="text-[#FF3450] text-sm mt-2 text-left">{errors.storeUrl}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] text-white rounded-[25px] hover:shadow-lg hover:shadow-[#FF3450]/30 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Get Started with Drezily
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto p-8 bg-white border border-[rgba(103,103,103,0.2)] rounded-[25px] shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-[#333333] mb-2">Lead Saved Successfully!</p>
            <p className="text-[#776F69] text-sm">
              Scroll down to select your growth plan
            </p>
          </div>
        )}
      </div>
    </section>
  );
}