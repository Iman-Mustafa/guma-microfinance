export default function Home() {
  return (
    <main>
      <section className="hero container">
        <h1>Drive Your Future with <br/>Guma Microfinance</h1>
        <p>Get instant access to bodaboda loans with flexible, stress-free daily payments directly from your mobile money account. No paperwork, just progress.</p>
        <div>
          <a href="/apply" className="btn btn-primary">Apply Now</a>
          <a href="/payment-info" className="btn btn-outline">Learn How to Pay</a>
        </div>
      </section>

      <section className="container">
        <div className="features-grid">
          <div className="glass-card">
            <div className="feature-title">⚡ Fast Approval</div>
            <div className="feature-desc">Using your NIDA number, we verify your identity and approve your loan in minutes. No endless paperwork.</div>
          </div>
          <div className="glass-card">
            <div className="feature-title">📱 Mobile Payments</div>
            <div className="feature-desc">Pay your daily installments easily via M-Pesa, Tigo Pesa, or Airtel Money directly to your Virtual Number.</div>
          </div>
          <div className="glass-card">
            <div className="feature-title">🎯 Fair Terms</div>
            <div className="feature-desc">Clear, transparent daily payment plans designed specifically for bodaboda riders to succeed.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
