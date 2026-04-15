"use client";

import React from "react";
import { SERVICES } from "@/lib/constants";
import { Reveal } from "@/components/services/Reveal";
import Wrapper from "@/components/common/Wrapper";
import Link from "next/link";
import { notFound } from "next/navigation";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and") // replace &
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-") // spaces → -
    .replace(/-+/g, "-"); // remove duplicate -
}

export default function ServiceDetail({
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
    <section
      id="service-detail"
      aria-label={`${service.title} details`}
      className="bg-white py-12 md:py-16 min-h-screen"
    >
      <Wrapper>
        {/* Back Button */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-brand font-semibold hover:text-[#ED3C6A] transition-colors mb-8"
        >
          ← Back to Services
        </Link>

        <Reveal>
          {/* Service Header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-start gap-6 mb-6">
              <div className="inline-flex h-20 w-20 items-center justify-center text-brand text-3xl shrink-0">
                {service.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#191d23] leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-[#1e1e1e] leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Detailed Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#191d23] mb-6">
                Why Choose This Service?
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">✓</span>
                  <span className="text-[#1e1e1e] text-base leading-relaxed">
                    Professional and experienced team
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">✓</span>
                  <span className="text-[#1e1e1e] text-base leading-relaxed">
                    Customized solutions for your needs
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">✓</span>
                  <span className="text-[#1e1e1e] text-base leading-relaxed">
                    24/7 dedicated support and assistance
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">✓</span>
                  <span className="text-[#1e1e1e] text-base leading-relaxed">
                    Affordable pricing with transparent billing
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">✓</span>
                  <span className="text-[#1e1e1e] text-base leading-relaxed">
                    Proven track record of success
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#191d23] mb-6">
                How It Works
              </h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand text-white font-bold text-sm shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#191d23] mb-1">
                      Initial Consultation
                    </h3>
                    <p className="text-[#1e1e1e] text-sm">
                      We understand your specific requirements and goals
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand text-white font-bold text-sm shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#191d23] mb-1">
                      Custom Planning
                    </h3>
                    <p className="text-[#1e1e1e] text-sm">
                      We create a tailored plan specific to your needs
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand text-white font-bold text-sm shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#191d23] mb-1">
                      Implementation
                    </h3>
                    <p className="text-[#1e1e1e] text-sm">
                      We execute the plan with precision and attention to detail
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand text-white font-bold text-sm shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#191d23] mb-1">
                      Ongoing Support
                    </h3>
                    <p className="text-[#1e1e1e] text-sm">
                      We provide continuous support and optimization
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-r from-brand/5 to-brand/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#191d23] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#1e1e1e] mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about how we can help you with{" "}
              {service.title.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/meeting"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-bold text-white transition-all hover:shadow-lg hover:scale-105"
              >
                Schedule a Meeting
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand px-8 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </Reveal>
      </Wrapper>
    </section>
  );
}
