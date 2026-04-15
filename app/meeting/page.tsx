import Link from "next/link";
import Button from "@/components/common/Button";
import Wrapper from "@/components/common/Wrapper";

export default function MeetingPage() {
  return (
    <main className="relative overflow-hidden bg-linear-to-b from-[#fff7fa] via-white to-[#fff8fb]">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-light/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <Wrapper className="relative z-10 flex min-h-[calc(100dvh-89px)] items-center py-12">
        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[#f3d7e0] bg-white/80 p-8 shadow-[0_20px_80px_rgba(250,196,210,0.35)] backdrop-blur-sm sm:p-12">
          <p className="inline-flex rounded-full border border-[#f3d7e0] bg-[#fff4f7] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-brand">
            BOOK A MEETING
          </p>

          <h1 className="mt-6 font-bold text-4xl leading-tight text-[#101828] sm:text-5xl">
            Let’s plan the right support for your listings.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475467] sm:text-lg">
            Use this page as the destination for the schedule buttons across the
            site. In the meantime, you can jump back home or contact the team
            directly.
          </p>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-[#f3d7e0] bg-[#fffafc] p-5">
              <p className="text-sm font-semibold text-brand">What to expect</p>
              <p className="mt-2 text-sm leading-6 text-[#475467]">
                A short discovery call to review your property workflow,
                priorities, and the support setup that fits best.
              </p>
            </div>

            <div className="rounded-2xl border border-[#f3d7e0] bg-[#fffafc] p-5">
              <p className="text-sm font-semibold text-brand">Next step</p>
              <p className="mt-2 text-sm leading-6 text-[#475467]">
                Send a message to your calendar link or connect this page to a
                real scheduler when you’re ready.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="gap-2" navigateTo="/">
              Back to Home
            </Button>

            <Link
              href="mailto:hello@onelittleweb.com"
              className="inline-flex h-12.5 items-center justify-center rounded-[5px] border border-brand px-6 text-sm font-bold text-brand transition-all duration-300 hover:scale-[1.02] hover:bg-[#fff4f7]"
            >
              Email Us
            </Link>
          </div>
        </section>
      </Wrapper>
    </main>
  );
}
