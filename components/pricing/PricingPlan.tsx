"use client";

import { useState, useMemo } from "react";
import Save from "@/components/pricing/Save";
import PricingCard from "@/components/pricing/PricingCard";
import { PRICING_PLANS, PricingPlan } from "@/lib/constants";

export default function PricingClientWrapper() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = useMemo(() => {
    return PRICING_PLANS.map((plan: PricingPlan) => ({
      ...plan,
      price: isYearly ? plan.yearlyPrice : plan.monthlyPrice,
    }));
  }, [isYearly]);

  return (
    <>
      <Save isYearly={isYearly} setIsYearly={setIsYearly} />

      <div className="mt-8 grid gap-4 lg:grid-cols-3 md:gap-10">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
        ))}
      </div>
    </>
  );
}
