import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guma Microfinance | Empowering Bodaboda Drivers',
  description: 'Flexible loans and daily payments for bodaboda drivers in Tanzania.',
  icons: {
    icon: '/GUMA-MICROFINANCE-BANNER.png',
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
                src="/GUMA-MICROFINANCE-BANNER.png" 
                alt="Guma Microfinance Banner" 
                width={220} 
                height={85} 
                style={{ objectFit: 'contain', maxHeight: '70px', width: 'auto' }}
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
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="footer-title">GUMA Finance</div>
              <div className="footer-text">GUMA MICROFINANCE LIMITED</div>
              <div className="footer-text">MGS PLAZA-GOBA- Madale Road</div>
              <div className="footer-text">P. O Box 823, Dar es Salaam</div>
            </div>
            <div>
              <div className="footer-title">Contact Us</div>
              <div className="footer-text">Office: +255 765 999 321</div>
              <div className="footer-text">Mobile: +255 763 538 375</div>
              <div className="footer-text">Email: guma@gumafinance.co.tz</div>
              <div className="footer-text">Web: www.gumafinance.co.tz</div>
            </div>
            <div>
              <div className="footer-title">Follow Us</div>
              <div className="footer-text">Stay connected with us on social media for updates and offers.</div>
              <div className="footer-socials">
                <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook size={20} /></a>
                <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter size={20} /></a>
                <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} GUMA MICROFINANCE LIMITED. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
