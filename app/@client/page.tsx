import { CLIENT_LOGOS } from "@/lib/constants";
import Wrapper from "@/components/common/Wrapper";
import AirBnbIcon from "@/components/client/AirBnbIcon";
import GoHomeIcon from "@/components/client/GoHomeIcon";
import VrboIcon from "@/components/client/VrboIcon";
import BookingComIcon from "@/components/client/BookingIcon";
import ExpediaIcon from "@/components/client/ExpediaIcon";
import TripAdvisorIcon from "@/components/client/TripAdvisorIcon";
import AgodaIcon from "@/components/client/AgodaIcon";

export default function Clients() {
  return (
    <section aria-label="Partners" className="mt-1">
      <Wrapper>
        <div className="pb-6 text-center mb-8 md:mb-10">
          <h2 className="font-semibold text-heading text-[20px] leading-[1.2] md:text-[24px]">
            Trusted by leaders in 50+ industries
          </h2>
        </div>
      </Wrapper>

      <div className="w-full mx-auto bg-faq-bg bg-[#F6F6F6] py-5 md:py-6">
          <div className="flex flex-wrap mx-20 items-center justify-between gap-x-3 gap-y-3 md:gap-x-5 lg:flex-nowrap lg:justify-between">
            {/* {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.label}
                className={`font-semibold text-[20px] leading-none md:text-[24px] ${logo.accentClass}`}
              >
                {logo.label}
              </div>
            ))} */}
            <AirBnbIcon />
            <BookingComIcon />
            <VrboIcon />
            <TripAdvisorIcon />
            <AgodaIcon />
            <ExpediaIcon />
            <GoHomeIcon />
          </div>
      </div>
    </section>
  );
}
