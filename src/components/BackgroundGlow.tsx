export function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Header Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-7xl h-64">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2142 703">
          <g opacity="0.2">
            <ellipse cx="1655.1" cy="377.738" fill="#FC4FF6" rx="286.902" ry="96.8898" filter="url(#blur1)" />
            <ellipse cx="498.481" cy="363.4" fill="#E88587" rx="298.481" ry="100.366" filter="url(#blur2)" />
            <ellipse cx="1067.77" cy="351.452" fill="#EC008C" rx="300.411" ry="101.452" filter="url(#blur3)" />
          </g>
          <defs>
            <filter id="blur1" x="1168.2" y="80.8486" width="973.804" height="593.78">
              <feGaussianBlur stdDeviation="100" />
            </filter>
            <filter id="blur2" x="0" y="63.0348" width="996.962" height="600.731">
              <feGaussianBlur stdDeviation="100" />
            </filter>
            <filter id="blur3" x="517.359" y="0" width="1100.82" height="702.904">
              <feGaussianBlur stdDeviation="125" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Bottom Gradient Blur */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-6xl h-96 opacity-10">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1754 847">
          <ellipse cx="877" cy="423" fill="url(#gradient1)" rx="530" ry="350" filter="url(#blur4)" />
          <defs>
            <linearGradient id="gradient1" x1="346" y1="423" x2="1407" y2="423">
              <stop stopColor="#D35BC7" />
              <stop offset="1" stopColor="#F3344B" />
            </linearGradient>
            <filter id="blur4">
              <feGaussianBlur stdDeviation="173" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
