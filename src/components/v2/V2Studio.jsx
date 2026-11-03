import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Copy, Download, Trash2, RotateCcw, RotateCw, Volume2,
  Search, Replace, Sparkles, Type, Loader2,
  CheckCheck, Play, Pause, Square
} from 'lucide-react';

const AI_SAMPLE_PROMPTS = [
  {
    topic: 'Product Strategy & Architecture',
    text: `Next-generation digital tools must balance raw computation speed with sensory design. By offloading intensive text manipulation and linguistic analysis to client-side WebAssembly and V8 runtimes, modern applications eliminate backend bottlenecks while preserving end-user privacy. Real-time telemetry empowers editorial writers and technical engineers to iterate faster without friction.`
  },
  {
    topic: 'Developer API & TypeScript Interface',
    text: `// High-Performance Telemetry Gateway\ninterface StreamConfig {\n  endpointUrl: string;\n  retryAttempts: number;\n  timeoutMs: number;\n  compression: "gzip" | "brotli" | "none";\n}\n\nexport const initializeStream = async (config: StreamConfig): Promise<boolean> => {\n  console.log(\`[STREAM_INIT] Connecting to \${config.endpointUrl} with \${config.retryAttempts} retries...\`);\n  return true;\n};`
  },
  {
    topic: 'Dirty Scraped Log & Data Sanitization',
    text: `   ID: #8821  -- User: alex_chen99  \n   ID: #8821  -- User: alex_chen99  \n<div class="user-meta"><span>Role: Principal Architect</span></div>\n   ID: #4402  -- User: samira_dev   \n   ID: #1109  -- User: john_doe     \n   ID: #4402  -- User: samira_dev   \n<p>Verification Status: Confirmed</p>\n   ID: #9931  -- User: elena_rostova   `
  },
  {
    topic: 'Cybernetic Futuristic Telemetry',
    text: `Neural telemetry link established. Core frequency stabilized at 4.2 GHz across all optical subnets. Quantum memory buffer has initialized with zero packet loss. All transformations compiled for instant client-side execution. Stand by for data ingress.`
  },
  {
    topic: 'Marketing Copy & Creative Narrative',
    text: `Stop wasting hours fixing formatting errors, broken slugs, and dirty log pastes. Transform your workflow with instantaneous case conversions, automated line deduplication, regex matching, and AI speech playback designed specifically for modern developers and creators.`
  },
  {
    topic: 'Messy Draft Notes (Clean & Case Testing)',
    text: `hey team    just wanted to follow up on the    new release!   we need to make sure the case converters and the   extra space removal tools are working smoothly before launch.   let me know if you run into any weird bugs or formatting issues.`
  },
  {
    topic: 'Cryptographic Security & System Tokens',
    text: `AUTHENTICATION_BEARER_TOKEN="eyAiaGFzaCI6ICJjOTJhOGVjMDExOTRiMGUzIiwgInNlc3Npb24iOiAiY3liZXItc3R1ZGlvLTIwMjYiIH0="\nENCRYPTION_MODE="AES-256-GCM"\nSESSION_NONCE="4f9b21a80c9e"\nACCESS_STATUS="GRANTED"`
  }
];

