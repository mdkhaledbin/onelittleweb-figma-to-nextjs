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

function SkeletonBar({ className }: { className: string }) {
  return (
    <div
      className={`rounded-full bg-linear-to-r from-brand-light/60 via-[#ffffff] to-brand-light/60 bg-size-[220%_100%] animate-[pulse_1.7s_ease-in-out_infinite] ${className}`}
    />
  );
}

function LoadingCard() {
  return (
    <div className="rounded-2xl border border-[#f3d7e0] bg-white/70 p-5 shadow-[0_8px_30px_rgba(250,196,210,0.35)] backdrop-blur-sm">
      <SkeletonBar className="h-4 w-24" />
      <SkeletonBar className="mt-4 h-3 w-full" />
      <SkeletonBar className="mt-2 h-3 w-[85%]" />
      <SkeletonBar className="mt-5 h-9 w-30 rounded-[10px]" />
    </div>
  );
}

export default function Loading() {
  return (
    <section aria-label="Loading page content" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 text-[1px]">
        <GuideLines
          verticalClassName="bg-black/10"
          horizontalClassName="bg-black/10"
        />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 42% 46% at 50% 52%, black 0%, black 45%, rgba(0,0,0,0.4) 70%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 42% 46% at 50% 52%, black 0%, black 45%, rgba(0,0,0,0.4) 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-12/14 px-4 pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-166.25 text-center">
          <SkeletonBar className="mx-auto h-12 w-[min(780px,95%)]" />
          <SkeletonBar className="mx-auto mt-4 h-10 w-[min(680px,85%)]" />
          <SkeletonBar className="mx-auto mt-8 h-3.5 w-[min(760px,90%)]" />
          <SkeletonBar className="mx-auto mt-3 h-3.5 w-[min(640px,80%)]" />

          <div className="mx-auto mt-10 flex max-w-80 flex-col items-center gap-4">
            <SkeletonBar className="h-11 w-full rounded-[10px]" />
            <SkeletonBar className="h-4 w-44" />
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      </div>
    </section>
  );
}