import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitamins & Supplements Store',
  description: 'Shop high-quality vitamins and supplements for daily health.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
