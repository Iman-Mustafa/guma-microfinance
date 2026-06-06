import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guma Microfinance | Empowering Bodaboda Drivers',
  description: 'Flexible loans and daily payments for bodaboda drivers in Tanzania.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar container">
          <div className="nav-brand">
            Guma<span>Microfinance</span>
          </div>
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/apply" className="nav-link">Apply for Loan</a>
            <a href="/payment-info" className="nav-link">How to Pay</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
