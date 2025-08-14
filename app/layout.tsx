import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinOpsAdvice — Reduce Cloud Costs 15–30%',
  description:
    'Outcome-led FinOps advisory for global enterprises—verified savings, chargeback accuracy, and CFO-grade reporting.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
