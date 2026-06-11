import VehicleCarousel from "@/components/VehicleCarousel";

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <h1>Drive Your Future with <br/>GUMA Finance</h1>
        <p>Get instant access to bodaboda, bajaji, and personal loans with flexible, stress-free daily payments directly from your mobile money account. No endless paperwork, just progress.</p>
        <div>
          <a href="/apply" className="btn btn-primary">Apply Now</a>
          <a href="/payment-info" className="btn btn-outline">Learn How to Pay</a>
        </div>
        
        <VehicleCarousel />
      </section>

      <section className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="features-grid">
          <div className="glass-card">
            <div className="feature-title">🏍️ Bodaboda Financing</div>
            <div className="feature-desc">Own your bodaboda with our affordable daily payment plans designed for riders to succeed and grow their income.</div>
          </div>
          <div className="glass-card">
            <div className="feature-title">🛺 Bajaji Financing</div>
            <div className="feature-desc">Expand your transport business with our flexible bajaji loans. Fair terms and quick processing for reliable vehicles.</div>
          </div>
          <div className="glass-card">
            <div className="feature-title">💸 Personal Loans</div>
            <div className="feature-desc">Need a quick boost? We offer personal loans tailored to your needs. Get approved fast with minimal requirements.</div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">How to Apply & Get Your Loan</h2>
        <div className="form-container">
          <div className="payment-step">
            <div className="step-number">1</div>
            <div>
              <h3>Visit Our Office or Apply Online</h3>
              <p className="feature-desc" style={{marginTop: '0.5rem'}}>Come to our office at MGS PLAZA-GOBA- Madale Road or click the "Apply Now" button to start your application online.</p>
            </div>
          </div>
          <div className="payment-step">
            <div className="step-number">2</div>
            <div>
              <h3>Submit Requirements</h3>
              <p className="feature-desc" style={{marginTop: '0.5rem'}}>Provide your NIDA ID and basic personal details. We verify your identity instantly with no endless paperwork.</p>
            </div>
          </div>
          <div className="payment-step">
            <div className="step-number">3</div>
            <div>
              <h3>Quick Approval & Handover</h3>
              <p className="feature-desc" style={{marginTop: '0.5rem'}}>Once approved, sign your contract. You'll receive your vehicle (or funds) and a Virtual Number for daily repayments via M-Pesa, Tigo Pesa, or Airtel Money.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
