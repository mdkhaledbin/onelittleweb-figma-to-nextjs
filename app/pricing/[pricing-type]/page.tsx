"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Wrapper from "@/components/common/Wrapper";
import Button from "@/components/common/Button";
import { PRICING_PLANS } from "@/lib/constants";
import CheckCircleIcon from "@/components/pricing/icons/CheckCircleIcon";
import XCircleIcon from "@/components/pricing/icons/XCircleIcon";

export default function PricingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isYearly, setIsYearly] = useState(false);

  const pricingType = (params["pricing-type"] as string)?.toLowerCase();

  const planData = useMemo(() => {
    const plan = PRICING_PLANS.find(
      (p) => p.name.toLowerCase() === pricingType,
    );

    if (!plan) {
      console.log(
        "Available plans:",
        PRICING_PLANS.map((p) => p.name.toLowerCase()),
      );
      console.log("Looking for:", pricingType);
      return null;
    }

    return {
      ...plan,
      price: isYearly ? plan.yearlyPrice : plan.monthlyPrice,
    };
  }, [pricingType, isYearly]);

  if (!planData) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
        <Wrapper>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#191d23] mb-4">
              Plan Not Found
            </h1>
            <p className="text-lg text-[#595d66] mb-8">
              Sorry, the pricing plan you're looking for doesn't exist.
            </p>
            <Button
              text="Back to Pricing"
              onClick={() => router.push("/#pricing")}
            />
          </div>
        </Wrapper>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <Wrapper>
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-12 inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all"
        >
          <span>←</span>
          <span>Back to Plans</span>
        </button>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left - Title, Description, and Pricing Card */}
          <div className="md:col-span-2 flex flex-col">
            {/* Heading Section */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#191d23] mb-6">
                {planData.name}
              </h1>
              <p className="text-xl text-[#595d66] leading-relaxed">
                {planData.description}
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 h-fit">
              {/* Price Display */}
              <div className="mb-8">
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-brand">
                    ${planData.price}
                  </span>
                  <span className="text-xl text-[#595d66]">
                    / month
                  </span>
                </div>

                {/* Billing Period Savings */}
                {isYearly &&
                  planData.yearlyPrice < planData.monthlyPrice * 12 && (
                    <div className="mb-6 inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                      💰 Save $
                      {(
                        planData.monthlyPrice * 12 -
                        planData.yearlyPrice
                      ).toFixed(0)}
                      /year
                    </div>
                  )}
              </div>

              {/* Billing Toggle */}
              <div className="flex gap-3 p-1 bg-gray-100 rounded-lg mb-8 w-full">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`flex-1 px-4 py-3 rounded-md font-semibold transition ${
                    !isYearly
                      ? "bg-brand text-white"
                      : "text-[#595d66] hover:text-[#191d23]"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`flex-1 px-4 py-3 rounded-md font-semibold transition ${
                    isYearly
                      ? "bg-brand text-white"
                      : "text-[#595d66] hover:text-[#191d23]"
                  }`}
                >
                  Annual
                </button>
              </div>

              {/* CTA Button */}
              <Button
                text="Get Started"
                className="w-full mb-4 py-3"
                onClick={() => {}}
              />

              <p className="text-sm text-center text-[#595d66]">
                30-day free trial • No credit card required
              </p>
            </div>
          </div>

          {/* Right - Features List (Horizontal) */}
          <div>
            <h3 className="text-2xl font-bold text-[#191d23] mb-8 flex items-center gap-3">
              <span className="text-brand text-3xl">✓</span>
              What's Included
            </h3>

            <div className="bg-linear-to-br w-full from-white to-slate-50 rounded-2xl border border-gray-200 p-8 h-fit">
              <div className="flex flex-col gap-1 lg:gap-5">
                {planData.features.map((feature, index) => (
                  <div key={index} className="flex items-start lg:gap-3">
                    <div className="lg:mt-1 shrink-0">
                      {feature.included ? (
                        <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                          <CheckCircleIcon />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                          <XCircleIcon />
                        </div>
                      )}
                    </div>
                    <span
                      className={`text-sm leading-relaxed max-w-full ${
                        feature.included
                          ? "text-[#191d23] font-medium"
                          : "text-[#a0abbb] line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Unavailable Notice */}
        <div className="bg-gradient-to-r from-orange-50 via-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-10 md:p-12 mb-16">
          <div className="flex gap-4 md:gap-6">
            <div className="text-4xl flex-shrink-0">⚠️</div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#191d23] mb-2">
                Currently Unavailable
              </h2>
              <p className="text-lg text-[#595d66] mb-4">
                The{" "}
                <span className="font-bold text-orange-700">
                  {planData.name}
                </span>{" "}
                plan is not available at this moment. We're working on bringing
                this plan to you soon.
              </p>
              <Button
                text="Explore Other Plans"
                onClick={() => router.push("/#pricing")}
              />
            </div>
          </div>
        </div>

        {/* Comparison CTA */}
        <div className="bg-gradient-to-r from-brand/5 to-brand/10 border border-brand/20 rounded-2xl p-10 md:p-12 mb-16 text-center">
          <h3 className="text-2xl font-bold text-[#191d23] mb-3">
            Want to Compare Plans?
          </h3>
          <p className="text-[#595d66] mb-6 max-w-2xl mx-auto">
            Check out all available pricing options to find the perfect plan for
            your property management needs.
          </p>
          <Button
            text="View All Plans"
            onClick={() => router.push("/#pricing")}
          />
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#191d23] mb-10">
            Common Questions
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <h4 className="font-bold text-[#191d23] mb-3 text-lg">
                Why is this unavailable?
              </h4>
              <p className="text-[#595d66] leading-relaxed">
                This plan is currently under review to ensure it meets our
                quality standards and provides maximum value.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <h4 className="font-bold text-[#191d23] mb-3 text-lg">
                When will it launch?
              </h4>
              <p className="text-[#595d66] leading-relaxed">
                We don't have a specific date yet. Subscribe to our newsletter
                for updates on plan availability.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
              <h4 className="font-bold text-[#191d23] mb-3 text-lg">
                What are my options?
              </h4>
              <p className="text-[#595d66] leading-relaxed">
                Explore our available plans or contact support to discuss custom
                solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
