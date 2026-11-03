import React from 'react';
import { Terminal, Cpu, Zap } from 'lucide-react';

const V2Hero = () => {
  return (
    <section style={{
      textAlign: 'center',
      padding: '1.5rem 1rem 2.5rem 1rem',
      maxWidth: '960px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    }}>
      {/* Top Tag Pill */}
      <div style={{ display: 'inline-block', marginBottom: '1.2rem' }}>
        <div className="trionn-tag">
          <span className="trionn-tag-dot" />
          <span>CYBERNETIC STUDIO 2.0</span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--tr-text-primary)' }}>ULTRA EDITORIAL</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="trionn-font-display" style={{
        fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.035em',
        marginBottom: '1.2rem',
        color: 'var(--tr-text-primary)'
      }}>
        CRAFT, CONVERT & <br />
        <span style={{
          background: 'linear-gradient(135deg, #ffffff 30%, var(--tr-neon) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 35px var(--tr-neon-glow)'
        }}>
          AMPLIFY YOUR TEXT
        </span>
      </h1>

      {/* Editorial Subtitle */}
      <p style={{
        fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
        color: 'var(--tr-text-secondary)',
        maxWidth: '680px',
        margin: '0 auto 1.8rem auto',
        lineHeight: 1.6
      }}>
        A cybernetic typography studio packed with 25+ transformations, real-time linguistic telemetry, AI voice synthesis, and zero latency.
      </p>

      {/* Feature Tickers */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--tr-border)',
          fontSize: '0.78rem',
          color: 'var(--tr-text-secondary)'
        }}>
          <Zap size={13} style={{ color: 'var(--tr-neon)' }} />
          <span>25+ Transformations</span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--tr-border)',
          fontSize: '0.78rem',
          color: 'var(--tr-text-secondary)'
        }}>
          <Cpu size={13} style={{ color: 'var(--tr-cyan)' }} />
          <span>Real-time Telemetry HUD</span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--tr-border)',
          fontSize: '0.78rem',
          color: 'var(--tr-purple)'
        }}>
          <Terminal size={13} style={{ color: 'var(--tr-purple)' }} />
          <span>Developer Encoders</span>
        </div>
      </div>
    </section>
  );
};

export default V2Hero;