const V2Studio = () => {
  const [text, setText] = useState(AI_SAMPLE_PROMPTS[0].text);
  const [history, setHistory] = useState({ past: [], future: [] });
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMono, setIsMono] = useState(false);
  const [showSearchReplace, setShowSearchReplace] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [replaceQuery, setReplaceQuery] = useState('');
  const [isRegex, setIsRegex] = useState(false);
  const [isCaseSensitive, setIsCaseSensitive] = useState(false);
  const [toast, setToast] = useState(null);

  // AI Sample Generator State
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const lastSampleIndexRef = useRef(0);

  // Speech Synthesis state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const synthRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      const updateVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0 && !selectedVoice) {
          const english = availableVoices.find(v => v.lang.startsWith('en')) || availableVoices[0];
          setSelectedVoice(english.name);
        }
      };
      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, [selectedVoice]);

  const showNotification = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // AI Sample Generator Handler with simulated intelligence delay
  const handleGenerateAISample = () => {
    if (isGeneratingAI) return;
    setIsGeneratingAI(true);

    // Pick an index different from the previous one
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * AI_SAMPLE_PROMPTS.length);
    } while (nextIndex === lastSampleIndexRef.current && AI_SAMPLE_PROMPTS.length > 1);

    lastSampleIndexRef.current = nextIndex;
    const selected = AI_SAMPLE_PROMPTS[nextIndex];

    setTimeout(() => {
      updateText(selected.text, `AI Synthesized: ${selected.topic}`);
      setIsGeneratingAI(false);
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#ccff00', '#00f0ff']
      });
    }, 700);
  };

  // History & Text mutation helper
  const updateText = (newText, actionName = 'Transformed') => {
    setHistory(prev => ({
      past: [...prev.past.slice(-20), text],
      future: []
    }));
    setText(newText);
    showNotification(actionName);
  };

  const handleUndo = () => {
    if (history.past.length === 0) return;
    const previous = history.past[history.past.length - 1];
    const newPast = history.past.slice(0, history.past.length - 1);
    setHistory({
      past: newPast,
      future: [text, ...history.future]
    });
    setText(previous);
    showNotification('Undo applied');
  };

  const handleRedo = () => {
    if (history.future.length === 0) return;
    const next = history.future[0];
    const newFuture = history.future.slice(1);
    setHistory({
      past: [...history.past, text],
      future: newFuture
    });
    setText(next);
    showNotification('Redo applied');
  };

  // Copy with Confetti
  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ccff00', '#00f0ff', '#ffffff']
    });
    showNotification('Copied to Clipboard!');
  };

  // Download File
  const handleDownload = (format = 'txt') => {
    if (!text) return;
    let mime = 'text/plain';
    let filename = `text_modifier_${Date.now()}.${format}`;
    let content = text;

    if (format === 'json') {
      mime = 'application/json';
      content = JSON.stringify({ content: text, timestamp: new Date().toISOString() }, null, 2);
    } else if (format === 'md') {
      mime = 'text/markdown';
    }

    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    showNotification(`Downloaded as .${format}`);
  };

  // Speech Handlers
  const handleTogglePlaySpeech = () => {
    if (!('speechSynthesis' in window)) {
      showNotification('Speech Synthesis not supported in this browser.');
      return;
    }
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      return;
    }
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    window.speechSynthesis.cancel();
    if (!text.trim()) {
      showNotification('Nothing to read');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    if (selectedVoice) {
      const v = voices.find(voice => voice.name === selectedVoice);
      if (v) utterance.voice = v;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
    showNotification('Voice Synthesizer Active');
  };

  const handleStopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  // Find & Replace Handler
  const handleExecuteReplace = () => {
    if (!searchQuery) return;
    try {
      let flags = isCaseSensitive ? 'g' : 'gi';
      let regex;
      if (isRegex) {
        regex = new RegExp(searchQuery, flags);
      } else {
        const escaped = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        regex = new RegExp(escaped, flags);
      }

      const matchCount = (text.match(regex) || []).length;
      if (matchCount === 0) {
        showNotification('No matches found');
        return;
      }

      const newText = text.replace(regex, replaceQuery);
      updateText(newText, `Replaced ${matchCount} match${matchCount > 1 ? 'es' : ''}`);
    } catch (err) {
      showNotification('Invalid Regular Expression');
    }
  };

  // ----------------------------------------------------
  // TRANSFORMATION ENGINES
  // ----------------------------------------------------
  const transform = {
    // Case transformations
    upper: () => updateText(text.toUpperCase(), 'Converted to UPPERCASE'),
    lower: () => updateText(text.toLowerCase(), 'Converted to lowercase'),
    title: () => {
      const stopWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'of', 'on', 'or', 'the', 'to', 'via'];
      const res = text.replace(/\w\S*/g, (txt, idx) => {
        const lower = txt.toLowerCase();
        if (idx > 0 && stopWords.includes(lower)) return lower;
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
      });
      updateText(res, 'Converted to Title Case');
    },
    capitalized: () => {
      const res = text.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
      updateText(res, 'Converted to Capitalized Case');
    },
    sentence: () => {
      const res = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
      updateText(res, 'Converted to Sentence case');
    },
    camel: () => {
      const res = text
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        .replace(/^[A-Z]/, c => c.toLowerCase());
      updateText(res, 'Converted to camelCase');
    },
    pascal: () => {
      const res = text
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        .replace(/^[a-z]/, c => c.toUpperCase());
      updateText(res, 'Converted to PascalCase');
    },
    snake: () => {
      const res = text
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s\W]+/g, '_')
        .toLowerCase()
        .replace(/^_+|_+$/g, '');
      updateText(res, 'Converted to snake_case');
    },
    kebab: () => {
      const res = text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s\W]+/g, '-')
        .toLowerCase()
        .replace(/^-+|-+$/g, '');
      updateText(res, 'Converted to kebab-case');
    },
    constant: () => {
      const res = text
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s\W]+/g, '_')
        .toUpperCase()
        .replace(/^_+|_+$/g, '');
      updateText(res, 'Converted to CONSTANT_CASE');
    },
    dot: () => {
      const res = text
        .replace(/([a-z])([A-Z])/g, '$1.$2')
        .replace(/[\s\W]+/g, '.')
        .toLowerCase()
        .replace(/^\.+|\.+$/g, '');
      updateText(res, 'Converted to dot.case');
    },

    // Clean & Sanitize
    removeSpaces: () => {
      const res = text.replace(/[^\S\r\n]+/g, ' ').trim();
      updateText(res, 'Extra Spaces Removed');
    },
    stripBlankLines: () => {
      const res = text.split('\n').filter(line => line.trim().length > 0).join('\n');
      updateText(res, 'Blank Lines Removed');
    },
    trimLines: () => {
      const res = text.split('\n').map(line => line.trim()).join('\n');
      updateText(res, 'Lines Trimmed');
    },
    removeDuplicates: () => {
      const lines = text.split('\n');
      const unique = Array.from(new Set(lines));
      updateText(unique.join('\n'), `Removed ${lines.length - unique.length} Duplicates`);
    },
    stripHtml: () => {
      const res = text.replace(/<[^>]*>?/gm, '');
      updateText(res, 'HTML Tags Stripped');
    },
    sortLinesAZ: () => {
      const res = text.split('\n').sort((a, b) => a.localeCompare(b)).join('\n');
      updateText(res, 'Sorted Lines (A to Z)');
    },
    sortLinesZA: () => {
      const res = text.split('\n').sort((a, b) => b.localeCompare(a)).join('\n');
      updateText(res, 'Sorted Lines (Z to A)');
    },
    addLineNumbers: () => {
      const res = text.split('\n').map((line, idx) => `${idx + 1}. ${line}`).join('\n');
      updateText(res, 'Line Numbers Added');
    },

    // Developer & Encoders
    base64Encode: () => {
      try {
        const res = btoa(unescape(encodeURIComponent(text)));
        updateText(res, 'Base64 Encoded');
      } catch (e) {
        showNotification('Failed to encode Base64');
      }
    },
    base64Decode: () => {
      try {
        const res = decodeURIComponent(escape(atob(text)));
        updateText(res, 'Base64 Decoded');
      } catch (e) {
        showNotification('Invalid Base64 String');
      }
    },
    urlEncode: () => {
      updateText(encodeURIComponent(text), 'URL Encoded');
    },
    urlDecode: () => {
      try {
        updateText(decodeURIComponent(text), 'URL Decoded');
      } catch (e) {
        showNotification('Invalid Encoded URI');
      }
    },
    slugify: () => {
      const res = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      updateText(res, 'Slugified');
    },
    rot13: () => {
      const res = text.replace(/[a-zA-Z]/g, c => {
        const code = c.charCodeAt(0);
        const base = code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + 13) % 26) + base);
      });
      updateText(res, 'ROT13 Applied');
    },
    toBinary: () => {
      const res = text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
      updateText(res, 'Converted to Binary');
    },

    // Creative & Fun
    reverse: () => {
      updateText(text.split('').reverse().join(''), 'Reversed Text');
    },
    invert: () => {
      let res = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        res += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
      }
      updateText(res, 'Inverted Case');
    },
    leet: () => {
      const leetMap = { a: '4', A: '4', e: '3', E: '3', i: '1', I: '1', o: '0', O: '0', s: '5', S: '5', t: '7', T: '7' };
      const res = text.replace(/[aeiostAEIOST]/g, c => leetMap[c] || c);
      updateText(res, 'LeetSpeak (1337) Applied');
    },
    upsideDown: () => {
      const flipMap = {
        a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ',
        k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ',
        u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
        A: '∀', B: 'ᗺ', C: 'Ɔ', D: 'ᗡ', E: 'Ǝ', F: 'Ⅎ', G: '⅁', H: 'H', I: 'I', J: 'ſ',
        K: 'ʞ', L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Ὁ', R: 'ᴚ', S: 'S', T: '⊥',
        U: '∩', V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z',
        '?': '¿', '!': '¡', '.': '˙', ',': "'", '(': ')', ')': '(', '[': ']', ']': '['
      };
      const res = text.split('').map(c => flipMap[c] || c).reverse().join('');
      updateText(res, 'Flipped Upside Down');
    }
  };

  // ----------------------------------------------------
  // LINGUISTIC TELEMETRY & STATS
  // ----------------------------------------------------
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const charCount = text.length;
  const charNoSpaces = text.replace(/\s+/g, '').length;
  const sentenceCount = text.trim() ? (text.match(/[\w|)][.!?]+(\s|$)/g) || []).length || 1 : 0;
  const paragraphCount = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;

  // Reading & Speaking times
  const readingTimeMin = (wordCount / 200).toFixed(1);
  const speakingTimeMin = (wordCount / 130).toFixed(1);

  // Readability estimate (Flesch Reading Ease)
  const syllables = words.reduce((acc, word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return acc + 1;
    word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
    word = word.replace(/^y/, '');
    const syl = word.match(/[aeiouy]{1,2}/g);
    return acc + (syl ? syl.length : 1);
  }, 0);

  let readingLevel = 'Beginner';
  if (wordCount > 5 && sentenceCount > 0) {
    const flesch = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllables / wordCount);
    if (flesch >= 80) readingLevel = 'Very Easy';
    else if (flesch >= 60) readingLevel = 'Standard';
    else if (flesch >= 40) readingLevel = 'Advanced';
    else readingLevel = 'Scholarly';
  }

  // Transformation catalog
  const toolCategories = [
    { id: 'all', label: 'All Tools' },
    { id: 'case', label: 'Case Studio' },
    { id: 'clean', label: 'Clean & Sanitize' },
    { id: 'developer', label: 'Developer & Code' },
    { id: 'creative', label: 'Creative & Fun' }
  ];

  const tools = [
    // Case
    { id: 'upper', cat: 'case', title: 'UPPERCASE', desc: 'All caps transformation', action: transform.upper },
    { id: 'lower', cat: 'case', title: 'lowercase', desc: 'All lower letters', action: transform.lower },
    { id: 'title', cat: 'case', title: 'Title Case', desc: 'Capitalizes major header words', action: transform.title },
    { id: 'capitalized', cat: 'case', title: 'Capitalized Case', desc: 'Capitalizes every single word', action: transform.capitalized },
    { id: 'sentence', cat: 'case', title: 'Sentence case', desc: 'Capitalizes the first letter of sentences', action: transform.sentence },
    { id: 'camel', cat: 'case', title: 'camelCase', desc: 'Ideal for variable naming in JS/TS', action: transform.camel },
    { id: 'pascal', cat: 'case', title: 'PascalCase', desc: 'Ideal for classes and React components', action: transform.pascal },
    { id: 'kebab', cat: 'case', title: 'kebab-case', desc: 'Hyphen-separated URL & CSS style', action: transform.kebab },
    { id: 'snake', cat: 'case', title: 'snake_case', desc: 'Underscore-separated Python style', action: transform.snake },
    { id: 'constant', cat: 'case', title: 'CONSTANT_CASE', desc: 'ENV and config constant keys', action: transform.constant },
    { id: 'dot', cat: 'case', title: 'dot.case', desc: 'Period-separated package naming', action: transform.dot },

    // Clean
    { id: 'removeSpaces', cat: 'clean', title: 'Remove Extra Spaces', desc: 'Collapses redundant whitespace', action: transform.removeSpaces },
    { id: 'stripBlank', cat: 'clean', title: 'Strip Blank Lines', desc: 'Removes empty paragraphs and returns', action: transform.stripBlankLines },
    { id: 'trimLines', cat: 'clean', title: 'Trim Line Ends', desc: 'Cleans whitespace from left and right', action: transform.trimLines },
    { id: 'removeDupes', cat: 'clean', title: 'Deduplicate Lines', desc: 'Removes identical repeat lines', action: transform.removeDuplicates },
    { id: 'stripHtml', cat: 'clean', title: 'Strip HTML Tags', desc: 'Removes all HTML/XML elements', action: transform.stripHtml },
    { id: 'sortAZ', cat: 'clean', title: 'Sort Lines A → Z', desc: 'Ascending alphabetical order', action: transform.sortAZ },
    { id: 'sortZA', cat: 'clean', title: 'Sort Lines Z → A', desc: 'Descending alphabetical order', action: transform.sortZA },
    { id: 'lineNums', cat: 'clean', title: 'Add Line Numbers', desc: 'Prefixes ordered 1, 2, 3 indices', action: transform.addLineNumbers },

    // Developer
    { id: 'slugify', cat: 'developer', title: 'Slugify (SEO)', desc: 'Clean SEO friendly url slug', action: transform.slugify },
    { id: 'base64Enc', cat: 'developer', title: 'Base64 Encode', desc: 'Encodes text into ASCII Base64', action: transform.base64Encode },
    { id: 'base64Dec', cat: 'developer', title: 'Base64 Decode', desc: 'Decodes Base64 into raw text', action: transform.base64Decode },
    { id: 'urlEnc', cat: 'developer', title: 'URL Encode', desc: 'Encodes characters for URI query', action: transform.urlEncode },
    { id: 'urlDec', cat: 'developer', title: 'URL Decode', desc: 'Decodes percent-encoded URIs', action: transform.urlDecode },
    { id: 'binary', cat: 'developer', title: 'Binary 0101', desc: 'Converts text into 8-bit binary', action: transform.toBinary },
    { id: 'rot13', cat: 'developer', title: 'ROT13 Cipher', desc: 'Caesar 13-character substitution', action: transform.rot13 },

    // Creative
    { id: 'reverse', cat: 'creative', title: 'Reverse Characters', desc: 'Inverts entire string direction', action: transform.reverse },
    { id: 'invert', cat: 'creative', title: 'Invert Case (tOgGlE)', desc: 'Flips upper to lower and vice versa', action: transform.invert },
    { id: 'leet', cat: 'creative', title: 'LeetSpeak (1337)', desc: 'Replaces letters with numbers', action: transform.leet },
    { id: 'upsideDown', cat: 'creative', title: 'Upside Down (uʍop)', desc: 'Flips text vertically', action: transform.upsideDown }
  ];

  const filteredTools = activeCategory === 'all'
    ? tools
    : tools.filter(t => t.cat === activeCategory);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 6rem 1.5rem', position: 'relative', zIndex: 2 }}>
      
      {/* Toast Alert Notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '24px',
          zIndex: 99999,
          backgroundColor: 'var(--tr-bg-elevated)',
          color: 'var(--tr-neon)',
          border: '1px solid var(--tr-neon)',
          borderRadius: '9999px',
          padding: '10px 20px',
          boxShadow: '0 10px 30px var(--tr-neon-glow)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 700,
          fontSize: '0.85rem',
          animation: 'fadeIn 0.2s ease'
        }}>
          <CheckCheck size={16} />
          <span>{toast}</span>
        </div>
      )}

      {/* ========================================================
          1. MAIN EDITOR CANVAS
         ======================================================== */}
      <div className="trionn-card trionn-card-glow" style={{ marginBottom: '2rem', overflow: 'hidden' }}>
        
        {/* Editor Top Control Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '14px 20px',
          borderBottom: '1px solid var(--tr-border)',
          backgroundColor: 'rgba(255,255,255,0.015)'
        }}>
          {/* Left Actions: Undo, Redo, AI Sample, Clear */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleUndo}
              disabled={history.past.length === 0}
              className="trionn-btn-ghost"
              title="Undo last change"
              style={{ padding: '7px 12px' }}
            >
              <RotateCcw size={14} />
              <span style={{ fontSize: '0.78rem' }}>Undo</span>
            </button>
            <button
              onClick={handleRedo}
              disabled={history.future.length === 0}
              className="trionn-btn-ghost"
              title="Redo change"
              style={{ padding: '7px 12px' }}
            >
              <RotateCw size={14} />
              <span style={{ fontSize: '0.78rem' }}>Redo</span>
            </button>
            
            {/* AI Sample Button with Loading Animation */}
            <button
              onClick={handleGenerateAISample}
              disabled={isGeneratingAI}
              className="trionn-btn-ghost"
              title="Generate new AI sample text"
              style={{
                padding: '7px 14px',
                borderColor: isGeneratingAI ? 'var(--tr-neon)' : 'rgba(204, 255, 0, 0.4)',
                backgroundColor: isGeneratingAI ? 'rgba(204, 255, 0, 0.15)' : 'rgba(204, 255, 0, 0.05)',
                color: 'var(--tr-neon)'
              }}
            >
              {isGeneratingAI ? (
                <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
              ) : (
                <Sparkles size={14} />
              )}
              <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>
                {isGeneratingAI ? 'Synthesizing...' : 'AI Sample'}
              </span>
            </button>

            <button
              onClick={() => updateText('', 'Editor Cleared')}
              disabled={!text}
              className="trionn-btn-ghost"
              title="Clear entire text"
              style={{ padding: '7px 12px', color: '#ff5555' }}
            >
              <Trash2 size={14} />
              <span style={{ fontSize: '0.78rem' }}>Clear</span>
            </button>
          </div>

          {/* Right Actions: Font Mono, Find/Replace, Speech, Copy, Download */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Monospace Toggle */}
            <button
              onClick={() => setIsMono(prev => !prev)}
              className="trionn-btn-ghost"
              title="Toggle Monospace / Sans font"
              style={{
                padding: '7px 12px',
                color: isMono ? 'var(--tr-neon)' : 'inherit',
                borderColor: isMono ? 'var(--tr-neon)' : 'var(--tr-border)'
              }}
            >
              <Type size={14} />
              <span style={{ fontSize: '0.78rem' }}>{isMono ? 'Mono' : 'Sans'}</span>
            </button>

            {/* Find & Replace Toggle */}
            <button
              onClick={() => setShowSearchReplace(prev => !prev)}
              className="trionn-btn-ghost"
              title="Toggle Find & Replace HUD"
              style={{
                padding: '7px 12px',
                color: showSearchReplace ? 'var(--tr-neon)' : 'inherit',
                borderColor: showSearchReplace ? 'var(--tr-neon)' : 'var(--tr-border)'
              }}
            >
              <Search size={14} />
              <span style={{ fontSize: '0.78rem' }}>Find & Replace</span>
            </button>

            {/* Speech Synthesizer Control */}
            <button
              onClick={handleTogglePlaySpeech}
              className="trionn-btn-ghost"
              title="Voice Synthesizer"
              style={{
                padding: '7px 12px',
                color: isSpeaking ? 'var(--tr-neon)' : 'inherit',
                borderColor: isSpeaking ? 'var(--tr-neon)' : 'var(--tr-border)'
              }}
            >
              {isSpeaking ? (isPaused ? <Play size={14} /> : <Pause size={14} />) : <Volume2 size={14} />}
              <span style={{ fontSize: '0.78rem' }}>
                {isSpeaking ? (isPaused ? 'Resume' : 'Pause') : 'Read Aloud'}
              </span>
            </button>
            {isSpeaking && (
              <button
                onClick={handleStopSpeech}
                className="trionn-btn-ghost"
                title="Stop Reading"
                style={{ padding: '7px 10px', color: '#ff5555' }}
              >
                <Square size={13} />
              </button>
            )}

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              disabled={!text}
              className="trionn-btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.8rem' }}
            >
              <Copy size={14} />
              <span>Copy</span>
            </button>

            {/* Download Dropdown */}
            <div style={{ display: 'flex', gap: '4px' }}>
              <button
                onClick={() => handleDownload('txt')}
                disabled={!text}
                className="trionn-btn-ghost"
                title="Download as Plain Text (.txt)"
                style={{ padding: '8px 12px' }}
              >
                <Download size={14} />
                <span style={{ fontSize: '0.78rem' }}>.TXT</span>
              </button>
              <button
                onClick={() => handleDownload('md')}
                disabled={!text}
                className="trionn-btn-ghost"
                title="Download as Markdown (.md)"
                style={{ padding: '8px 12px' }}
              >
                <span style={{ fontSize: '0.78rem' }}>.MD</span>
              </button>
            </div>
          </div>
        </div>

        {/* Find & Replace Drawer */}
        {showSearchReplace && (
          <div style={{
            padding: '16px 20px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            borderBottom: '1px solid var(--tr-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--tr-input-bg)', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--tr-border)' }}>
              <Search size={14} style={{ color: 'var(--tr-text-secondary)' }} />
              <input
                type="text"
                placeholder="Find text..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--tr-text-primary)', fontSize: '0.85rem', width: '100%' }}
              />
            </div>

            <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--tr-input-bg)', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--tr-border)' }}>
              <Replace size={14} style={{ color: 'var(--tr-text-secondary)' }} />
              <input
                type="text"
                placeholder="Replace with..."
                value={replaceQuery}
                onChange={e => setReplaceQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--tr-text-primary)', fontSize: '0.85rem', width: '100%' }}
              />
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--tr-text-secondary)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={isCaseSensitive}
                onChange={e => setIsCaseSensitive(e.target.checked)}
              />
              Match Case
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--tr-text-secondary)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={isRegex}
                onChange={e => setIsRegex(e.target.checked)}
              />
              Regex
            </label>

            <button
              onClick={() => handleExecuteReplace()}
              disabled={!searchQuery}
              className="trionn-btn-primary"
              style={{ padding: '6px 16px', fontSize: '0.78rem' }}
            >
              Replace All
            </button>
          </div>
        )}

        {/* Text Area */}
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type or paste your text here to transform, format, analyze, or clean..."
          className={`trionn-textarea ${isMono ? 'is-mono' : ''}`}
          rows={10}
        />

        {/* Editor Bottom Status Bar */}
        <div style={{
          padding: '10px 20px',
          borderTop: '1px solid var(--tr-border)',
          backgroundColor: 'var(--tr-status-bar-bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '0.75rem',
          color: 'var(--tr-text-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Words: <strong style={{ color: 'var(--tr-text-primary)' }}>{wordCount}</strong></span>
            <span>Characters: <strong style={{ color: 'var(--tr-text-primary)' }}>{charCount}</strong></span>
            <span>Est. Reading: <strong style={{ color: 'var(--tr-neon)' }}>{readingTimeMin} min</strong></span>
          </div>
          <div>
            <span>Processing Engine: <strong style={{ color: 'var(--tr-cyan)' }}>Client-side Zero Latency</strong></span>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. REAL-TIME TELEMETRY BENTO GRID (HUD STATS)
         ======================================================== */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '12px',
        marginBottom: '2.5rem'
      }}>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Word Count</span>
          <span className="trionn-stat-value">{wordCount.toLocaleString()}</span>
        </div>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Characters (All)</span>
          <span className="trionn-stat-value">{charCount.toLocaleString()}</span>
        </div>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Chars (No Spaces)</span>
          <span className="trionn-stat-value">{charNoSpaces.toLocaleString()}</span>
        </div>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Sentences</span>
          <span className="trionn-stat-value">{sentenceCount}</span>
        </div>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Paragraphs</span>
          <span className="trionn-stat-value">{paragraphCount}</span>
        </div>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Reading Time</span>
          <span className="trionn-stat-value" style={{ color: 'var(--tr-neon)' }}>{readingTimeMin}m</span>
        </div>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Speaking Time</span>
          <span className="trionn-stat-value" style={{ color: 'var(--tr-cyan)' }}>{speakingTimeMin}m</span>
        </div>
        <div className="trionn-stat-item">
          <span className="trionn-stat-label">Reading Level</span>
          <span className="trionn-stat-value" style={{ fontSize: '1.25rem', color: 'var(--tr-purple)' }}>{readingLevel}</span>
        </div>
      </div>

      {/* ========================================================
          3. TRANSFORMATION ARSENAL (BENTO CATEGORIES)
         ======================================================== */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '1.2rem'
        }}>
          <div>
            <h2 className="trionn-font-display" style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--tr-text-primary)',
              margin: 0
            }}>
              TRANSFORMATION MATRIX
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--tr-text-secondary)' }}>
              Select a category to filter through our suite of 25+ precision modifiers.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            padding: '4px',
            borderRadius: '9999px',
            border: '1px solid var(--tr-border)'
          }}>
            {toolCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeCategory === cat.id ? 'var(--tr-neon)' : 'transparent',
                  color: activeCategory === cat.id ? '#000' : 'var(--tr-text-secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '12px'
        }}>
          {filteredTools.map(tool => (
            <button
              key={tool.id}
              onClick={tool.action}
              disabled={!text}
              className="trionn-action-btn"
            >
              <div className="trionn-action-title">
                <span>{tool.title}</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>→</span>
              </div>
              <div className="trionn-action-desc">
                {tool.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default V2Studio;
