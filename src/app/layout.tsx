import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

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
    <html lang="en" className={jakarta.variable}>
      <body className={jakarta.className}>
        <Navbar />
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
