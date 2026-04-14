import { TOOL_LOGOS } from "@/lib/constants";
import { Reveal } from "@/components/services/Reveal";
import { Stagger, StaggerItem } from "@/components/services/Stagger";
import Wrapper from "@/components/common/Wrapper";

export default function Tools() {
  return (
    <section id="resources" aria-label="Tools" className="py-12 md:py-14">
      <Wrapper className="relative">
        <Reveal>
          <h2 className="text-center font-bold text-heading text-3xl leading-10.5 md:text-4xl">
            Our <span className="text-brand">Tools</span>
          </h2>
          <p className="mx-auto mt-4 max-w-184.5 text-center font-medium text-[#1e1e1e] text-sm leading-[1.28]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Reveal>
      </Wrapper>

      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full bg-[#F6F6F6] mt-8 pt-9 pb-24">
        <Wrapper className="max-w-3/5">
          <Stagger className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TOOL_LOGOS.map((logo, index) => (
              <StaggerItem key={index}>
                <div className="flex w-full h-full md:py-18 items-center justify-center rounded-lg bg-white px-6 md:px-15 text-center font-bold text-heading text-xl leading-tight md:text-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(237,60,106,0.4)] cursor-pointer">
                  {logo}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Wrapper>
      </div>
    </section>
  );
}
