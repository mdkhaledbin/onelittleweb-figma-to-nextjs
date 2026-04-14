import { FaqAccordion } from "@/components/faq/FaqAccordion";
import Wrapper from "@/components/common/Wrapper";
import { Reveal } from "../services/Reveal";

export default function Faq() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-12 md:py-14"
    >
      <Wrapper>
        <Reveal>
          <div className="rounded-2xl bg-[#f9fafb] px-4 py-10 sm:px-8 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-semibold text-[#101828] text-4xl leading-11 tracking-[-0.72px] md:text-4xl">
                Frequently asked{" "}
                <span className="text-brand">questions</span>
              </h2>
              <p className="mt-3 font-normal text-black text-base leading-6">
                Everything you need to know about the product and billing.
              </p>
            </div>

            <FaqAccordion />
          </div>
        </Reveal>
      </Wrapper>
    </section>
  );
}
