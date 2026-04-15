"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Modal } from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { PRICING_PLANS } from "@/lib/constants";

export default function PricingDetailModal() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);

  const pricingType = (params["pricing-type"] as string)?.toLowerCase();
  const returnTo = searchParams.get("returnTo") || "/#pricing";

  const handleClose = () => {
    router.push(returnTo);
  };

  const planData = useMemo(() => {
    const plan = PRICING_PLANS.find(
      (p) => p.name.toLowerCase() === pricingType,
    );

    if (!plan) return null;

    return {
      ...plan,
      price: isYearly ? plan.yearlyPrice : plan.monthlyPrice,
    };
  }, [pricingType, isYearly]);

  if (!planData) {
    return (
      <Modal onClose={handleClose}>
        <div className="text-center p-10 animate-fade-in">
          <div className="mb-6">
            <div className="text-5xl mb-4">🔍</div>
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Plan Not Found
            </h1>
          </div>
          <p className="text-gray-500 mb-8 text-base leading-relaxed">
            Sorry, the pricing plan doesn't exist.
          </p>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={handleClose}>
      <div className="p-8 animate-fade-in max-h-[90vh] overflow-y-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#191d23] leading-tight mb-2">
            {planData.name}
          </h1>
          <p className="text-base text-[#1e1e1e] leading-relaxed">
            {planData.description}
          </p>
        </div>

        {/* Pricing Toggle and Price */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                !isYearly
                  ? "bg-brand text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                isYearly
                  ? "bg-brand text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Annual
            </button>
          </div>

          <div className="flex items-end gap-2">
            <span className="text-5xl font-bold text-[#191d23]">
              ${planData.price}
            </span>
            <span className="text-lg text-gray-600 font-semibold mb-1">
              / month
            </span>
          </div>

          {isYearly && planData.yearlyPrice < planData.monthlyPrice * 12 && (
            <div className="mt-3 text-green-600 font-semibold">
              💰 Save $
              {(planData.monthlyPrice * 12 - planData.yearlyPrice).toFixed(0)}/
              year
            </div>
          )}
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-bold text-[#191d23] mb-4">
            What's Included
          </h2>
          <ul className="space-y-3">
            {planData.features.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <span
                  className={`${feature.included ? "text-brand" : "text-gray-300"} font-bold text-lg flex-shrink-0`}
                >
                  {feature.included ? "✓" : "✗"}
                </span>
                <span
                  className={`text-[#1e1e1e] text-sm leading-relaxed ${
                    feature.included ? "" : "line-through text-gray-400"
                  }`}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <Button className="w-full py-3 text-base font-bold rounded-lg bg-brand text-white transition-all hover:shadow-lg hover:scale-105 mb-3">
            Get Started
          </Button>
          <p className="text-sm text-gray-500 font-medium">
            ✨ 30-day free trial • No credit card required
          </p>
        </div>

        {/* Unavailable Notice */}
        <div className="rounded-lg p-6 border-l-4 border-l-orange-500 bg-orange-50 mb-20">
          <div className="flex gap-4 items-start">
            <div className="text-2xl flex-shrink-0">⚠️</div>

            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Coming Soon
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                The <span className="font-bold">{planData.name}</span> plan will
                be available very soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>

        {/* Add CSS animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}</style>
      </div>
    </Modal>
  );
}
