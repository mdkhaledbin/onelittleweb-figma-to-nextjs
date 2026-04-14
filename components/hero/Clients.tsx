import Wrapper from "@/components/common/Wrapper";
import AirBnbIcon from "@/components/hero/client/AirBnbIcon";
import GoHomeIcon from "@/components/hero/client/GoHomeIcon";
import VrboIcon from "@/components/hero/client/VrboIcon";
import BookingComIcon from "@/components/hero/client/BookingIcon";
import ExpediaIcon from "@/components/hero/client/ExpediaIcon";
import TripAdvisorIcon from "@/components/hero/client/TripAdvisorIcon";
import AgodaIcon from "@/components/hero/client/AgodaIcon";

export default function Clients() {
  return (
    <section className="mt-1">
      <Wrapper>
        <div className="pb-6 text-center mb-3 md:mb-5">
          <h2 className="font-semibold text-heading text-xl leading-[1.2] md:text-2xl">
            Trusted by leaders in 50+ industries
          </h2>
        </div>
      </Wrapper>

      <div className="w-full bg-[#F6F6F6] py-5 md:py-8">
        <div className="mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-8 md:gap-x-14 lg:gap-x-5">
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
