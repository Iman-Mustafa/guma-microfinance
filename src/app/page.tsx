import Link from "next/link";
import { ArrowRight, Bike, CarTaxiFront, TrendingUp, CheckCircle2 } from "lucide-react";
import VehicleCarousel from "@/components/VehicleCarousel";

export default function Home() {
  return (
    <main>
      {/* Hero Section (Spans Full Screen Viewport) */}
      <section className="hero container">

        <h1>
          Drive Your Future with <br />
          <span className="highlight">GUMA Finance</span>
        </h1>

        <p>
          Get instant access to bodaboda, bajaji, and personal loans with flexible, stress-free daily payments directly from your mobile money account. No endless paperwork, just progress.
        </p>

        <div className="hero-actions">
          <Link href="/apply" className="btn btn-primary">
            <span>Apply Now</span>
            <ArrowRight size={18} />
          </Link>
          <Link href="/payment-info" className="btn btn-outline">
            <span>Learn How to Pay</span>
          </Link>
        </div>
        
        <VehicleCarousel />
      </section>

      {/* Section 1: Our Services (Title Left, Content Right) */}
      <section className="container">
        <div className="split-section-layout">
          {/* Title Left */}
          <div className="split-page-left">
            <h2 className="section-heading">
              Our Products & Services
            </h2>
            <p className="page-desc">
              Designed specifically for riders and small business owners in Tanzania. Choose the financial solution that matches your ambition.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/apply" className="btn btn-primary">
                <span>Start Your Application</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Content Right */}
          <div className="split-page-right">
            <div className="features-stack">
              <div className="feature-box">
                <div className="feature-box-header">
                  <div className="benefit-icon-box" style={{ marginTop: 0 }}>
                    <Bike size={16} />
                  </div>
                  <div className="feature-box-title">Bodaboda Financing</div>
                </div>
                <div className="feature-box-desc">
                  Own your motorcycle with affordable, predictable daily payment plans. Designed to help riders build equity and increase daily earnings.
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-box-header">
                  <div className="benefit-icon-box" style={{ marginTop: 0 }}>
                    <CarTaxiFront size={16} />
                  </div>
                  <div className="feature-box-title">Bajaji Financing</div>
                </div>
                <div className="feature-box-desc">
                  Expand your commercial transport business with flexible bajaji vehicle financing. Fast processing, low deposits, and high-earning three-wheelers.
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-box-header">
                  <div className="benefit-icon-box" style={{ marginTop: 0 }}>
                    <TrendingUp size={16} />
                  </div>
                  <div className="feature-box-title">Personal & Growth Loans</div>
                </div>
                <div className="feature-box-desc">
                  Need capital for emergencies, repairs, or business expansion? Get approved quickly with transparent rates and flexible terms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How to Apply & Get Loan (Title Left, Content Right) */}
      <section className="container">
        <div className="split-section-layout">
          {/* Title Left */}
          <div className="split-page-left">
            <h2 className="section-heading">
              How to Apply & Receive Your Vehicle
            </h2>
            <p className="page-desc">
              We streamlined vehicle financing into a straightforward, transparent 3-step experience without bureaucratic delays.
            </p>
            <div className="quick-info-card">
              <div className="quick-info-row">
                <span className="quick-info-label">Main Office</span>
                <span className="quick-info-value">MGS PLAZA-GOBA</span>
              </div>
              <div className="quick-info-row">
                <span className="quick-info-label">Processing Time</span>
                <span className="quick-info-value">Same Day</span>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="split-page-right">
            <div className="features-stack">
              <div className="payment-step">
                <div className="step-number">1</div>
                <div>
                  <h3 className="step-title">Visit Office or Apply Online</h3>
                  <p className="step-desc">
                    Drop by our office at MGS PLAZA-GOBA-Madale Road or click "Apply Now" to start your online NIDA verification in seconds.
                  </p>
                </div>
              </div>

              <div className="payment-step">
                <div className="step-number">2</div>
                <div>
                  <h3 className="step-title">Submit Basic NIDA Information</h3>
                  <p className="step-desc">
                    Provide your National ID number. Our automated verification system reviews your records immediately with no complex documentation.
                  </p>
                </div>
              </div>

              <div className="payment-step">
                <div className="step-number">3</div>
                <div>
                  <h3 className="step-title">Sign Contract & Receive Your Vehicle</h3>
                  <p className="step-desc">
                    Inspect and collect your motorcycle or bajaji along with your Virtual Account Number for hassle-free daily repayments via M-Pesa, Tigo Pesa, or Airtel Money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
