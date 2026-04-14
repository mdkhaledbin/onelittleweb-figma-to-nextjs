import Image from "next/image";
import addFriend from "@/public/about/addFriend.png";
import connect from "@/public/about/group.png";
import meet from "@/public/about/headPhone.png";
import { Reveal } from "@/components/services/Reveal";
import { Stagger, StaggerItem } from "@/components/services/Stagger";
import Reasons from "@/components/about/Reasons";

export default function GettingStarted() {
  return (
    <section id="about">
      <div className="self-stretch flex justify-center px-5 pb-24 text-center text-black font-['DM_Sans']">
        <div className="w-full max-w-6xl flex flex-col gap-16">
          {/* Heading */}
          <Reveal>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold">
                Getting Started is <span className="text-brand">Easy</span>
              </h2>
              <p className="text-sm font-medium max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Reveal>

          {/* Steps */}
          <Stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left mx-auto">
              <StaggerItem className="transition-all duration-300 hover:scale-102 hover:-translate-y-1">
                <StepCard
                  step="01"
                  icon={
                    <Image
                      src={addFriend}
                      alt="Step 1"
                      width={100}
                      height={100}
                      className="w-20 h-auto"
                    />
                  }
                  label="Add requirements & sign up today"
                />
              </StaggerItem>

              <StaggerItem className="transition-all duration-300 hover:scale-102 hover:-translate-y-1">
                <StepCard
                  step="02"
                  icon={
                    <Image
                      src={connect}
                      alt="Step 2"
                      width={100}
                      height={100}
                      className="w-20 h-auto"
                    />
                  }
                  label="Connect with your CSM & onboarding team"
                />
              </StaggerItem>

              <StaggerItem className="transition-all duration-300 hover:scale-102 hover:-translate-y-1">
                <StepCard
                  step="03"
                  icon={
                    <Image
                      src={meet}
                      alt="Step 3"
                      width={100}
                      height={100}
                      className="w-20 h-auto"
                    />
                  }
                  label="Meet your STR Assistant next week"
                />
              </StaggerItem>
            </div>
          </Stagger>
        </div>
      </div>
      <Reasons />
    </section>
  );
}

interface StepCardProps {
  step: string; // e.g. "01"
  icon: React.ReactNode;
  label: string; // e.g. "Add requirements\n& sign up today"
}

export function StepCard({ step, icon, label }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-5 h-full">
      {/* Number badge — overlaps the card */}
      <div className="relative w-full flex justify-center h-full">
        {/* Circle badge */}
        <div className="absolute -top-5 left-5 -translate-x-1/2 z-10 w-20 h-20 rounded-full border-4 border-[#e8345a] bg-white flex items-center justify-center text-sm font-medium text-gray-800 shadow-sm">
          {step}
        </div>

        {/* Card */}
        <div className="w-full py-10 px-6 border border-[#f5c9d5] rounded-2xl flex items-center justify-center min-h-40">
          <div className="text-[#2a1020]">{icon}</div>
        </div>
      </div>

      {/* Label */}
      <p className="text-center mx-auto text-xl font-semibold max-w-[65%] text-gray-900 leading-snug whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}
