import { Eye, Image, Target } from 'lucide-react';

export function ValueProposition() {
  const features = [
    {
      icon: Target,
      title: 'Context-Aware',
      description: 'We know when a user wants "Beach wedding guest" vs. "Beach vacation."'
    },
    {
      icon: Image,
      title: 'Visual Discovery',
      description: 'Your products are indexed by image, not just keywords.'
    },
    {
      icon: Eye,
      title: 'High Intent',
      description: 'Connect with shoppers who are ready to buy, not just browse.'
    }
  ];

  return (
    <section className="relative px-6 py-24">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#333333] mb-6">
            Precision over Volume.
          </h2>
          <p className="text-[#333333] text-lg mb-4">
            We don't just send traffic. We send{' '}
            <span className="font-semibold bg-gradient-to-r from-[#FC904E] via-[#FF3450] to-[#FF00F8] bg-clip-text text-transparent">
              matches
            </span>
            .
          </p>
          <p className="text-[#776F69] max-w-3xl mx-auto leading-relaxed">
            Our proprietary AI,{' '}
            <span className="italic bg-gradient-to-r from-[#D35BC7] to-[#F3344B] bg-clip-text text-transparent">
              Zily
            </span>
            , understands context, style, and budget to recommend your specific products to shoppers actively searching for them.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="h-full p-8 bg-white rounded-[20px] border border-[rgba(103,103,103,0.15)] hover:border-[#FF3450]/30 hover:shadow-lg hover:shadow-[#FF3450]/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FC904E]/10 via-[#FF3450]/10 to-[#FF00F8]/10 rounded-[15px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" style={{ stroke: 'url(#icon-gradient-feature)' }} />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="icon-gradient-feature" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FC904E" />
                          <stop offset="50%" stopColor="#FF3450" />
                          <stop offset="100%" stopColor="#FF00F8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-[#333333] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#776F69] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
