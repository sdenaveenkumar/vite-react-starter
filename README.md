# ⚡ Vite React Starter

A modern, high-performance starter template powered by **React 19**, **Vite 8**, and **Tailwind CSS v4**. Includes built-in dark/light mode toggling, Lucide icons, and an interactive quote widget.

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
npm install
npm run dev
```

Your app will be live at: **[http://localhost:5173](http://localhost:5173)**

---

## ✨ Features

- ⚡ **Vite 8** – Lightning-fast Hot Module Replacement (HMR) and instant cold starts.
- ⚛️ **React 19** – Powered by the latest React features and optimizations.
- 🎨 **Tailwind CSS v4** – Zero-configuration styling using `@tailwindcss/vite`.
- 🌓 **Dark / Light Theme** – Smooth animated theme switching with custom gradient backgrounds and grid patterns.
- 💬 **Live Quote Widget** – Dynamic quote generator fetched asynchronously from DummyJSON with fallback handling.
- 💎 **Lucide Icons** – Clean, modern, customizable SVG icon set.
- 🚀 **Oxlint** – Ultra-fast JavaScript/React linter pre-configured.

---

## 🛠️ Tech Stack

| Technology | Version | Description |
| :--- | :--- | :--- |
| [React](https://react.dev/) | `^19.2.8` | Core UI library |
| [Vite](https://vite.dev/) | `^8.2.0` | Next-generation frontend build tool |
| [Tailwind CSS](https://tailwindcss.com/) | `^4.0.0` | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | `^0.475.0` | Icon set for modern web apps |
| [Oxlint](https://oxc.rs/) | `^1.75.0` | High-performance linter |

---

## 📁 Project Structure

```text
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets & media
│   ├── App.jsx          # Main application dashboard component
│   ├── index.css        # Tailwind CSS v4 import directive
│   └── main.jsx         # React application entry point
├── .oxlintrc.json       # Oxlint configuration
├── index.html           # HTML entry point
├── package.json         # Scripts and project dependencies
├── vite.config.js       # Vite configuration with React & Tailwind plugins
└── README.md            # Project documentation
```

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts the Vite development server with HMR |
| `build` | `npm run build` | Compiles and optimizes assets for production into `dist/` |
| `preview` | `npm run preview` | Locally previews the production build |
| `lint` | `npm run lint` | Runs Oxlint to check code quality |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
