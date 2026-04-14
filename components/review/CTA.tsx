import { CTA } from "@/lib/constants";
import Button from "@/components/common/Button";
import Wrapper from "@/components/common/Wrapper";
import Avatar1 from "@/public/review/faq/Avatar1.png";
import Avatar2 from "@/public/review/faq/Avatar2.png";
import Avatar3 from "@/public/review/faq/Avatar3.png";
import Image from "next/image";
import { Reveal } from "../services/Reveal";

export default function Cta() {
  return (
    <section aria-label="Support call to action" className="py-10">
      <Wrapper>
        <Reveal>
          <div className="mx-auto flex flex-col items-center rounded-2xl bg-[#f9fafb] px-6 py-7 text-center sm:px-10">
            <div className="mb-5 flex items-center">
              <div className="relative h-14 w-30">
                <div className="absolute left-0 top-2 h-12 w-12 rounded-full border-2 border-white">
                  <Image src={Avatar1} alt="Avatar1" width={48} height={48} />
                </div>
                <div className="absolute left-8 top-0 h-14 w-14 rounded-full border-2 border-white bg-brand">
                  <Image src={Avatar2} alt="Avatar2" width={56} height={56} />
                </div>
                <div className="absolute left-18 top-2 h-12 w-12 rounded-full border-2 border-white bg-brand-light">
                  <Image src={Avatar3} alt="Avatar3" width={48} height={48} />
                </div>
              </div>
            </div>
            <h2 className="font-semibold text-2xl leading-[1.2] text-[#101828]">
              {CTA.heading}
            </h2>
            <p className="mt-2 max-w-155 text-sm leading-6 text-[#191d23]">
              {CTA.description}
            </p>
            <Button className="mt-5" size="md">
              {CTA.button}
            </Button>
          </div>
        </Reveal>
      </Wrapper>
    </section>
  );
}
