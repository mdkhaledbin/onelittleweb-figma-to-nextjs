import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import Wrapper from "@/components/common/Wrapper";
import { Reveal } from "@/components/services/Reveal";
import StarIcon from "@/components/about/reasons/StarIcon";
import Faq from "@/components/review/FAQ";
import Cta from "@/components/review/CTA";

export default function Review() {
  return (
    <section id="blog">
      <div aria-label="Testimonials" className="bg-white py-12 md:py-14 mb-10">
        <Wrapper>
          <Reveal>
            <h2 className="text-center font-bold text-[#191d23] text-[32px] leading-10.5 md:text-[42px]">
              Check Our Clients <span className="text-brand">Review</span>
            </h2>
            <p className="mx-auto mt-4 max-w-178.25 text-center font-medium text-[#1e1e1e] text-[14px] leading-[1.28]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Reveal>
        </Wrapper>
        <div className="mt-8 flex gap-5 md:gap-10 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
          {TESTIMONIALS.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="flex-none w-full md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)] snap-center rounded-[10px]
              bg-[#F6F6F6] hover:bg-white px-11 py-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                {item.avatar}
                <div>
                  <h3 className="font-bold text-[#191d23] text-[18px] leading-[1.2]">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-medium text-[#1e1e1e] text-[12px] leading-[1.28] max-w-4/5">
                    {item.text}
                  </p>
                  <div className="mt-2 flex gap-1 text-[#ed3c6a]">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Faq />
      <Cta />
    </section>
  );
}
