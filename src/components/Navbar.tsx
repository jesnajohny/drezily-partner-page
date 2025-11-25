import svgPaths from "../imports/svg-w8bwech47m";

function Group() {
  return (
    <div className="absolute contents left-[5px] top-[3.36px]">
      <div className="absolute h-[20.855px] left-[5px] top-[3.36px] w-[75.6px]" data-name="Drezily">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 21">
          <g id="Drezily">
            <path d={svgPaths.p354d5cf0} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p7da5680} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3b71f580} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p35037200} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3078b100} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3e783c00} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3e030880} fill="var(--fill-0, #333333)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[5px] top-[3.36px]">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[24.159px] left-[calc(50%-566.12px)] top-[calc(50%-2.54px)] translate-x-[-50%] translate-y-[-50%] w-[69.769px]">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%-566.12px)] top-[calc(50%-2.54px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame1 />
    </div>
  );
}

function Trending() {
  return (
    <div className="h-[36px] relative rounded-[24px] shrink-0 w-[88px]" data-name="Trending">
      <div className="absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold inset-[8px_13px] justify-center leading-[0] text-[#333333] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">Discover</p>
      </div>
    </div>
  );
}

function Dresses() {
  return (
    <div className="h-[36px] relative rounded-[24px] shrink-0 w-[80px]" data-name="Dresses">
      <div className="absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold inset-[8px_11px_8px_12px] justify-center leading-[0] text-[#333333] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">Dresses</p>
      </div>
    </div>
  );
}

function Stores() {
  return (
    <div className="h-[36px] relative rounded-[24px] shrink-0 w-[80px]" data-name="Stores">
      <div className="absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold inset-[8px_16px_8px_17px] justify-center leading-[0] text-[#333333] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">Stores</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex items-center px-[24px] py-0">
      <Trending />
      <Dresses />
      <Stores />
    </div>
  );
}

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[50px] bg-[#F9F5F0] z-50 border-b border-[rgba(51,51,51,0.4)]">
      <div className="relative w-full max-w-[1280px] mx-auto h-full flex items-center" data-name="NEW Navbar">
        <Frame />
      </div>
    </div>
  );
}