import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100dvh-89px)] overflow-hidden bg-linear-to-b from-[#fff7fa] via-white to-[#fff8fb]">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-light/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100dvh-89px)] max-w-4xl items-center px-4 py-12">
        <section className="w-full rounded-3xl border border-[#f3d7e0] bg-white/80 p-8 text-center shadow-[0_20px_80px_rgba(250,196,210,0.35)] backdrop-blur-sm sm:p-12">
          <p className="inline-flex rounded-full border border-[#f3d7e0] bg-[#fff4f7] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-brand">
            404 PAGE NOT FOUND
          </p>

          <h1 className="mt-6 font-bold text-4xl leading-tight text-[#101828] sm:text-5xl">
            This stay is no longer available.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475467] sm:text-lg">
            The page you requested might have moved or no longer exists. Let us
            guide you back to the places that matter.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#d73760]"
            >
              Back to Home
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-brand px-6 text-sm font-bold text-brand transition-all duration-300 hover:scale-[1.02] hover:bg-[#fff4f7]"
            >
              View Pricing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}