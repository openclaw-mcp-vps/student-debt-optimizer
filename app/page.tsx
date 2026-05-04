export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <span className="mb-4 rounded-full border border-[#58a6ff33] bg-[#58a6ff11] px-4 py-1 text-sm text-[#58a6ff]">
          Built for graduates &amp; students
        </span>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          Optimize Your Student Loan Repayment Strategy
        </h1>
        <p className="mb-8 max-w-xl text-lg text-[#8b949e]">
          Compare income-driven plans, refinancing options, and forgiveness programs.
          Get a personalized roadmap to pay off your debt faster and smarter.
        </p>
        <a
          href={checkoutUrl}
          className="rounded-lg bg-[#58a6ff] px-8 py-3 text-base font-semibold text-[#0d1117] transition hover:bg-[#79b8ff] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
        >
          Start Optimizing — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Pricing */}
      <section className="flex justify-center px-4 pb-24">
        <div className="w-full max-w-sm rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <h2 className="mb-2 text-xl font-bold text-white">Pro Plan</h2>
          <p className="mb-6 text-[#8b949e] text-sm">Everything you need to crush your debt</p>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">$9</span>
            <span className="text-[#8b949e]">/mo</span>
          </div>
          <ul className="mb-8 space-y-3 text-left text-sm">
            {[
              "Multi-step loan calculator",
              "Income-driven repayment comparison",
              "Refinancing &amp; forgiveness analysis",
              "Personalized repayment roadmap",
              "Save &amp; revisit your scenarios"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full rounded-lg bg-[#58a6ff] py-3 text-center font-semibold text-[#0d1117] transition hover:bg-[#79b8ff]"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-4 pb-24">
        <h2 className="mb-8 text-center text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="mb-2 font-semibold text-white">What loan types does this cover?</h3>
            <p className="text-sm text-[#8b949e]">
              Federal and private student loans including Direct Subsidized, Unsubsidized, PLUS, and Grad PLUS loans.
            </p>
          </div>
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="mb-2 font-semibold text-white">Is my financial data secure?</h3>
            <p className="text-sm text-[#8b949e]">
              All data is stored locally in your browser. We never send your personal financial information to our servers.
            </p>
          </div>
          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <h3 className="mb-2 font-semibold text-white">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">
              Yes, cancel anytime from your account dashboard. You keep access until the end of your billing period.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        &copy; {new Date().getFullYear()} Student Debt Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
