"use client";

import React from "react";
import { SERVICES } from "@/lib/constants";
import { Reveal } from "@/components/services/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Modal } from "@/components/common/Modal";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and") // replace &
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-") // spaces → -
    .replace(/-+/g, "-"); // remove duplicate -
}

export default function ServiceDetailModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap the params Promise with React.use()
  const { slug } = React.use(params);

  // Find the service matching the slug
  const service = SERVICES.find((s) => createSlug(s.title) === slug);

  if (!service) {
    notFound();
  }

  return (
    <Modal>
      <Reveal>
        {/* Service Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="inline-flex h-16 w-16 items-center justify-center text-brand text-2xl flex-shrink-0">
              {service.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#191d23] leading-tight">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="text-base text-[#1e1e1e] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Detailed Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h2 className="text-xl font-bold text-[#191d23] mb-4">
              Why Choose This Service?
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-[#1e1e1e] text-sm leading-relaxed">
                  Professional and experienced team
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-[#1e1e1e] text-sm leading-relaxed">
                  Customized solutions for your needs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-[#1e1e1e] text-sm leading-relaxed">
                  24/7 dedicated support and assistance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-[#1e1e1e] text-sm leading-relaxed">
                  Affordable pricing with transparent billing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-[#1e1e1e] text-sm leading-relaxed">
                  Proven track record of success
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-bold text-[#191d23] mb-4">
              How It Works
            </h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand text-white font-bold text-xs flex-shrink-0">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-[#191d23] text-sm">
                    Initial Consultation
                  </h3>
                  <p className="text-[#1e1e1e] text-xs">
                    We understand your specific requirements and goals
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand text-white font-bold text-xs flex-shrink-0">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-[#191d23] text-sm">
                    Custom Planning
                  </h3>
                  <p className="text-[#1e1e1e] text-xs">
                    We create a tailored plan specific to your needs
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand text-white font-bold text-xs flex-shrink-0">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-[#191d23] text-sm">
                    Implementation
                  </h3>
                  <p className="text-[#1e1e1e] text-xs">
                    We execute the plan with precision and attention to detail
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand text-white font-bold text-xs flex-shrink-0">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-[#191d23] text-sm">
                    Ongoing Support
                  </h3>
                  <p className="text-[#1e1e1e] text-xs">
                    We provide continuous support and optimization
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brand/5 to-brand/10 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-[#191d23] mb-2">
            Ready to Get Started?
          </h2>
          <p className="text-[#1e1e1e] mb-4 text-sm">
            Contact us today to learn more about how we can help you with{" "}
            {service.title.toLowerCase()}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/meeting"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-xs font-bold text-white transition-all hover:shadow-lg hover:scale-105"
            >
              Schedule a Meeting
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand px-6 py-2 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </Reveal>
    </Modal>
  );
}
