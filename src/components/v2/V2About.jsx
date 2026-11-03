import React, { useState } from 'react';
import { Layers, Zap, Sparkles, ChevronDown } from 'lucide-react';

const V2About = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What is Text Modifier 2.0?',
      a: 'Text Modifier was originally built by Nikhil as an intuitive text transformation utility. Version 2.0 re-engineers the platform into an editorial cybernetic studio, featuring neon lime accents, real-time linguistic telemetry, AI voice synthesis, and 25+ transformations.'
    },
    {
      q: 'Does my text get sent to an external server?',
      a: 'Never. 100% of the text transformation, formatting, regular expressions, and linguistic telemetry run directly on your browser via client-side JavaScript. Your sensitive passwords, API keys, or private notes never leave your computer.'
    },
    {
      q: 'How does the V1 / V2 Version Switcher work?',
      a: 'The bottom floating switcher allows you to seamlessly toggle between the original V1 Classic (vintage Bootstrap 5 interface) and the new V2 Cyber Pro studio at any time, preserving the full project history.'
    },
    {
      q: 'How does the Voice Synthesizer work?',
      a: 'It taps into the native Web Speech API built into modern web browsers, supporting multiple regional voices and playback speeds with zero latency and zero API cost.'
    }
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 1.5rem 6rem 1.5rem', position: 'relative', zIndex: 2 }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="trionn-tag" style={{ marginBottom: '1rem' }}>
          <span className="trionn-tag-dot" />
          <span>SPECIFICATIONS & ARCHITECTURE</span>
        </div>
        <h1 className="trionn-font-display" style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: 'var(--tr-text-primary)',
          marginBottom: '1rem'
        }}>
          ENGINEERED FOR SPEED. <br />
          <span style={{ color: 'var(--tr-neon)' }}>DESIGNED WITH ATTITUDE.</span>
        </h1>
        <p style={{
          maxWidth: '640px',
          margin: '0 auto',
          color: 'var(--tr-text-secondary)',
          fontSize: '1rem',
          lineHeight: 1.6
        }}>
          A deep dive into how Text Modifier evolved from a simple case converter into an award-grade creative typography suite.
        </p>
      </div>

      {/* Bento Grid: Core Pillars */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '3.5rem'
      }}>
        {/* Card 1: Cyber Luxury */}
        <div className="trionn-card" style={{ padding: '28px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: 'rgba(204, 255, 0, 0.12)',
            color: 'var(--tr-neon)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Sparkles size={20} />
          </div>
          <h3 className="trionn-font-display" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            Cyber-Luxury Aesthetic
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--tr-text-secondary)', lineHeight: 1.6 }}>
            Designed with deep obsidian surfaces, glassmorphism blur, reactive cursor halos, neon lime highlights, and high-impact grotesque typography.
          </p>
        </div>

        {/* Card 2: Zero Latency */}
        <div className="trionn-card" style={{ padding: '28px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 240, 255, 0.12)',
            color: 'var(--tr-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Zap size={20} />
          </div>
          <h3 className="trionn-font-display" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            Instant Local Execution
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--tr-text-secondary)', lineHeight: 1.6 }}>
            Every regex operation, slugification, Base64 conversion, and telemetry metric runs locally on your device's V8 engine at 60+ frames per second.
          </p>
        </div>

        {/* Card 3: Dual-Mode Switcher */}
        <div className="trionn-card" style={{ padding: '28px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: 'rgba(168, 85, 247, 0.12)',
            color: 'var(--tr-purple)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Layers size={20} />
          </div>
          <h3 className="trionn-font-display" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            Dual-Version Heritage
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--tr-text-secondary)', lineHeight: 1.6 }}>
            Seamlessly toggle between the Classic Bootstrap version and the Cyber Pro suite anytime via the persistent version control switch.
          </p>
        </div>
      </div>

      {/* Comparison Matrix: V1 Classic vs V2 Elite */}
      <div className="trionn-card" style={{ padding: '32px', marginBottom: '3.5rem' }}>
        <h3 className="trionn-font-display" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>
          Evolution Matrix: V1 Classic vs V2 Cyber Pro
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--tr-border)' }}>
                <th style={{ padding: '12px', color: 'var(--tr-text-secondary)' }}>Feature</th>
                <th style={{ padding: '12px', color: 'var(--tr-text-secondary)' }}>V1 (Classic)</th>
                <th style={{ padding: '12px', color: 'var(--tr-neon)' }}>V2 (Cyber Pro)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--tr-border)' }}>
                <td style={{ padding: '14px 12px', fontWeight: 600 }}>Visual Theme</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-text-secondary)' }}>Bootstrap 5 CSS</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-neon)', fontWeight: 600 }}>Cyber-Luxury Glassmorphism</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--tr-border)' }}>
                <td style={{ padding: '14px 12px', fontWeight: 600 }}>Transformation Count</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-text-secondary)' }}>7 tools</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-neon)', fontWeight: 600 }}>25+ Precision Tools</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--tr-border)' }}>
                <td style={{ padding: '14px 12px', fontWeight: 600 }}>Developer Encoders</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-text-secondary)' }}>None</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-neon)', fontWeight: 600 }}>Base64, URL, Slugify, ROT13, Binary</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--tr-border)' }}>
                <td style={{ padding: '14px 12px', fontWeight: 600 }}>Speech Synthesis</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-text-secondary)' }}>None</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-neon)', fontWeight: 600 }}>Web Speech API with Voice Selection</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--tr-border)' }}>
                <td style={{ padding: '14px 12px', fontWeight: 600 }}>Undo / Redo Stack</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-text-secondary)' }}>None</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-neon)', fontWeight: 600 }}>Multi-level History Stack</td>
              </tr>
              <tr>
                <td style={{ padding: '14px 12px', fontWeight: 600 }}>Find & Replace</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-text-secondary)' }}>None</td>
                <td style={{ padding: '14px 12px', color: 'var(--tr-neon)', fontWeight: 600 }}>Regex + Case Match Support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive FAQs */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 className="trionn-font-display" style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '20px' }}>
          Frequently Asked Questions
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="trionn-card"
              style={{
                padding: '20px',
                cursor: 'pointer',
                borderColor: openFaq === idx ? 'var(--tr-border-highlight)' : 'var(--tr-border)'
              }}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '1rem',
                color: openFaq === idx ? 'var(--tr-neon)' : 'var(--tr-text-primary)'
              }}>
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease'
                  }}
                />
              </div>
              {openFaq === idx && (
                <div style={{
                  marginTop: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--tr-border)',
                  color: 'var(--tr-text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default V2About;
