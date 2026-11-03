import React from 'react';
import { Moon, Sun, MousePointer, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const V2Navbar = ({ v2Theme, setV2Theme, cursorEnabled, setCursorEnabled, onSwitchVersion }) => {
  const location = useLocation();

  const toggleTheme = () => {
    setV2Theme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header style={{
      position: 'sticky',
      top: '16px',
      zIndex: 100,
      padding: '0 1.5rem',
      maxWidth: '1280px',
      margin: '0 auto 1.5rem auto'
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.85rem 1.4rem',
        borderRadius: '9999px',
        backgroundColor: 'var(--tr-card)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid var(--tr-border)',
        boxShadow: '0 16px 36px -12px rgba(0,0,0,0.6)'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          color: 'var(--tr-text-primary)'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            backgroundColor: 'var(--tr-neon)',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 0 16px var(--tr-neon-glow)'
          }}>
            T/M
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--tr-font-display)',
              fontWeight: 800,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              TEXT<span style={{ color: 'var(--tr-neon)' }}>{"//"}</span>MODIFIER
            </span>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              color: 'var(--tr-text-secondary)',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              Cyber Studio 2.0
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Link
            to="/"
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              color: location.pathname === '/' ? '#000' : 'var(--tr-text-secondary)',
              backgroundColor: location.pathname === '/' ? 'var(--tr-neon)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            Studio
          </Link>
          <Link
            to="/about"
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              color: location.pathname === '/about' ? '#000' : 'var(--tr-text-secondary)',
              backgroundColor: location.pathname === '/about' ? 'var(--tr-neon)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            About & Specs
          </Link>
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Custom Cursor Toggle */}
          <button
            onClick={() => setCursorEnabled(prev => !prev)}
            title={cursorEnabled ? 'Disable Custom Cursor' : 'Enable Custom Cursor'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--tr-border)',
              backgroundColor: cursorEnabled ? 'rgba(204, 255, 0, 0.12)' : 'rgba(255,255,255,0.03)',
              color: cursorEnabled ? 'var(--tr-neon)' : 'var(--tr-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <MousePointer size={15} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={v2Theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--tr-border)',
              backgroundColor: 'rgba(255,255,255,0.03)',
              color: 'var(--tr-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {v2Theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Quick link to GitHub */}
          <a
            href="https://github.com/Nikhil15r/Text-Modifier-App"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid var(--tr-border)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              color: 'var(--tr-text-primary)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
          >
            <span>GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default V2Navbar;
