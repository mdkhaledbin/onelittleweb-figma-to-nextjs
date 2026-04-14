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

      <div className="w-full bg-[#F6F6F6] py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-8 md:gap-x-14 lg:gap-x-5">
            <AirBnbIcon />
            <BookingComIcon />
            <VrboIcon />
            <TripAdvisorIcon />
            <AgodaIcon />
            <ExpediaIcon />
            <GoHomeIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
