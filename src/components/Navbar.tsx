'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, FileText, Wallet, LogIn } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/apply', label: 'Apply for Loan', icon: FileText },
    { href: '/payment-info', label: 'How to Pay', icon: Wallet },
  ];

  return (
    <nav className="navbar container">
      {/* Subtle Highway Road Vector Background */}
      <div className="navbar-road-bg" aria-hidden="true">
        <svg 
          viewBox="0 0 1000 80" 
          preserveAspectRatio="none" 
          className="navbar-road-svg"
        >
          <defs>
            <linearGradient id="roadSurface" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2B3990" stopOpacity="0.08" />
              <stop offset="35%" stopColor="#2B3990" stopOpacity="0.05" />
              <stop offset="70%" stopColor="#84B01A" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="dashStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2B3990" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#84B01A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Flowing Road Ribbon */}
          <path 
            d="M 170,58 C 300,58 370,26 540,32 C 700,38 820,54 1000,48 L 1000,66 C 820,72 700,56 540,50 C 370,44 300,76 170,76 Z" 
            fill="url(#roadSurface)"
          />
          
          {/* Upper Edge Line */}
          <path 
            d="M 170,58 C 300,58 370,26 540,32 C 700,38 820,54 1000,48" 
            fill="none" 
            stroke="#2B3990" 
            strokeWidth="1.2" 
            strokeOpacity="0.18"
          />
          
          {/* Lower Edge Line */}
          <path 
            d="M 170,76 C 300,76 370,44 540,50 C 700,56 820,72 1000,66" 
            fill="none" 
            stroke="#2B3990" 
            strokeWidth="1.2" 
            strokeOpacity="0.18"
          />
          
          {/* Center Dashed Highway Line */}
          <path 
            d="M 170,67 C 300,67 370,35 540,41 C 700,47 820,63 1000,57" 
            fill="none" 
            stroke="url(#dashStroke)" 
            strokeWidth="1.6" 
            strokeDasharray="6, 8"
          />
        </svg>
      </div>

      <div className="nav-brand">
        <Link href="/">
          <Image 
            src="/GUMA-MICROFINANCE-BANNER.png" 
            alt="Guma Microfinance Banner" 
            width={220} 
            height={85} 
            style={{ objectFit: 'contain', maxHeight: '70px', width: 'auto' }}
            priority
          />
        </Link>
      </div>

      <div className="nav-links">
        {navLinks.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              <span className="nav-icon-box">
                <Icon size={15} />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
        <a 
          href="https://loanen.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link staff-login-btn"
        >
          <span className="nav-icon-box">
            <LogIn size={15} />
          </span>
          <span>Staff Login</span>
        </a>
      </div>
    </nav>
  );
}
