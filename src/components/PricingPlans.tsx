import { Check, Star, Crown, Zap } from 'lucide-react';

interface PricingPlansProps {
  isVisible: boolean;
  leadEmail: string;
}

export function PricingPlans({ isVisible, leadEmail }: PricingPlansProps) {
  const plans = [
    {
      name: 'Starter',
      price: 149,
      description: 'Perfect for Boutiques',
      icon: Zap,
      features: [
        { text: '100 Product Listings', bold: false },
        { text: 'Standard AI Matching', bold: false },
        { text: 'Basic Analytics', bold: false },
        { text: 'Email Support', bold: false }
      ],
      buttonText: 'Subscribe',
      highlighted: false
    },
    {
      name: 'Growth',
      price: 399,
      description: 'For Scaling D2C Brands',
      icon: Star,
      badge: 'Recommended',
      features: [
        { text: '500 Product Listings', bold: true },
        { text: 'Priority AI Ranking', bold: true },
        { text: 'Trend & Intent Dashboard', bold: true },
        { text: 'Priority Support', bold: true }
      ],
      buttonText: 'Subscribe',
      highlighted: true
    },
    {
      name: 'Authority',
      price: 999,
      description: 'For Category Leaders',
      icon: Crown,
      features: [
        { text: 'Unlimited Listings', bold: true },
        { text: 'Dominant Placement', bold: true },
        { text: 'Deep Customer Insights', bold: true },
        { text: 'Dedicated Success Manager', bold: false }
      ],
      buttonText: 'Subscribe',
      highlighted: false
    }
  ];

  const handleSubscribe = (planName: string, price: number) => {
    // In a real implementation, this would redirect to payment or create a subscription
    alert(`Subscribing to ${planName} plan ($${price}/month) with email: ${leadEmail}`);
  };

  if (!isVisible) return null;

  return (
    <section className="relative px-6 py-24">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#333333] mb-4">
            Select Your Growth Plan
          </h2>
          <p className="text-[#776F69]">
            Simple, transparent pricing to scale your visibility.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
              >
                {/* Recommended Badge */}
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-5 py-2 bg-gradient-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] text-white text-sm rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div
                  className={`h-full p-8 rounded-[20px] transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white border-2 border-[#FF3450] shadow-xl shadow-[#FF3450]/20'
                      : 'bg-white border border-[rgba(103,103,103,0.2)] hover:border-[#FF3450]/30 hover:shadow-lg'
                  }`}
                >
                  {/* Plan Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FC904E]/10 via-[#FF3450]/10 to-[#FF00F8]/10 rounded-[12px] flex items-center justify-center">
                      <Icon className="w-6 h-6" style={{ stroke: 'url(#icon-gradient-plan)' }} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="icon-gradient-plan" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FC904E" />
                            <stop offset="50%" stopColor="#FF3450" />
                            <stop offset="100%" stopColor="#FF00F8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="text-[#333333]">{plan.name}</h3>
                  </div>

                  <p className="text-[#776F69] text-sm mb-8">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#333333] text-4xl">${plan.price}</span>
                      <span className="text-[#776F69]">/ month</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => {
                      return (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <span className={feature.bold ? 'text-[#333333]' : 'text-[#776F69]'}>
                            {feature.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSubscribe(plan.name, plan.price)}
                    className={`w-full py-4 rounded-[25px] transition-all duration-200 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] text-white hover:shadow-lg hover:shadow-[#FF3450]/30'
                        : 'bg-[#333333] text-white hover:bg-[#FF3450]'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-[#776F69] text-sm">
            All plans are billed monthly. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
