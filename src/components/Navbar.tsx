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
      {/* Highway Road Track Dedicated in Lower Section */}
      <div className="navbar-road-bg" aria-hidden="true">
        <svg 
          viewBox="0 0 1000 36" 
          preserveAspectRatio="none" 
          className="navbar-road-svg"
        >
          <defs>
            <linearGradient id="roadSurface" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2B3990" stopOpacity="0.08" />
              <stop offset="35%" stopColor="#2B3990" stopOpacity="0.05" />
              <stop offset="70%" stopColor="#84B01A" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="dashStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2B3990" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#84B01A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Road Surface Ribbon */}
          <path 
            d="M 0,2 C 250,5 500,1 750,4 C 880,2 950,3 1000,3 L 1000,36 L 0,36 Z" 
            fill="url(#roadSurface)"
          />
          
          {/* Upper Road Edge Line */}
          <path 
            d="M 0,2 C 250,5 500,1 750,4 C 880,2 950,3 1000,3" 
            fill="none" 
            stroke="#2B3990" 
            strokeWidth="1.2" 
            strokeOpacity="0.18"
          />
          
          {/* Center Dashed Lane Marker */}
          <path 
            d="M 0,18 C 250,21 500,17 750,20 C 880,18 950,19 1000,19" 
            fill="none" 
            stroke="url(#dashStroke)" 
            strokeWidth="1.5" 
            strokeDasharray="6, 8"
          />

          {/* Animated Vehicle 1: Bodaboda (Motorcycle with Rider) - Fast & Nimble */}
          <g>
            <animateMotion 
              path="M -30,16 C 250,19 500,15 750,18 C 880,16 950,17 1030,17" 
              dur="12s" 
              repeatCount="indefinite" 
              rotate="auto"
            />
            <g transform="translate(-10, -10)">
              {/* Wheels */}
              <circle cx="3" cy="11" r="2.6" fill="#0f172a" />
              <circle cx="15" cy="11" r="2.6" fill="#0f172a" />
              <circle cx="3" cy="11" r="1.1" fill="#e2e8f0" />
              <circle cx="15" cy="11" r="1.1" fill="#e2e8f0" />
              {/* Bike Frame */}
              <path d="M 3,11 L 8,7 L 13,7 L 15,11" stroke="#2B3990" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M 8,7 L 10,11" stroke="#2B3990" strokeWidth="1.3" fill="none" />
              {/* Tank/Seat */}
              <path d="M 6,6.5 Q 9,5.5 12,6.5 L 12,8 L 6,8 Z" fill="#2B3990" />
              {/* Rider Helmet & Body */}
              <circle cx="9.5" cy="2.5" r="2" fill="#84B01A" />
              <path d="M 8.5,4.5 L 10,8 L 12.5,7" stroke="#0f172a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M 10,8 L 10.5,10.5" stroke="#0f172a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              {/* Headlight beam */}
              <polygon points="16,5 24,3 24,9 16,7" fill="rgba(254, 240, 138, 0.55)" />
            </g>
          </g>

          {/* Animated Vehicle 2: Bajaji (Three-Wheeler Auto-Rickshaw) - Cruising */}
          <g>
            <animateMotion 
              path="M -30,19 C 250,22 500,18 750,21 C 880,19 950,20 1030,20" 
              dur="18s" 
              begin="-6s"
              repeatCount="indefinite" 
              rotate="auto"
            />
            <g transform="translate(-12, -12)">
              {/* Wheels */}
              <circle cx="4" cy="13" r="2.6" fill="#0f172a" />
              <circle cx="18" cy="13" r="2.6" fill="#0f172a" />
              <circle cx="4" cy="13" r="1.1" fill="#e2e8f0" />
              <circle cx="18" cy="13" r="1.1" fill="#e2e8f0" />
              {/* Bajaji Body Bottom (Royal Blue) */}
              <rect x="2" y="8" width="18" height="4.5" rx="1.5" fill="#2B3990" />
              {/* Canopy Roof (Lime Green) */}
              <path d="M 3,8 L 6,2.5 L 18,2.5 Q 20,2.5 20,8 Z" fill="#84B01A" />
              {/* Windows */}
              <path d="M 6.5,3.5 L 12.5,3.5 L 12.5,7 L 5.5,7 Z" fill="#e0f2fe" opacity="0.85" />
              <rect x="13.5" y="3.5" width="5.5" height="3.5" rx="0.5" fill="#e0f2fe" opacity="0.85" />
              {/* Front Headlight Beam */}
              <polygon points="21,7.5 30,5 30,11 21,9.5" fill="rgba(254, 240, 138, 0.55)" />
            </g>
          </g>
        </svg>
      </div>

      <div className="nav-brand">
        <Link href="/">
          <Image 
            src="/GUMA-MICROFINANCE-BANNER.png" 
            alt="Guma Microfinance Banner" 
            width={220} 
            height={85} 
            style={{ objectFit: 'contain', maxHeight: '66px', width: 'auto' }}
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
