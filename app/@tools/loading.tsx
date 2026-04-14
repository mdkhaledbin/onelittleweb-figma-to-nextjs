import Wrapper from "@/components/common/Wrapper";

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse bg-brand-light/60 ${className}`} />;
}

function ToolLogoCardSkeleton() {
  return (
    <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-14 md:px-15 md:py-18">
      <Skeleton className="h-8 w-36 rounded-full" />
    </div>
  );
}

export default function Loading() {
  return (
    <section
      id="resources"
      aria-label="Loading tools"
      className="py-12 md:py-14"
    >
      <Wrapper className="relative">
        <div className="text-center">
          <Skeleton className="mx-auto h-10 w-70 max-w-full rounded-full" />
          <Skeleton className="mx-auto mt-4 h-4 w-184.5 max-w-full rounded-full" />
          <Skeleton className="mx-auto mt-2 h-4 w-160 max-w-full rounded-full" />
        </div>
      </Wrapper>

      <div className="mt-8 w-full bg-[#F6F6F6] pb-24 pt-9">
        <Wrapper className="max-w-3/5">
          <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
            <ToolLogoCardSkeleton />
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
