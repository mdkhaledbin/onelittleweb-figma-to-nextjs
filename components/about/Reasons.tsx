import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";

import GroupPhoto from "@/public/about/reasons/GroupPhoto.png";
import CalendarPhoto from "@/public/about/reasons/CalendarPhoto.png";
import smilingMaleOfficeWorker from "@/public/about/reasons/smilingMaleOfficeWorker.png";
import LeftBar from "@/components/about/reasons/LeftBar";
import HotelCard from "@/components/about/reasons/HotelCard";
import { Reveal } from "@/components/services/Reveal";

export default function Reasons() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Us"
      className="py-12 md:py-14"
    >
      <Reveal>
        <Wrapper>
          <div className="self-stretch rounded-[33px] bg-[#fdebf0] border border-[#f8becd] box-border flex flex-col lg:flex-row items-center lg:items-start justify-center pt-10 pb-16 px-6 md:pt-16 md:pb-[81px] md:pl-[88px] md:pr-[37px] gap-12 lg:gap-3.5 max-w-full overflow-hidden">
            {/* LEFT CONTENT */}
            <LeftBar />

            {/* RIGHT VISUAL SECTION */}
            <div className="relative w-full lg:flex-1 lg:h-[465px] lg:min-w-[417px]">
              {/* ── MOBILE / TABLET (below lg): grid layout, no absolute positioning ── */}
              <div className="flex flex-col items-center gap-4 lg:hidden">
                {/* Top row: Hotel card + Platform logos */}
                <div className="flex items-end justify-center gap-4 w-full">
                  <HotelCard />
                  <Image
                    src={GroupPhoto}
                    alt="Group Companies photo"
                    width={200}
                    height={200}
                    className="w-[140px] sm:w-[160px]"
                    style={{ height: "auto" }}
                  />
                </div>

                {/* Bottom row: blob behind calendar + person */}
                <div className="relative flex items-end justify-center w-full h-[260px] sm:h-[300px]">
                  {/* Pink blob — centered, fills most of the row */}
                  <div className="absolute inset-x-4 top-[10%] bottom-0 rounded-[30px] bg-[#fac4d2] z-[1]" />

                  {/* Calendar — left side */}
                  <div className="relative z-10 mb-0 ml-4">
                    <Image
                      src={CalendarPhoto}
                      alt="Calendar Photo"
                      width={250}
                      height={200}
                      className="w-[150px] sm:w-[180px]"
                      style={{ height: "auto" }}
                    />
                  </div>

                  {/* Person — right side, anchored to bottom */}
                  <div className="relative z-10">
                    <Image
                      src={smilingMaleOfficeWorker}
                      alt="Smiling face photo"
                      width={326}
                      height={437}
                      className="w-[160px] sm:w-[200px] object-contain"
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
              </div>

              {/* ── DESKTOP (xl+): original absolute layout ── */}
              <div className="hidden xl:block relative h-[465px]">
                <div className="absolute top-[15%] right-0 rounded-full bg-[#fac4d2] w-4/5 h-[70%] z-[1]">
                  <div className="absolute -top-16 -left-12 z-[20]">
                    <HotelCard />
                  </div>

                  <div className="absolute -top-18 right-4 z-[10]">
                    <Image
                      src={GroupPhoto}
                      alt="Group Companies photo"
                      width={200}
                      height={200}
                      style={{ height: "auto" }}
                    />
                  </div>

                  <Image
                    src={smilingMaleOfficeWorker}
                    alt="Smiling face photo"
                    width={326}
                    height={437}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[100] object-contain w-[326px]"
                    style={{ height: "auto" }}
                  />

                  <div className="absolute -bottom-20 left-3 z-[10]">
                    <Image
                      src={CalendarPhoto}
                      alt="Calendar Photo"
                      width={250}
                      height={200}
                      style={{ height: "auto" }}
                    />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block xl:hidden relative h-[580px]">
                {/* TOP ROW — HotelCard + GroupPhoto side by side */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  <HotelCard />
                  <Image
                    src={GroupPhoto}
                    alt="Group Companies photo"
                    width={200}
                    height={200}
                    className="w-[160px]"
                    style={{ height: "auto" }}
                  />
                </div>

                {/* BOTTOM ROW — blob with person + calendar */}
                <div className="relative h-[380px]">
                  {/* Pink blob */}
                  <div className="absolute top-[10%] right-0 rounded-[30px] bg-[#fac4d2] w-4/5 h-[80%] z-[1]">
                    {/* Person — centered, bottom-anchored */}
                    <Image
                      src={smilingMaleOfficeWorker}
                      alt="Smiling face photo"
                      width={326}
                      height={437}
                      className="absolute bottom-0 left-1/2 -translate-x-[calc(40%)] z-[100] object-contain w-[280px]"
                      style={{ height: "auto" }}
                    />

                    {/* Calendar — bottom left */}
                    <div className="absolute -bottom-16 -left-16 z-[10]">
                      <Image
                        src={CalendarPhoto}
                        alt="Calendar Photo"
                        width={250}
                        height={200}
                        className="w-[220px]"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Reveal>
    </section>
  );
}
