import Wrapper from "@/components/common/Wrapper";

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse bg-brand-light/60 ${className}`} />;
}

function PricingCardSkeleton({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl px-5 py-7 ${
        highlighted
          ? "bg-brand text-white"
          : "border border-brand-light bg-white text-[#191d23]"
      }`}
    >
      <Skeleton
        className={`h-10 w-2/3 rounded-full ${highlighted ? "bg-white/35" : ""}`}
      />
      <Skeleton
        className={`mt-3 h-4 w-full rounded-full ${highlighted ? "bg-white/30" : ""}`}
      />
      <Skeleton
        className={`mt-2 h-4 w-4/5 rounded-full ${highlighted ? "bg-white/30" : ""}`}
      />

      <div className="mt-6 flex items-end gap-2">
        <Skeleton
          className={`h-12 w-24 rounded-full ${highlighted ? "bg-white/40" : ""}`}
        />
        <Skeleton
          className={`mb-2 h-4 w-18 rounded-full ${highlighted ? "bg-white/30" : ""}`}
        />
      </div>

      <Skeleton
        className={`mt-6 h-11 w-full rounded-[5px] ${highlighted ? "bg-white/85" : ""}`}
      />

      <div className="mt-7 space-y-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <Skeleton
              className={`h-7 w-7 rounded-full ${highlighted ? "bg-white/40" : ""}`}
            />
            <Skeleton
              className={`h-4 w-[72%] rounded-full ${highlighted ? "bg-white/30" : ""}`}
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Loading() {
  return (
    <section id="pricing" aria-label="Loading pricing" className="bg-white py-2">
      <Wrapper>
        <div className="text-center">
          <Skeleton className="mx-auto h-12 w-100 max-w-full rounded-full" />
          <Skeleton className="mx-auto mt-4 h-4 w-72 max-w-full rounded-full" />
        </div>

        <div className="relative mx-auto mb-20 mt-6 flex w-fit items-center gap-4">
          <Skeleton className="h-4 w-22 rounded-full" />
          <Skeleton className="h-6 w-11 rounded-full" />
          <Skeleton className="h-4 w-20 rounded-full" />
          <Skeleton className="absolute -right-18 top-5 h-8 w-20 rotate-15 rounded-full md:rotate-0" />
        </div>

        <div className="mt-8 grid gap-4 md:gap-10 lg:grid-cols-3">
          <PricingCardSkeleton />
          <PricingCardSkeleton highlighted />
          <PricingCardSkeleton />
        </div>
      </Wrapper>
    </section>
  );
}
