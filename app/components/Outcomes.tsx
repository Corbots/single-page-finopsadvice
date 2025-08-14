export default function Outcomes() {
  return (
    <section id="outcomes" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Outcomes</h2>
        <p className="mt-2 text-gray-700">
          We don’t ship reports—we ship results that stick.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Cut Run-Rate 15–30%</h3>
            <p className="mt-2 text-gray-700">
              Rightsizing, coverage, and waste removal that <em>doesn’t</em> slow delivery.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Financial Accountability</h3>
            <p className="mt-2 text-gray-700">
              Chargeback/showback models your CFO accepts; forecast variance under control.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Decisions, Not Dashboards</h3>
            <p className="mt-2 text-gray-700">
              Executive packs that link cloud to value (unit economics, service cost).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
