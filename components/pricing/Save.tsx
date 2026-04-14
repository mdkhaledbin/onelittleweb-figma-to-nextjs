"use client";

import SaveTwentFive from "@/components/pricing/icons/SaveTwentyFIve";

export default function Save({
  isYearly,
  setIsYearly,
}: {
  isYearly: boolean;
  setIsYearly: (val: boolean) => void;
}) {
  return (
    <div className="relative mx-auto mt-6 mb-20 flex flex-col items-center justify-center gap-4 text-[14px] text-[#191d23]">
      <div className="flex items-center gap-4 relative">
        <div className="relative flex flex-row gap-x-3 mb-10 md:mb-0">
          <span>Pay Monthly</span>

          <button
            type="button"
            className={`flex items-center h-6 w-11 rounded-full p-1 transition-colors ${
              isYearly
                ? "bg-[#ed3c6a] justify-end"
                : "bg-[rgba(4,9,33,0.32)] justify-start"
            }`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <span className="h-4 w-4 rounded-full bg-white transition-all duration-700 ease-in-out" />
          </button>

          <span>Pay Yearly</span>
        </div>

        {/* ✅ Badge positioned relative to this row */}
        <div className="absolute top-7 -right-15 rotate-15 md:rotate-0 md:-top-5 md:-right-26 translate-x-1/2">
          <SaveTwentFive />
        </div>
      </div>
    </div>
  );
}
