import React from 'react';
import { Sparkles, History, ArrowLeftRight } from 'lucide-react';

const VersionSwitcher = ({ activeVersion, onSwitch }) => {
  return (
    <aside aria-label="Version Switcher" className="trionn-version-switcher">
      {/* V2 Elite Pill */}
      <button
        onClick={() => onSwitch('v2')}
        className={`trionn-version-pill ${activeVersion === 'v2' ? 'active' : ''}`}
        title="Next-Gen Cyber Studio Version"
      >
        <Sparkles size={14} />
        <span>V2 CYBER PRO</span>
      </button>

      {/* Switch divider icon */}
      <div style={{ color: 'var(--tr-text-muted)', display: 'flex', alignItems: 'center', padding: '0 2px' }}>
        <ArrowLeftRight size={12} />
      </div>

      {/* V1 Classic Pill */}
      <button
        onClick={() => onSwitch('v1')}
        className={`trionn-version-pill ${activeVersion === 'v1' ? 'active' : ''}`}
        title="Original Classic Bootstrap Version"
      >
        <History size={14} />
        <span>V1 CLASSIC</span>
      </button>
    </aside>
  );
};

export default VersionSwitcher;
