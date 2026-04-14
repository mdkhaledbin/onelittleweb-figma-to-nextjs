import Wrapper from "@/components/common/Wrapper";

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse bg-brand-light/60 ${className}`} />;
}

function ServiceCardSkeleton() {
  return (
    <article className="mt-3 flex min-h-80 flex-col rounded-lg border border-brand-light bg-white p-6 sm:p-8 md:pl-10">
      <Skeleton className="mt-4 h-16 w-16 rounded-full" />
      <Skeleton className="mt-6 h-8 w-4/5 rounded-full" />
      <Skeleton className="mt-3 h-4 w-full rounded-full" />
      <Skeleton className="mt-2 h-4 w-[85%] rounded-full" />
      <div className="mt-auto pt-8">
        <Skeleton className="h-9 w-30 rounded-full" />
      </div>
    </article>
  );
}

export default function Loading() {
  return (
    <section
      id="services"
      aria-label="Loading services"
      className="h-full bg-white py-12 md:py-14"
    >
      <Wrapper>
        <div className="text-center">
          <Skeleton className="mx-auto h-10 w-72 max-w-full rounded-full" />
          <Skeleton className="mx-auto mt-4 h-4 w-184.5 max-w-full rounded-full" />
          <Skeleton className="mx-auto mt-2 h-4 w-160 max-w-full rounded-full" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
        </div>
      </Wrapper>
    </section>
  );
}
