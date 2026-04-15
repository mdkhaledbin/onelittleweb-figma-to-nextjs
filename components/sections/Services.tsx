import { SERVICES } from "@/lib/constants";
import { Reveal } from "@/components/services/Reveal";
import { Stagger, StaggerItem } from "@/components/services/Stagger";
import Wrapper from "@/components/common/Wrapper";
import Link from "next/link";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")        // replace &
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-")         // spaces → -
    .replace(/-+/g, "-");         // remove duplicate -
}

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="bg-white py-12 md:py-14 h-full"
    >
      <Wrapper>
        <Reveal>
          <h2 className="text-center font-bold text-[#191d23] text-3xl leading-10.5 md:text-4xl">
            Our <span className="text-[#ED3C6A]">Service</span>
          </h2>
          <p className="mx-auto mt-4 max-w-184.5 text-center font-medium text-[#1e1e1e] text-sm leading-[1.28]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <StaggerItem key={service.title}>
              <article className="flex mt-3 min-h-80 flex-col rounded-lg border border-brand-light hover:bg-white-900 p-6 transition-all duration-300 hover:scale-[1.02] sm:p-8 md:pl-10">
                <div className="mt-4 inline-flex h-16 w-16 items-center justify-center text-brand text-lg font-bold">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-[1.1] text-[#191d23] md:max-w-[65%]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-[1.1] text-[#1e1e1e] md:max-w-[75%]">
                  {service.description}
                </p>
                <div className="mt-auto pt-8">
                  <Link
                    href={`/services/${createSlug(service.title)}`}
                    className="inline-flex min-w-30 items-center justify-center rounded-full border border-brand px-6 py-2 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-white"
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
