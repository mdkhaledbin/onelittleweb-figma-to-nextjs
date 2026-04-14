"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import MinusCircleIcon from "@/components/faq/MinusCircleIcon";
import PlusCircleIcon from "@/components/faq/PlusCircleIcon";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-[768px]">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`${index === 0 ? "" : "border-t border-[rgba(191,33,74,0.28)]"} py-4`}
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span
                className={`font-bold text-black ${index > 3 ? "text-[17px] leading-[26px]" : "text-[16px] leading-6"}`}
              >
                {item.question}
              </span>
              <span className="mt-[2px] text-[#ed3c6a]">
                {isOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
              </span>
            </button>
            {isOpen ? (
              <p className="mt-2 max-w-[720px] text-[14px] leading-6 text-[#606060]">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
