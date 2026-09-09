# ⚡ Vite React Starter

A modern, high-performance starter template powered by **React 19**, **Vite 8**, and **Tailwind CSS v4**. Includes built-in dark/light mode toggling, Lucide icons, ESLint 10 Flat Config, pre-configured `cn()` class merge utility, and VS Code settings.

---

## 🚀 Quick Start (Scaffold in Seconds)

You can create a new project instantly. Choose your preferred package manager:

<details open>
<summary><b>📦 npm (Recommended)</b></summary>

```bash
npm create @sdenaveenkumar/react my-app
```

*Or interactive prompt mode:*
```bash
npm create @sdenaveenkumar/react
```

</details>

<details>
<summary><b>⚡ npx</b></summary>

```bash
npx @sdenaveenkumar/create-react my-app
```

</details>

<details>
<summary><b>🌱 degit</b></summary>

```bash
npx degit sdenaveenkumar/vite-react-starter my-app
```

</details>

<details>
<summary><b>🧶 yarn</b></summary>

```bash
yarn create @sdenaveenkumar/react my-app
```

</details>

<details>
<summary><b>🍍 pnpm</b></summary>

```bash
pnpm create @sdenaveenkumar/react my-app
```

</details>

<details>
<summary><b>🥟 bun</b></summary>

```bash
bun create @sdenaveenkumar/react my-app
```

</details>

---

### Next Steps

```bash
cd my-app
npm run dev
```

Your app will open automatically at: **[http://localhost:5173](http://localhost:5173)**

---

## ✨ Features

- ⚡ **Vite 8** – Lightning-fast Hot Module Replacement (HMR) and instant cold starts with browser auto-opening.
- ⚛️ **React 19** – Powered by the latest React features and compiler optimizations.
- 🎨 **Tailwind CSS v4** – Zero-configuration styling using `@tailwindcss/vite`.
- 🧩 **`cn()` Utility Helper** – Pre-configured `clsx` and `tailwind-merge` helper for clean dynamic classes.
- 🌓 **Dark / Light Theme** – Smooth animated theme switching with custom gradient backgrounds and grid patterns.
- 💬 **Live Quote Widget** – Dynamic quote generator fetched asynchronously from DummyJSON with fallback handling.
- 💎 **Lucide Icons** – Clean, modern, customizable SVG icon set.
- 🔍 **ESLint 10** – Modern Flat Config with React Hooks & React Refresh rules.
- 🛠️ **VS Code Ready** – Pre-configured extension recommendations and format-on-save settings.

---

## 🛠️ Tech Stack

| Technology | Version | Description |
| :--- | :--- | :--- |
| [React](https://react.dev/) | `^19.2.8` | Core UI library |
| [Vite](https://vite.dev/) | `^8.2.0` | Next-generation frontend build tool |
| [Tailwind CSS](https://tailwindcss.com/) | `^4.0.0` | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | `^0.475.0` | Icon set for modern web apps |
| [ESLint](https://eslint.org/) | `^10.0.0` | Standard JavaScript & React linter (Flat Config) |
| [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) | `^2.1.1` / `^3.0.1` | Class name combination utilities |

---

## 📁 Project Structure

```text
├── .vscode/             # VS Code extension recommendations & editor settings
├── public/              # Static assets (favicon.svg)
├── src/
│   ├── assets/          # Project assets & media
│   ├── lib/
│   │   └── utils.js     # cn() class merge helper (clsx + tailwind-merge)
│   ├── App.jsx          # Main application dashboard component
│   ├── index.css        # Tailwind CSS v4 import directive
│   └── main.jsx         # React application entry point
├── eslint.config.js     # ESLint Flat Configuration
├── index.html           # HTML entry point
├── package.json         # Scripts and project dependencies
├── vite.config.js       # Vite configuration with React & Tailwind plugins
└── README.md            # Project documentation
```

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts the Vite development server with HMR and opens browser |
| `build` | `npm run build` | Compiles and optimizes assets for production into `dist/` |
| `preview` | `npm run preview` | Locally previews the production build |
| `lint` | `npm run lint` | Runs ESLint checks across the codebase |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
