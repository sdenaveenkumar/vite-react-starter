<div align="center">

# ⚡ sdenaveenkumar React Starter

### The next-generation starter template and scaffolding tool for modern **React 19** and **Tailwind CSS v4** applications (JavaScript & TypeScript).

[![npm version](https://img.shields.io/npm/v/@sdenaveenkumar/create-react.svg?style=for-the-badge&color=0284c7&labelColor=0f172a)](https://www.npmjs.com/package/@sdenaveenkumar/create-react)
[![npm downloads](https://img.shields.io/npm/dt/@sdenaveenkumar/create-react.svg?style=for-the-badge&color=10b981&labelColor=0f172a)](https://www.npmjs.com/package/@sdenaveenkumar/create-react)
[![license](https://img.shields.io/npm/l/@sdenaveenkumar/create-react.svg?style=for-the-badge&color=6366f1&labelColor=0f172a)](https://github.com/sdenaveenkumar/vite-react-starter/blob/main/LICENSE)
[![node version](https://img.shields.io/node/v/@sdenaveenkumar/create-react.svg?style=for-the-badge&color=f59e0b&labelColor=0f172a)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&labelColor=0f172a)](https://github.com/sdenaveenkumar/vite-react-starter/pulls)

<br />

<p align="center">
  <a href="#-quick-start"><b>Quick Start</b></a> •
  <a href="#-typescript-support"><b>TypeScript</b></a> •
  <a href="#-key-features"><b>Key Features</b></a> •
  <a href="#-tech-stack"><b>Tech Stack</b></a> •
  <a href="#-project-structure"><b>Structure</b></a> •
  <a href="#-deploying-to-production"><b>Deploying</b></a> •
  <a href="#-license"><b>License</b></a>
</p>

</div>

---

## ⚡ Quick Start (Scaffold in Seconds)

You can create, install dependencies, and launch your dev server in **one single command**:

<details open>
<summary><b>📦 npm (Recommended)</b></summary>

```bash
# Standard JavaScript (Default)
npm create @sdenaveenkumar/react my-app

# TypeScript Variant (.tsx + tsconfig.json)
npm create @sdenaveenkumar/react my-app --ts
```

*Interactive wizard (prompts for project name):*
```bash
npm create @sdenaveenkumar/react
```

</details>

<details>
<summary><b>⚡ npx</b></summary>

```bash
# JavaScript
npx @sdenaveenkumar/create-react my-app

# TypeScript
npx @sdenaveenkumar/create-react my-app --ts
```

</details>

<details>
<summary><b>🍍 pnpm</b></summary>

```bash
# JavaScript
pnpm create @sdenaveenkumar/react my-app

# TypeScript
pnpm create @sdenaveenkumar/react my-app --ts
```

</details>

<details>
<summary><b>🧶 yarn</b></summary>

```bash
# JavaScript
yarn create @sdenaveenkumar/react my-app

# TypeScript
yarn create @sdenaveenkumar/react my-app --ts
```

</details>

<details>
<summary><b>🥟 bun</b></summary>

```bash
# JavaScript
bun create @sdenaveenkumar/react my-app

# TypeScript
bun create @sdenaveenkumar/react my-app --ts
```

</details>

<details>
<summary><b>🌱 degit</b></summary>

```bash
npx degit sdenaveenkumar/vite-react-starter my-app
```

</details>

---

## 🖥️ Live Terminal Scaffolding Demo

<details open>
<summary><b>🖥️ Terminal Output Preview (Click to toggle)</b></summary>

```text
  ┌────────────────────────────────────────────────────────────┐
  │                                                            │
  │   ⚡ SDENAVEENKUMAR REACT STARTER v2.1.1                    │
  │   React 19 • Vite 8 • Tailwind CSS v4 • ESLint             │
  │                                                            │
  └────────────────────────────────────────────────────────────┘

  ┌  Scaffolding my-app [JavaScript]
  │
  │  ✔ Downloaded latest template repository
  │  ✔ Configured JavaScript (.jsx, cn utility)
  │  ✔ Initialized clean Git repository
  │  [████████████████░░░░]  80%  Installing dependencies with npm
  │  ✔ Installing dependencies with npm (100%)
  │
  └  ✔ Project created at /Users/you/my-app

  🚀 Launching development server on http://localhost:5173 ...

  VITE v8.2.2  ready in 118 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

</details>

---

## 🟦 TypeScript Support

To scaffold with complete TypeScript type safety:

```bash
npm create @sdenaveenkumar/react my-app --ts
```

### What gets configured with `--ts`:
- ✅ `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json` (Vite 8 strict mode configuration)
- ✅ `src/vite-env.d.ts` (Vite client types)
- ✅ `src/main.tsx` & `src/App.tsx` (fully typed React 19 components with interfaces)
- ✅ `src/lib/utils.ts` (strongly-typed `cn()` helper with `ClassValue` types)
- ✅ Pre-configured `typescript` and `@types/node`

---

## ✨ Key Features

| Feature | Highlight |
| :--- | :--- |
| 🚀 **Zero-Friction Bootstrap** | Automatically downloads, initializes Git, installs dependencies, and boots the local dev server. |
| 🌐 **Auto-Open Browser** | Pre-configured `server: { open: true }` launches `http://localhost:5173` in your default browser instantly. |
| 🟦 **TypeScript & JavaScript** | Seamless 1-flag switching (`--ts` / `--js`) with strict type checking. |
| ⚛️ **React 19 Ready** | Built on React 19 with latest compiler optimizations and clean Action paradigms. |
| ⚡ **Vite 8 Powered** | Instant server starts, sub-millisecond Hot Module Replacement (HMR), and optimized rollup builds. |
| 🎨 **Tailwind CSS v4** | Powered by the official `@tailwindcss/vite` plugin. Zero config file overhead. |
| 🧩 **`cn()` Utility Helper** | Pre-configured `clsx` + `tailwind-merge` helper for clean dynamic classes (shadcn/ui ready). |
| 🌓 **Day & Night Themes** | Pre-built responsive theme system with smooth background gradients and grid patterns. |
| 🔍 **ESLint 10 Flat Config** | Modern `eslint.config.js` supporting both JS/JSX and TS/TSX. |
| 🛠️ **VS Code Ready** | Includes recommended extensions and format-on-save settings. |

---

## 🛠️ The Modern Tech Stack

```text
React 19.x ──────> Declarative UI Component Runtime
Vite 8.x ────────> Next-Generation Build Engine & Dev Server
Tailwind 4.x ────> High-Performance Utility-First CSS Engine
ESLint 10.x ─────> Standard Code Quality & Hook Rule Linter
Lucide Icons ────> Feather-Light Modern SVG Vector System
clsx & twMerge ──> Class Name Merging Utilities
```

---

## 📁 Scaffolded Project Structure

```text
my-app/
├── .vscode/                # VS Code extension recommendations & editor settings
├── public/                 # Static public assets (favicon.svg)
├── src/
│   ├── assets/             # Project assets
│   ├── lib/
│   │   └── utils.js        # cn() class merge helper (or utils.ts in TypeScript)
│   ├── App.jsx             # Main interactive dashboard component (or App.tsx)
│   ├── index.css           # Tailwind CSS v4 import directive
│   └── main.jsx            # React 19 root DOM mount point (or main.tsx)
├── eslint.config.js        # Modern ESLint Flat Config (JS/TS + React Hooks)
├── .gitignore              # Production git ignore configuration
├── index.html              # HTML5 entry document
├── package.json            # Scripts, metadata, and dependencies
└── vite.config.js          # Vite configuration with React & Tailwind plugins
```

---

## 📜 Available Scripts

Inside your project folder, you can run:

<details open>
<summary><b>🛠️ Available Commands (Click to toggle)</b></summary>

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server at `http://localhost:5173` |
| `npm run build` | Compiles optimized, minified production bundle into `dist/` |
| `npm run preview` | Spins up a local static server to preview the `dist/` build |
| `npm run lint` | Runs ESLint checks across all project files |

</details>

---

## 🚀 Deploying to Production

<details>
<summary><b>▲ Deploy to Vercel</b></summary>

1. Push your repository to GitHub.
2. Import your repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect **Vite** with Build Command `npm run build` and Output Directory `dist`.
4. Click **Deploy**.

</details>

<details>
<summary><b>🌐 Deploy to Netlify</b></summary>

1. Connect your repository on [Netlify](https://netlify.com).
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`
4. Click **Deploy Site**.

</details>

<details>
<summary><b>🐙 Deploy to GitHub Pages</b></summary>

Set `base: '/<REPO_NAME>/'` in `vite.config.js` and deploy using GitHub Actions with `actions/upload-pages-artifact`.

</details>

---

## 🤝 Contributing

Contributions, feature requests, and issue reports are warmly welcome!

- **GitHub Repository**: [https://github.com/sdenaveenkumar/vite-react-starter](https://github.com/sdenaveenkumar/vite-react-starter)
- **Report an Issue**: [Issues Tracker](https://github.com/sdenaveenkumar/vite-react-starter/issues)

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](https://github.com/sdenaveenkumar/vite-react-starter/blob/main/LICENSE) for details.

<br />

<div align="center">
  <sub>Maintained with ❤️ by <a href="https://github.com/sdenaveenkumar"><b>Naveen Kumar</b></a></sub>
</div>
