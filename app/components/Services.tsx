export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Productised Services</h2>
        <p className="mt-2 text-gray-700">
          Clear scopes, rapid impact, and governance so savings stick.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold">FinOps Diagnostic (2 weeks)</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Heatmap of wastage & top-5 actions</li>
              <li>Executive readout & 90-day plan</li>
              <li>Immediate savings pipeline</li>
            </ul>
            <a href="#book" className="mt-5 inline-block text-sm font-medium underline underline-offset-4">
              Request scope & pricing
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Stabilise & Save (90 days)</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Idle/over-provisioned + SP/RI coverage</li>
              <li>Tagging policy & allocation model</li>
              <li>Anomaly SOP & governance</li>
            </ul>
            <p className="mt-2 text-gray-700"><strong>Outcome:</strong> 15–25% run-rate reduction</p>
            <a href="#book" className="mt-5 inline-block text-sm font-medium underline underline-offset-4">
              Start the 90-day programme
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold">FinOps-as-a-Service (quarterly)</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Monthly showback & forecast tune-ups</li>
              <li>Quarterly CFO/CTO pack; unit economics</li>
              <li>Optional AI FinOps Copilot (NL Q&A)</li>
            </ul>
            <a href="#book" className="mt-5 inline-block text-sm font-medium underline underline-offset-4">
              Explore subscription
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
