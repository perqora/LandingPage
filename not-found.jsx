import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f8f5ee] px-5 text-center">
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#1f7568]">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-[#111827] sm:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-md text-lg leading-8 text-[#53605c]">
        This URL doesn't exist. The page may have moved or the link may be wrong.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/#services"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#243145]"
        >
          View services
        </Link>
        <Link
          href="/#contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c9c0af] bg-transparent px-6 py-3 text-sm font-semibold text-[#18201d] transition hover:border-[#7f8f88]"
        >
          Contact Perqora
        </Link>
      </div>
      <Link href="/" className="mt-8 text-sm text-[#1f7568] underline underline-offset-2 hover:opacity-70">
        ← Back to home
      </Link>
    </div>
  );
}
