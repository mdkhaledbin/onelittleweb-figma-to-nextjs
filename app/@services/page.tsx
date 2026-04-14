import { SERVICES } from "@/lib/constants";
import { Reveal } from "@/components/services/Reveal";
import { Stagger, StaggerItem } from "@/components/services/Stagger";
import Wrapper from "@/components/common/Wrapper";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="bg-white py-12 md:py-14"
    >
      <Wrapper>
        <Reveal>
          <h2 className="text-center font-bold text-[#191d23] text-[32px] leading-[42px] md:text-[42px]">
            Our <span className="text-[#ED3C6A]">Service</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[738px] text-center font-medium text-[#1e1e1e] text-[14px] leading-[1.28]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <StaggerItem key={service.title}>
              <article className="flex min-h-[320px] flex-col rounded-[10px] border border-[#fac4d2] bg-white p-6 transition-all duration-300 hover:scale-[1.02] sm:p-8 md:pl-10">
                <div className="mt-4 inline-flex h-16 w-16 items-center justify-center text-[#ed3c6a] text-lg font-bold">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-[24px] font-bold leading-[1.1] text-[#191d23] md:max-w-[80%]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] font-semibold leading-[1.35] text-[#1e1e1e] md:max-w-[90%]">
                  {service.description}
                </p>
                <div className="mt-auto pt-8">
                  <Link
                    href="#"
                    className="inline-flex min-w-[120px] items-center justify-center rounded-full border border-[#ed3c6a] px-6 py-2 text-[12px] font-bold text-[#ed3c6a] transition-colors hover:bg-[#ed3c6a] hover:text-white"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Wrapper>
    </section>
  );
}
