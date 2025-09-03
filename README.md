# 🚀 Client Template – Vite + Vue 3 + DaisyUI

This template helps you kickstart modern **Frontend** development with:

* ⚡ [Vite](https://vite.dev/) – super-fast build & dev server
* 🖖 [Vue 3](https://vuejs.org/) – the progressive framework for UI
* 🧭 [Vue Router](https://router.vuejs.org/) – official Vue routing
* 📦 [Pinia](https://pinia.vuejs.org/) – official Vue state management
* 🎨 [Tailwind CSS](https://tailwindcss.com/) – utility-first CSS framework
* 🌼 [DaisyUI](https://daisyui.com/) – prebuilt components + **theming support**
* ✅ [Vitest](https://vitest.dev/) & [Playwright](https://playwright.dev/) – unit & end-to-end testing
* 🧹 [ESLint](https://eslint.org/) + [Oxlint](https://oxlint.com/) + [Prettier](https://prettier.io/) – linting & formatting

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)
![Vue](https://img.shields.io/badge/Vue.js-42B883?logo=vue.js\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css\&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?logo=tailwind-css\&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest\&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright\&logoColor=white)

---

## 📦 Installation

Clone the repo and install dependencies:

```sh
git clone https://github.com/username/client-template-vite-vue.git
cd client-template-vite-vue
npm install
```

**Supported Node.js versions**:

* `^20.19.0` or `>=22.12.0`

---

## 🛠️ Development

Run local dev server with HMR:

```sh
npm run dev
```

Open in [http://localhost:5173](http://localhost:5173).

---

## 🏗️ Build

Compile and minify for production:

```sh
npm run build
```

Preview the build:

```sh
npm run preview
```

---

## ✅ Testing

### Unit Tests (Vitest)

```sh
npm run test:unit
```

### End-to-End Tests (Playwright)

```sh
# Install browser (only once)
npx playwright install

# Build before running tests in CI
npm run build

# Run all e2e tests
npm run test:e2e

# Run only on Chromium
npm run test:e2e -- --project=chromium

# Run a specific test file
npm run test:e2e -- tests/example.spec.js

# Debug mode
npm run test:e2e -- --debug
```

---

## 🧹 Lint & Format

Lint code with ESLint & Oxlint:

```sh
npm run lint
```

Auto-format with Prettier:

```sh
npm run format
```

---

## 📂 Project Structure

```
client-template-vite-vue/
├── public/              # Static files
├── src/
│   ├── assets/          # Assets (images, icons, etc.)
│   ├── components/      # Vue components
│   ├── stores/          # Pinia stores
│   ├── views/           # Main views/pages
│   ├── router/          # Vue Router setup
│   ├── App.vue          # Root component
│   └── main.js          # Entry point (JavaScript, not TS)
├── tests/               # Unit & e2e tests
├── vite.config.js       # Vite + Tailwind + DaisyUI config
└── package.json
```

---

## 🌟 Features

* ⚡ Blazing-fast build with Vite
* 🌼 Full DaisyUI integration with **theming support** → switch themes easily (light/dark/retro/bumblebee, etc.)
* 📦 Modular Vue 3 Composition API setup
* 🧭 Vue Router included
* 🔒 Pinia state management out of the box
* ✅ Ready-to-use unit & e2e testing
* 🧹 Auto linting + formatting

---

## 🎨 DaisyUI Theming

The template comes with **DaisyUI themes** preconfigured.
You can switch themes directly from `vite.config.js` or at runtime using the `data-theme` attribute.

Full theme list: [https://daisyui.com/themes/](https://daisyui.com/themes/)

---

## 📜 License

[MIT](./LICENSE) © 2025 Kura Ninja
