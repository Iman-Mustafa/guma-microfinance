'use client';

import { useState } from 'react';
import { ShieldCheck, ScanFace, Bike, Smartphone, CheckCircle } from 'lucide-react';

export default function ApplyPage() {
  const [nida, setNida] = useState('');
  const [status, setStatus] = useState<null | 'loading' | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call to NIDA
    setTimeout(() => {
      setStatus('success');
    }, 1800);
  };

  return (
    <main className="container">
      <div className="split-page-layout">
        {/* Left Column: Title, Overview & Benefits */}
        <div className="split-page-left">
          <h1 className="page-title">Apply for Bodaboda & Bajaji Loan</h1>
          
          <p className="page-desc">
            Get on the road faster. Enter your National ID (NIDA) number to instantly verify your profile and fast-track your vehicle financing.
          </p>

          <div className="benefit-list">
            <div className="benefit-item">
              <div className="benefit-icon-box">
                <ScanFace size={16} />
              </div>
              <div>
                <div className="benefit-title">Instant NIDA Check</div>
                <div className="benefit-desc">Automated identity verification with no endless physical paperwork.</div>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon-box">
                <Bike size={16} />
              </div>
              <div>
                <div className="benefit-title">Fast Handover</div>
                <div className="benefit-desc">Receive your motorcycle or bajaji within 24 hours of contract signing.</div>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon-box">
                <Smartphone size={16} />
              </div>
              <div>
                <div className="benefit-title">Daily Mobile Repayments</div>
                <div className="benefit-desc">Flexible daily payments via M-Pesa, Tigo Pesa, or Airtel Money.</div>
              </div>
            </div>
          </div>

          <div className="quick-info-card">
            <div className="quick-info-row">
              <span className="quick-info-label">Approval Time</span>
              <span className="quick-info-value">Under 24 Hours</span>
            </div>
            <div className="quick-info-row">
              <span className="quick-info-label">Requirement</span>
              <span className="quick-info-value">NIDA ID Only</span>
            </div>
            <div className="quick-info-row">
              <span className="quick-info-label">Customer Support</span>
              <span className="quick-info-value">+255 765 999 321</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form Card (1:1 with all cards) */}
        <div className="split-page-right">
          <div className="feature-box" style={{ padding: '1.25rem 1.4rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '50%', 
                  background: 'rgba(16, 185, 129, 0.12)', 
                  color: '#10B981', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1rem' 
                }}>
                  <CheckCircle size={24} />
                </div>
                
                <h3 className="feature-box-title" style={{ marginBottom: '0.45rem' }}>
                  Identity Verified Successfully!
                </h3>
                
                <p className="feature-box-desc" style={{ marginBottom: '1.25rem' }}>
                  We found your verified NIDA records. A Guma Microfinance loan specialist will contact you shortly to schedule vehicle inspection and handover.
                </p>

                <div className="quick-info-card" style={{ marginTop: '0', marginBottom: '1.25rem' }}>
                  <div className="quick-info-row">
                    <span className="quick-info-label">NIDA Reference:</span>
                    <strong style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>{nida}</strong>
                  </div>
                  <div className="quick-info-row">
                    <span className="quick-info-label">Status:</span>
                    <strong style={{ color: '#10B981', fontSize: '0.85rem' }}>Pre-Approved</strong>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => { setStatus(null); setNida(''); }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div>
                <div className="feature-box-header" style={{ marginBottom: '0.75rem' }}>
                  <div className="benefit-icon-box" style={{ marginTop: 0 }}>
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h3 className="feature-box-title">Online Verification</h3>
                    <p className="feature-box-desc" style={{ fontSize: '0.78rem' }}>Safe, encrypted NIDA data connection</p>
                  </div>
                </div>

                <p className="feature-box-desc" style={{ marginBottom: '1.25rem' }}>
                  Please enter your 20-digit National ID (NIDA) number. We will retrieve your details automatically without requiring physical documents.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="nida">
                      National ID Number (NIDA)
                    </label>
                    <input 
                      type="text" 
                      id="nida" 
                      className="form-input" 
                      placeholder="e.g. 19901231-11101-00001-26"
                      value={nida}
                      onChange={(e) => setNida(e.target.value)}
                      required 
                    />
                    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      Enter your NIDA number as shown on your NIDA card or printout.
                    </span>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '0.5rem' }}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span>Verifying with NIDA...</span>
                    ) : (
                      <>
                        <ShieldCheck size={16} />
                        <span>Verify Identity & Apply</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
