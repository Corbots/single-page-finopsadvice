export default function Proof() {
  return (
    <section id="proof" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Proof</h2>
        <p className="mt-2 text-gray-700">
          Over <strong>USD $15M</strong> in verified annual savings and <strong>USD $140M+/yr</strong> accurately charged back
          for enterprise and public sector clients including NAB, Deloitte, and the Australian Government.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-semibold">Banking (NAB)</h3>
            <p className="mt-2 text-gray-700">
              From low visibility to data-driven optimisation: automation + reporting delivered measurable waste reduction and accelerated execution.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-semibold">Consulting (Deloitte)</h3>
            <p className="mt-2 text-gray-700">
              Built a tiered FinOps offering—clients move consistently from first assessment to mature cloud cost governance.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-semibold">Public Sector (Service NSW / UNSW)</h3>
            <p className="mt-2 text-gray-700">
              Implemented a multi-cloud model, enabled chargeback and executive reporting—unlocking millions in savings.
            </p>
          </div>
        </div>

        {/* Booking anchor + Calendly placeholder */}
        <div id="book" className="mt-12 rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Book a 20-minute FinOps Diagnostic</h3>
          <p className="mt-2 text-gray-700">
            Bring one month of AWS/Azure cost data; we’ll surface your top opportunities and a 90-day plan.
          </p>
          {/* Replace with your Calendly embed script or link */}
          <a
            href="https://calendly.com/your-handle/20min"
            className="mt-4 inline-block rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Open Calendly
          </a>
        </div>
      </div>
    </section>
  );
}
