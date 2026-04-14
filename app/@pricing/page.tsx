
import { Reveal } from "@/components/services/Reveal";
import  Wrapper  from "@/components/common/Wrapper";
import PricingPlan from "@/components/pricing/PricingPlan";

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-white md:py-2"
    >
      <Wrapper>
        <Reveal>
          <h2 className="text-center font-bold text-[#191d23] text-[34px] leading-[1.1] md:text-[46px]">
            Airnbn Assistent <span className="text-[#ed3c6a]">pricing</span>
          </h2>
          <p className="mt-3 text-center font-normal text-[#191d23] text-[16px] leading-normal">
            Choose a plan that’s right for you
          </p>
        </Reveal>

        <PricingPlan />
      </Wrapper>
    </section>
  );
}
