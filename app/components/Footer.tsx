export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FinOpsAdvice. All rights reserved.</p>
          <p>Privacy · Terms · Accessibility (WCAG 2.2 AA target)</p>
        </div>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FinOpsAdvice',
            url: 'https://your-domain.tld',
            sameAs: ['https://www.linkedin.com/company/your-company'],
            offers: {
              '@type': 'Offer',
              name: 'FinOps Diagnostic, Stabilise & Save, FinOps-as-a-Service',
            },
          }) }}
        />
      </div>
    </footer>
  );
}
