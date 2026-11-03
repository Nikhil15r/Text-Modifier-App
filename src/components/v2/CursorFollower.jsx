import React, { useEffect, useState } from 'react';

const CursorFollower = ({ enabled = true }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Check if device supports hover (mouse vs touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Outer Glow Halo */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          borderRadius: '50%',
          border: isHovered ? '1.5px solid var(--tr-neon)' : '1px solid var(--tr-border-highlight)',
          backgroundColor: isHovered ? 'var(--tr-neon-soft)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px var(--tr-neon-glow)' : 'none',
          transition: 'width 0.22s ease-out, height 0.22s ease-out, background-color 0.22s ease-out, border 0.22s ease-out',
        }}
      />
      {/* Center Pin Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'var(--tr-neon)',
          boxShadow: '0 0 10px var(--tr-neon)',
        }}
      />
    </>
  );
};

export default CursorFollower;
