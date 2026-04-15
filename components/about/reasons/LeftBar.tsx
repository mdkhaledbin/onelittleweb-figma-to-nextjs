import { WHY_CHOOSE_ITEMS } from "@/lib/constants";
import CheckCircleIcon from "@/components/pricing/icons/CheckCircleIcon";
import Button from "@/components/common/Button";
import { ArrowRightIcon } from "@/components/icon/ArrowRightIcon";

export default function LeftBar() {
  return (
    <div className="w-full lg:w-114.25 flex flex-col mx-auto items-center md:items-start pt-2.25 max-w-4/5 md:max-w-full">
      <div className="flex flex-col gap-5 md:gap-6">
        <h1 className="w-full lg:max-w-104 font-bold text-3xl md:text-4xl">
          Few Reasons Why you Choose us?
        </h1>

        <div className="flex flex-col gap-5 md:gap-8 text-sm md:text-base">
          <div className="font-semibold text-[#1e1e1e]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className="flex flex-col gap-3.5 text-base text-[#1e1e1e]">
            {WHY_CHOOSE_ITEMS.map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircleIcon />
                <b className="font-semibold">{item}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-2 md:mt-5">
          <Button size="lg" className="gap-2 w-full sm:w-fit" navigateTo="/meeting">
            Schedule A Meeting
            <ArrowRightIcon className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
