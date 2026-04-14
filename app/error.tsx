"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-[calc(100dvh-89px)] overflow-hidden bg-linear-to-b from-[#fff7fa] via-white to-[#fff8fb]">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-light/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100dvh-89px)] max-w-4xl items-center px-4 py-12">
        <section className="w-full rounded-3xl border border-[#f3d7e0] bg-white/80 p-8 text-center shadow-[0_20px_80px_rgba(250,196,210,0.35)] backdrop-blur-sm sm:p-12">
          <p className="inline-flex rounded-full border border-[#f3d7e0] bg-[#fff4f7] px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-brand">
            SOMETHING WENT WRONG
          </p>

          <h1 className="mt-6 font-bold text-4xl leading-tight text-[#101828] sm:text-5xl">
            We hit a temporary issue.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475467] sm:text-lg">
            The page failed to load this time. You can retry safely, or return
            to the home section while we recover.
          </p>

          {error.digest ? (
            <p className="mx-auto mt-4 max-w-xl rounded-lg bg-[#fff4f7] px-4 py-2 text-xs font-medium text-[#9f1239]">
              Error reference: {error.digest}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={unstable_retry}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#d73760]"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-brand px-6 text-sm font-bold text-brand transition-all duration-300 hover:scale-[1.02] hover:bg-[#fff4f7]"
            >
              Go Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}