# Text Modifier 2.0 // Cybernetic Typography Studio

> A high-performance text manipulation and typography studio. Featuring dual-engine version switching, real-time linguistic telemetry, AI voice synthesis, and 25+ precision transformations.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://nk-text-modifier.vercel.app/)
[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)

---

## ⚡ What's New in 2.0 (Cyber Pro)

* **Dual-Version Switcher:** Seamlessly toggle between **V2 Cyber Pro** and **V1 Classic (Original 2023 Bootstrap)** from anywhere in the app with zero page reload.
* **Cyber-Luxury Aesthetic:** Obsidian surfaces (`#070709`), electric neon lime accents (`#ccff00`), glowing glassmorphism cards (`backdrop-filter: blur(20px)`), and custom cursor follower halos.
* **Editorial Typography:** Styled with Google's **Syne**, **Plus Jakarta Sans**, and **JetBrains Mono**.
* **AI Sample Generation:** Synthesize realistic text samples across product strategy, dirty logs, developer configs, and creative narratives with simulated neural generation.
* **25+ Text Transformation Engines:** Categorized into Case Studio, Clean & Sanitize, Developer Encoders, and Creative & Fun.
* **Real-time Linguistic Telemetry (HUD Bento Grid):** Live word count, characters (with & without spaces), sentence count, paragraph count, estimated reading time, estimated speaking time, and Flesch reading ease estimation.
* **AI Voice Synthesizer:** Browser-native Web Speech API reader with Play, Pause, and Voice selection.
* **Regex Find & Replace:** In-app search drawer with case matching and live match counters.
* **Undo / Redo Stack:** Multi-step history stack so you never lose your edits.
* **One-Click Export:** Copy with celebratory confetti, download as `.txt`, `.md`, or structured `.json`.

---

## 🔀 Version Switcher Architecture

| Feature | V1 Classic (2023) | V2 Cyber Pro (2026) |
|---|---|---|
| **Aesthetic** | Bootstrap 5 clean layout | Cyber-luxury dark glass |
| **Theme System** | Body style mutator | CSS Variables + Cyber Dark / High Contrast Light |
| **Tool Count** | 7 basic converters | 25+ Precision tools |
| **Developer Encoders** | None | Base64, URL, Slugify, ROT13, Binary |
| **Linguistic Telemetry** | Word & Character count | 8-metric Bento HUD with Readability index |
| **AI Sample Generation** | None | Multi-domain neural prompt synthesizer |
| **Voice Playback** | None | Web Speech API audio synthesizer |
| **Undo / Redo** | None | Multi-level history buffer |
| **Search & Replace** | None | Dynamic Find & Replace with Regex |

---

## 🛠️ Complete Transformation Arsenal

### 1. Case Studio
* **UPPERCASE:** All characters converted to uppercase.
* **lowercase:** All characters converted to lowercase.
* **Title Case:** Capitalizes major words while respecting stop words (`a`, `the`, `in`, `to`, etc.).
* **Capitalized Case:** Capitalizes the first letter of each word.
* **Sentence case:** Capitalizes only the first letter of sentences.
* **camelCase:** Standard variable formatting (`myVariableName`).
* **PascalCase:** Class and React component formatting (`MyComponent`).
* **kebab-case:** Hyphen-delimited URLs and CSS styles (`my-slug-name`).
* **snake_case:** Underscore-delimited Python styles (`my_variable_name`).
* **CONSTANT_CASE:** Uppercase config tokens (`DATABASE_URL`).
* **dot.case:** Period-delimited namespace formats (`app.config.path`).

### 2. Clean & Sanitize
* **Remove Extra Spaces:** Strips repeated whitespace and tabs.
* **Strip Blank Lines:** Removes unnecessary blank paragraphs.
* **Trim Line Ends:** Cleans leading and trailing whitespace from every line.
* **Deduplicate Lines:** Eliminates repeated lines automatically.
* **Strip HTML Tags:** Cleans HTML/XML tags from pasted web text.
* **Sort Lines A → Z:** Ascending alphabetical sort.
* **Sort Lines Z → A:** Descending alphabetical sort.
* **Add Line Numbers:** Prefixes each row with `1. `, `2. `, etc.

### 3. Developer & Encoders
* **Slugify (SEO):** Transforms sentences into clean, URL-safe slugs.
* **Base64 Encode & Decode:** ASCII Base64 encryption/decryption.
* **URL Encode & Decode:** URI percent-encoding for query params.
* **Binary 0101:** Converts text into 8-bit binary representation.
* **ROT13 Cipher:** Classic Caesar 13-character substitution.

### 4. Creative & Fun
* **Reverse Characters:** Reverses entire string order.
* **Invert Case:** Toggles uppercase to lowercase and vice versa.
* **LeetSpeak (1337):** Replaces characters with numbers.
* **Upside Down (uʍop):** Flips typography vertically.

---

## 💻 Tech Stack

* **Frontend:** React 18
* **Routing:** React Router v6
* **Icons:** Lucide React
* **Micro-interactions:** Canvas Confetti
* **Typography:** Syne, Plus Jakarta Sans, JetBrains Mono
* **Styling:** Modular CSS Variables, Glassmorphism, CSS Grid / Flexbox
* **Hosting:** Vercel

---

## 🚀 Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/Nikhil15r/Text-Modifier-App.git
cd Text-Modifier-App

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Visit `http://localhost:3000` to explore the app.

---

## 👨‍💻 Author

* **Developer:** [Nikhil](https://github.com/Nikhil15r)
