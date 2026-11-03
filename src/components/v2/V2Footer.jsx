import React from 'react';
import { ArrowUp } from 'lucide-react';

const V2Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="trionn-footer">
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* Left Branding */}
        <div>
          <div style={{
            fontFamily: 'var(--tr-font-display)',
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
            marginBottom: '4px',
            color: 'var(--tr-text-primary)'
          }}>
            TEXT<span style={{ color: 'var(--tr-neon)' }}>{"//"}</span>MODIFIER
          </div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--tr-text-secondary)' }}>
            Next-generation text transformation studio by Nikhil.
          </p>
        </div>

        {/* Center Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem' }}>
          <a
            href="https://github.com/Nikhil15r/Text-Modifier-App"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--tr-text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Right Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="trionn-btn-ghost"
          style={{ padding: '8px 14px', fontSize: '0.8rem' }}
          title="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};

export default V2Footer;
