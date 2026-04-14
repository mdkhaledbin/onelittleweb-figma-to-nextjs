import Button from "@/components/common/Button";
import CheckCircleIcon from "@/components/pricing/icons/CheckCircleIcon";
import XCircleIcon from "@/components/pricing/icons/XCircleIcon";
import type { PricingPlan } from "@/lib/constants";

export default function PricingCard({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}) {
  return (
    <article
      key={plan.name}
      className={`
  ${
    plan.highlighted
      ? "rounded-[12px] bg-[#ed3c6a] text-white"
      : "rounded-[10px] border border-[#fac4d2] bg-white text-[#191d23]"
  }
  flex h-full flex-col px-5 py-7
  transition-all duration-300 ease-out
  hover:-translate-y-2 hover:shadow-lg
`}
    >
      <h3 className="font-bold text-[34px] leading-[1.1] md:text-[36px]">
        {plan.name}
      </h3>
      <p
        className={`${plan.highlighted ? "text-[#f7f8f9]" : "text-[#64748b]"} mt-2 text-[13px] leading-[1.35]`}
      >
        {plan.description}
      </p>

      <div className="mt-5 flex items-end gap-1">
        <span className="font-semibold text-[52px] leading-none">
          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
        </span>
        <span className="mb-[8px] text-[14px]">
          / {isYearly ? "Year" : "Month"}
        </span>
      </div>

      <Button
        variant={plan.highlighted ? "secondary" : "outline"}
        className={`${plan.highlighted ? "mt-5 text-[#ed3c6a] bg-white" : "mt-5"} w-full`}
      >
        Get Started Now
      </Button>

      <ul className="mt-7 space-y-2.5">
        {plan.features.map((feature) => (
          <li
            key={feature.text}
            className="flex items-start gap-[12px] text-[14px] leading-[1.25]"
          >
            <span
              className={`${feature.included ? "bg-[#fac4d2] text-[#ed3c6a]" : plan.highlighted ? "bg-white text-[#a0abbb]" : "bg-[#f7f8f9] text-[#a0abbb]"} mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full`}
            >
              {feature.included ? <CheckCircleIcon /> : <XCircleIcon />}
            </span>
            <span
              className={`${!feature.included && !plan.highlighted ? "text-[#a0abbb]" : plan.highlighted ? "text-white" : "text-[#191d23]"}`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
