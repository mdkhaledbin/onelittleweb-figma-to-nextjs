function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse bg-brand-light/60 ${className}`} />;
}

function StepCardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative w-full">
        <Skeleton className="absolute -top-5 left-5 h-20 w-20 -translate-x-1/2 rounded-full border-4 border-[#e8345a]/30 bg-white" />
        <div className="min-h-40 rounded-2xl border border-[#f5c9d5] bg-white py-10" />
      </div>
      <div className="flex w-full max-w-[65%] flex-col items-center gap-2">
        <Skeleton className="h-5 w-full rounded-full" />
        <Skeleton className="h-5 w-4/5 rounded-full" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <section id="about" aria-label="Loading about section">
      <div className="flex self-stretch justify-center px-5 pb-24 text-center text-black font-['DM_Sans']">
        <div className="flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col items-center gap-4">
            <Skeleton className="h-10 w-90 max-w-full rounded-full" />
            <Skeleton className="h-4 w-130 max-w-full rounded-full" />
            <Skeleton className="h-4 w-110 max-w-full rounded-full" />
          </div>

          <div className="mx-auto grid grid-cols-1 gap-10 text-left md:grid-cols-2 lg:grid-cols-3">
            <StepCardSkeleton />
            <StepCardSkeleton />
            <StepCardSkeleton />
          </div>
        </div>
      </div>

      <section
        id="why-choose-us"
        aria-label="Loading why choose us section"
        className="px-4 pb-14"
      >
        <div className="mx-auto max-w-12/14 rounded-[33px] border border-[#f8becd] bg-[#fdebf0] px-6 py-10 md:px-10 md:py-14">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="w-full lg:w-[45%]">
              <Skeleton className="h-10 w-4/5 rounded-full" />
              <Skeleton className="mt-6 h-4 w-full rounded-full" />
              <Skeleton className="mt-2 h-4 w-[92%] rounded-full" />

              <div className="mt-7 space-y-4">
                {[0, 1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-58 rounded-full max-w-[80%]" />
                  </div>
                ))}
              </div>

              <Skeleton className="mt-8 h-[50px] w-52 rounded-[5px]" />
            </div>

            <div className="relative w-full lg:w-[55%]">
              <div className="relative h-90 w-full rounded-[30px] bg-brand-light/50">
                <div className="absolute -top-6 left-2 h-28 w-38 rounded-[9px] bg-white shadow-[16px_28px_38.6px_-10px_rgba(191,33,74,0.18)]" />
                <div className="absolute right-4 top-3 h-22 w-30 rounded-2xl bg-white/80" />
                <div className="absolute bottom-0 left-1/2 h-70 w-45 -translate-x-1/2 rounded-t-[120px] bg-white/70" />
                <div className="absolute -bottom-5 left-0 h-24 w-36 rounded-2xl bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
