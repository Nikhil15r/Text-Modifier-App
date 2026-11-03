import './App.css';
import './styles/trionn.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// V1 (Classic) Components
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textarea from './components/Textarea';
import About from './components/About';

// V2 (Trionn Elite) Components
import CursorFollower from './components/v2/CursorFollower';
import V2Navbar from './components/v2/V2Navbar';
import V2Hero from './components/v2/V2Hero';
import V2Studio from './components/v2/V2Studio';
import V2About from './components/v2/V2About';
import V2Footer from './components/v2/V2Footer';

// Common Components
import VersionSwitcher from './components/common/VersionSwitcher';

function AppContent() {
  // Version management: 'v2' (Trionn Cybernetic) or 'v1' (Original Bootstrap)
  const [version, setVersion] = useState(() => {
    return localStorage.getItem('tm_app_version') || 'v2';
  });

  // V2 specific state
  const [v2Theme, setV2Theme] = useState(() => {
    return localStorage.getItem('tm_v2_theme') || 'dark';
  });
  const [cursorEnabled, setCursorEnabled] = useState(() => {
    return localStorage.getItem('tm_cursor') !== 'false';
  });

  // V1 specific state
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has been Enabled', 'success');
    }
  };

  // Sync version switch
  const handleSwitchVersion = (newVersion) => {
    setVersion(newVersion);
    localStorage.setItem('tm_app_version', newVersion);

    if (newVersion === 'v1') {
      document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black';
      document.body.style.color = mode === 'light' ? 'black' : 'white';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  };

  // Persist V2 theme and cursor
  useEffect(() => {
    localStorage.setItem('tm_v2_theme', v2Theme);
    localStorage.setItem('tm_cursor', cursorEnabled.toString());
  }, [v2Theme, cursorEnabled]);

  // Clean body styles on mount if in V2
  useEffect(() => {
    if (version === 'v2') {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [version]);

  return (
    <>
      {version === 'v2' ? (
        /* ========================================================
           V2 TRIONN-INSPIRED CYBERNETIC MODERN SUITE
           ======================================================== */
        <div className="trionn-root" data-v2-theme={v2Theme}>
          {/* Ambient Lighting & Background Orbs */}
          <div className="trionn-grid-bg" />
          <div className="trionn-noise" />
          <div className="trionn-ambient-glow glow-orb-1" />
          <div className="trionn-ambient-glow glow-orb-2" />
          <div className="trionn-ambient-glow glow-orb-3" />

          {/* Interactive Cursor Follower */}
          <CursorFollower enabled={cursorEnabled} />

          {/* Floating V2 Navbar */}
          <V2Navbar
            v2Theme={v2Theme}
            setV2Theme={setV2Theme}
            cursorEnabled={cursorEnabled}
            setCursorEnabled={setCursorEnabled}
            onSwitchVersion={handleSwitchVersion}
          />

          {/* Page Routing */}
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <V2Hero />
                  <V2Studio />
                </main>
              }
            />
            <Route
              path="/about"
              element={
                <main>
                  <V2About />
                </main>
              }
            />
          </Routes>

          {/* V2 Footer */}
          <V2Footer />
        </div>
      ) : (
        /* ========================================================
           V1 ORIGINAL CLASSIC BOOTSTRAP SUITE
           ======================================================== */
        <div className="v1-classic-root" style={{ minHeight: '100vh', paddingBottom: '90px' }}>
          <Navbar title="Text-Modifier" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <Textarea
                  heading="Text Transformation Tool: Uppercase, Lowercase, Space Removal, Convert, and More"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      )}

      {/* Persistent Floating Dual-Engine Switcher Bar */}
      <VersionSwitcher activeVersion={version} onSwitch={handleSwitchVersion} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
