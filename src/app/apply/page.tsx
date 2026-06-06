'use client';
import { useState } from 'react';

export default function ApplyPage() {
  const [nida, setNida] = useState('');
  const [status, setStatus] = useState<null | 'loading' | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call to NIDA
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <main className="container" style={{ padding: '4rem 1rem' }}>
      <div className="form-container glass-card">
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem', color: 'white' }}>Apply for Bodaboda Loan</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Please enter your National ID (NIDA) number. We will fetch your details automatically.
        </p>

        {status === 'success' ? (
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Identity Verified!</h3>
            <p style={{ color: 'var(--text-muted)' }}>We have found your records. Our agent will contact you shortly to finalize your motorcycle handover.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="nida">NIDA Number (Mock)</label>
              <input 
                type="text" 
                id="nida" 
                className="form-input" 
                placeholder="e.g. 19901231-11101-00001-26"
                value={nida}
                onChange={(e) => setNida(e.target.value)}
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1rem' }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Verifying with NIDA...' : 'Verify Identity & Apply'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
