import { Smartphone, HelpCircle, PhoneCall, Shield, CheckCircle2 } from 'lucide-react';

export default function PaymentInfoPage() {
  const steps = [
    {
      number: 1,
      title: 'Dial USSD Code',
      desc: (
        <>
          Dial <strong>*150*00#</strong> (M-Pesa), <strong>*150*01#</strong> (Tigo Pesa), or <strong>*150*60#</strong> (Airtel Money) on your mobile handset.
        </>
      ),
    },
    {
      number: 2,
      title: 'Select Pay Bill / Lipia Bili',
      desc: (
        <>
          Navigate through the menu and select <strong>Pay Bill (Lipia Bili)</strong> or <strong>Pay Business (Lipia Kampuni)</strong>.
        </>
      ),
    },
    {
      number: 3,
      title: 'Enter GUMA Business Number',
      desc: (
        <>
          Enter the official Guma Microfinance company business number: <strong>400500</strong>.
        </>
      ),
    },
    {
      number: 4,
      title: 'Enter Your Virtual Number (Reference)',
      desc: (
        <>
          Enter your unique 10-digit virtual account number provided during loan approval (e.g. <strong>9922001144</strong>) as the account reference.
        </>
      ),
    },
    {
      number: 5,
      title: 'Enter Daily Amount & Confirm with PIN',
      desc: (
        <>
          Enter your agreed daily installment amount (e.g. <strong>TZS 10,000</strong>) and enter your mobile money PIN to complete payment.
        </>
      ),
    },
  ];

  return (
    <main className="container">
      <div className="split-page-layout">
        {/* Left Column: Title & Key Payment Details */}
        <div className="split-page-left">
          <h1 className="page-title">How to Pay Your Loan</h1>

          <p className="page-desc">
            Repay your daily loan installments anytime, anywhere directly from your mobile phone. Instant confirmation via SMS.
          </p>

          <div className="quick-info-card">
            <div className="quick-info-row">
              <span className="quick-info-label">Business Number</span>
              <span className="quick-info-value">400500</span>
            </div>
            <div className="quick-info-row">
              <span className="quick-info-label">Account Reference</span>
              <span className="quick-info-value">Your Virtual Number</span>
            </div>
            <div className="quick-info-row">
              <span className="quick-info-label">Supported Networks</span>
              <span className="quick-info-value">M-Pesa, Tigo, Airtel</span>
            </div>
            <div className="quick-info-row">
              <span className="quick-info-label">Customer Helpline</span>
              <span className="quick-info-value">+255 765 999 321</span>
            </div>
          </div>

          <div className="benefit-list" style={{ marginTop: '1.25rem' }}>
            <div className="benefit-item">
              <div className="benefit-icon-box">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <div className="benefit-title">Instant Balance Update</div>
                <div className="benefit-desc">Your payment registers automatically within seconds of sending.</div>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-box">
                <Shield size={22} />
              </div>
              <div>
                <div className="benefit-title">Secure & Transparent</div>
                <div className="benefit-desc">Official mobile money receipts sent to your registered phone number.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 5-Step Payment Guide */}
        <div className="split-page-right">
          <div className="features-stack">
            {steps.map((step) => (
              <div key={step.number} className="payment-step">
                <div className="step-number">{step.number}</div>
                <div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
