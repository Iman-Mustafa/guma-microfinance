import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guma Microfinance | Empowering Bodaboda Drivers',
  description: 'Flexible loans and daily payments for bodaboda drivers in Tanzania.',
  icons: {
    icon: '/GUMA-MICROFINANCE-LOGO.png',
  },
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
            <a href="/">
              <Image 
                src="/GUMA-MICROFINANCE-LOGO.png" 
                alt="Guma Microfinance Logo" 
                width={200} 
                height={60} 
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>
          </div>
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/apply" className="nav-link">Apply for Loan</a>
            <a href="/payment-info" className="nav-link">How to Pay</a>
            <a href="https://loanen.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-link staff-login-btn">
              Staff Login
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
