import { HERO } from "@/lib/constants";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icon/ArrowRightIcon";
import Button from "@/components/common/Button";
import Wrapper from "@/components/common/Wrapper";
import AirBnb from "@/public/hero/AirBnb.png"
import Bphoto from "@/public/hero/Bphoto.png"
import Glass from "@/public/hero/Glass.png"
import Vphoto from "@/public/hero/Vphoto.svg"
import Link from "next/link";
import Clients from "@/components/hero/Clients";


const VERTICAL_GUIDES = [
  "left-[60px]",
  "left-[149px]",
  "left-[236px]",
  "left-[325px]",
  "left-[413px]",
  "left-[501px]",
  "left-[590px]",
  "left-[678px]",
  "left-[766px]",
  "left-[854px]",
  "left-[943px]",
  "left-[1031px]",
  "left-[1119px]",
  "left-[1208px]",
  "left-[1295px]",
  "left-[1384px]",
  "left-[1472px]",
  "left-[1560px]",
  "left-[1650px]",
  "left-[1738px]",
  "left-[1826px]",
  "left-[1914px]",
];

const HORIZONTAL_GUIDES = [
  "top-px",
  "top-[84px]",
  "top-[168px]",
  "top-[252px]",
  "top-[334px]",
  "top-[417px]",
  "top-[501px]",
  "top-[584px]",
  "top-[668px]",
  "top-[752px]",
  "top-[835px]",
  "bottom-0",
];

type GuideLinesProps = {
  verticalClassName: string;
  horizontalClassName: string;
};

function GuideLines({
  verticalClassName,
  horizontalClassName,
}: GuideLinesProps) {
  return (
    <>
      {VERTICAL_GUIDES.map((guide) => (
        <div
          key={guide}
          className={`absolute ${guide} top-0 h-full w-[0.5px] ${verticalClassName}`}
        />
      ))}
      {HORIZONTAL_GUIDES.map((guide) => (
        <div
          key={guide}
          className={`absolute ${guide} left-0 h-[0.5px] w-full ${horizontalClassName}`}
        />
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
    >
      <div className="relative mb-8 flex flex-col overflow-hidden pb-12 sm:pb-16 lg:h-165 lg:pb-0">

      <div className="pointer-events-none absolute inset-0 text-[1px]" 
          >
        <GuideLines
          verticalClassName="bg-black/20"
          horizontalClassName="bg-black/20"
        />
      </div>

        <BlurOval />
      <FourImages />

        <Dots />


      <Wrapper className="relative z-10 flex-grow lg:flex lg:items-center">
        <div className="mx-auto max-w-166.25 text-center">
          <h1 className="mt-10 text-center text-[48px] font-bold leading-[1.2] tracking-[1.2] text-heading md:text-[42px] lg:text-[48px] lg:leading-[1.3]">
            {HERO.headingTop}
          </h1>
          <p className="mt-5 text-[28px] font-[38px] leading-[1.2] tracking-[1.2] text-heading sm:text-[34px] md:text-[38px] lg:mt-1 lg:text-[42px]">
            {HERO.headingBottom}
          </p>
          <p className="mx-auto mt-10 max-w-166.25 px-4 text-center text-[14px] font-medium leading-[1.75] tracking-[0] text-[#1e1e1e] sm:px-8 lg:mt-8 lg:px-0">
            {HERO.description}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-2.5 sm:mt-10 lg:mt-8">
            <Button className="w-full gap-2 sm:w-auto" size="md">
              {HERO.primaryCta}
              <ArrowRightIcon className="text-white" />
            </Button>
            <Link
              href="#pricing"
              className="mt-5 text-[14px] block font-semibold text-[#1e1e1e] underline hover:text-brand lg:mt-3"
            >
              {HERO.secondaryCta}
            </Link>
          </div>
        </div>
      </Wrapper>
      </div>
      <Clients />
    </section>
  );
}

const BlurOval = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 backdrop-blur-[6px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 40% 45% at 50% 52%, black 0%, black 40%, rgba(0,0,0,0.4) 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 40% 45% at 50% 52%, black 0%, black 40%, rgba(0,0,0,0.4) 70%, transparent 100%)",
        }}
      />
    </div>
  );
};

const Dots = () => {
  return (
    <>
      <div className="pointer-events-none absolute left-[6%] top-[24%] h-[13px] w-[13px] rounded-full bg-[#635BFF] shadow-[0_0_10px_#635BFF] animate-float animate-glow" />

      <div className="pointer-events-none absolute bottom-[5%] left-[7%] h-[7px] w-[7px] rounded-full bg-[#FFEC5A] shadow-[0_0_8px_#FFEC5A] animate-[float_7s_ease-in-out_infinite] animate-glow" />

      <div className="pointer-events-none absolute right-[13%] top-[37%] h-[13px] w-[13px] rounded-full bg-[#FFEC5A] shadow-[0_0_10px_#FFEC5A] animate-[float_5s_ease-in-out_infinite] animate-glow" />

      <div className="pointer-events-none absolute bottom-[18%] right-[7%] h-[7px] w-[7px] rounded-full bg-[#635BFF] shadow-[0_0_8px_#635BFF] animate-[float_6.5s_ease-in-out_infinite] animate-glow" />

      <div className="pointer-events-none absolute left-[15%] top-[64%] h-[13px] w-[13px] rounded-full bg-[#FF5A5F] shadow-[0_0_12px_#FF5A5F] animate-[float_8s_ease-in-out_infinite] animate-glow" />

      <div className="pointer-events-none absolute left-1/2 top-[17%] h-[13px] w-[13px] -translate-x-1/2 rounded-full bg-[#34E0A1] shadow-[0_0_10px_#34E0A1] animate-[float_6s_ease-in-out_infinite] animate-glow" />

      <div className="pointer-events-none absolute bottom-[5%] left-[52%] h-[13px] w-[13px] -translate-x-1/2 rounded-full bg-[#34E0A1] shadow-[0_0_10px_#34E0A1] animate-[float_7.5s_ease-in-out_infinite] animate-glow" />
    </>
  );
};

const FourImages = () => {
    return (
        <>
        <div className="pointer-events-none absolute left-[calc(15%)] lg:left-[calc(18%)] top-[calc(20%)] lg:top-[calc(16%)] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-9deg] overflow-hidden rounded-lg md:block lg:left-[calc(35%-226px)] lg:top-[calc(43%-106px)] lg:h-24 lg:w-24">
        <Image
          src={AirBnb}
          alt="AirBnb"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute right-[calc(9%)] lg:right-[calc(19%)] top-[calc(20%)] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-10deg overflow-hidden rounded-lg md:block lg:left-[calc(64%+226px)] lg:top-[calc(43%-106px)] lg:h-24 lg:w-24">
        <Image
          src={Bphoto}
          alt="Bphoto"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute right-[calc(14%)] lg:right-[calc(20%)] bottom-[calc(10%)] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-18 overflow-hidden rounded-lg md:block lg:left-[calc(64%+226px)] lg:top-[calc(62%+106px)] lg:h-24 lg:w-24">
        <Image
          src={Glass}
          alt="Glass"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute left-[calc(21%)] bottom-[calc(15%)] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg md:block lg:left-[calc(35%-226px)] lg:top-[calc(62%+106px)] lg:h-18 lg:w-18">
        <Image
          src={Vphoto}  
          alt="Vphoto"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
        </>
    )
}
