function Discover() {
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
    <div className="absolute box-border content-stretch flex items-center left-0 px-[24px] py-0 top-0">
      <Discover />
      <Dresses />
      <Stores />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[36px] left-[90px] top-[1.1px] w-[296px]">
      <Frame />
    </div>
  );
}


function GettingStarted() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#d35bc7] gap-[7px] h-[30px] items-center left-[-8px] px-[12px] py-[6px] rounded-[4px] to-[#f3344b] top-0" data-name="Getting Started">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[30px] left-[1090px] shadow-[12px_12px_30px_0px_#feebf1] top-[4px] w-[126.172px]">
      <GettingStarted />
    </div>
  );
}

export default function NewNavbar() {
  return (
    <div className="relative size-full" data-name="NEW Navbar">
      <Frame3 />
      <Frame2 />
    </div>
  );
}