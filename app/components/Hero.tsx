export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            From Cloud Overspend to Measurable Business Value
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            We help CIOs and technology leaders <strong>reduce cloud run-rate by 15–30%</strong>,
            align finance and engineering, and <strong>link optimisation to business outcomes</strong>—fast to
            implement, built to last, multi-cloud and global.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="rounded-md bg-black px-4 py-2.5 text-white text-sm font-medium hover:opacity-90"
            >
              Book a 20-min Diagnostic
            </a>
            <a
              href="#proof"
              className="rounded-md border border-gray-300 px-4 py-2.5 text-sm hover:bg-gray-50"
            >
              See Savings Scenarios (3 min)
            </a>
          </div>

          {/* Proof chips */}
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5">
              USD $15M+ verified annual savings
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5">
              USD $140M+/yr accurately charged back
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5">
              AWS & Azure expertise
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5">
              ISO/IEC 27001 Lead Auditor · FinOps Certified
            </span>
          </div>

          {/* Logos (text placeholders to avoid images) */}
          <p className="mt-6 text-sm text-gray-600">
            Experience with: <strong>NAB</strong> · <strong>Deloitte</strong> ·{' '}
            <strong>Australian Government</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
