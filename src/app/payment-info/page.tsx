export default function PaymentInfoPage() {
  return (
    <main className="container" style={{ padding: '4rem 1rem' }}>
      <div className="form-container">
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: 'white', textAlign: 'center' }}>How to Pay Your Loan</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center', fontSize: '1.1rem' }}>
          Follow these simple steps to make your daily payment using mobile money.
        </p>

        <div className="glass-card" style={{ padding: '3rem' }}>
          <div className="payment-step">
            <div className="step-number">1</div>
            <div>
              <h3 className="feature-title" style={{ marginBottom: '0.5rem' }}>Dial USSD Code</h3>
              <p className="feature-desc">Dial <strong>*150*00#</strong> (M-Pesa) or your respective mobile money menu.</p>
            </div>
          </div>
          
          <div className="payment-step">
            <div className="step-number">2</div>
            <div>
              <h3 className="feature-title" style={{ marginBottom: '0.5rem' }}>Select Pay Bill / Lipia Bili</h3>
              <p className="feature-desc">Choose the option to pay companies or business numbers.</p>
            </div>
          </div>

          <div className="payment-step">
            <div className="step-number">3</div>
            <div>
              <h3 className="feature-title" style={{ marginBottom: '0.5rem' }}>Enter Business Number</h3>
              <p className="feature-desc">Enter the Guma Microfinance business number: <strong>400500</strong>.</p>
            </div>
          </div>

          <div className="payment-step">
            <div className="step-number">4</div>
            <div>
              <h3 className="feature-title" style={{ marginBottom: '0.5rem' }}>Enter Your Virtual Number</h3>
              <p className="feature-desc">Enter your unique 10-digit virtual account number provided upon loan approval (e.g., <strong>9922001144</strong>) as the reference.</p>
            </div>
          </div>

          <div className="payment-step" style={{ marginBottom: 0 }}>
            <div className="step-number">5</div>
            <div>
              <h3 className="feature-title" style={{ marginBottom: '0.5rem' }}>Enter Amount & PIN</h3>
              <p className="feature-desc">Enter your required daily amount (e.g., TZS 10,000) and your mobile money PIN to confirm.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
