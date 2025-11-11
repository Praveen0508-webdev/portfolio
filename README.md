# 🌐 Portfolio Website

A modern, responsive personal portfolio built with **Vite**, **React**, **TypeScript**, and **shadcn/ui**.  
Showcases your projects, skills, and experience with a fast and elegant interface.

---

## 🚀 Tech Stack

| Category | Tools |
|-----------|--------|
| Framework | [React](https://react.dev/) |
| Bundler | [Vite](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI Library | [shadcn/ui](https://ui.shadcn.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/icons) |
| Deployment | [GitHub Pages](https://pages.github.com/) |

---

## 🧰 Project Setup

### 1️⃣ Install dependencies
```bash
npm install

2️⃣ Run the development server
npm run dev

Your app will be available at http://localhost:5173.

🏗️ Build for production
npm run build

This creates an optimized dist/ folder with all static assets.
To preview the production build locally:
npm run preview


🌍 Deployment
This project is configured for GitHub Pages deployment.
Option 1 — Deploy via GitHub Actions (recommended)


Push your project to a GitHub repository.


Ensure your vite.config.ts contains:
export default defineConfig({
  base: '/<REPO_NAME>/',
  plugins: [react()],
})



Add .github/workflows/deploy.yml (see below).


In GitHub → Settings → Pages → Source, select GitHub Actions.


Your site will auto-deploy every time you push to main.
Option 2 — Manual deploy using gh-pages
If you prefer manual deployment:
npm install gh-pages --save-dev
npm run build
npm run deploy

This publishes your dist/ folder to the gh-pages branch automatically.

⚙️ Project Scripts
CommandDescriptionnpm run devStart development servernpm run buildBuild production filesnpm run build:devBuild in development modenpm run previewPreview built app locallynpm run lintRun ESLint to check for issuesnpm run deployDeploy to GitHub Pages (if configured)

🧩 Folder Structure
portfolioweb/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (e.g., Home, Projects)
│   ├── assets/          # Images, icons, etc.
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities, helpers
│   ├── App.tsx          # Main app entry
│   └── main.tsx         # Root render
├── .github/workflows/   # GitHub Actions workflows
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
├── package.json         # Dependencies & scripts
└── README.md            # You’re reading it!


💡 Customization


Update your name, title, and about info in src/components or src/pages.


Add your projects and links in a projects.ts or similar data file.


Adjust the color palette and typography in tailwind.config.ts.


Add new UI components using:
npx shadcn-ui@latest add <component-name>




📦 Deployment Workflow Example
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ "main" ]
  workflow_dispatch:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4


🧑‍💻 Author
Your Name
💼 Portfolio: https://yourusername.github.io/portfolioweb
🐙 GitHub: https://github.com/yourusername

🪪 License
This project is open source under the MIT License.


💬 Built with ❤️ using React, TypeScript, and Vite.


---

Would you like me to **personalize this README** (e.g., add your name, GitHub username, or portfolio URL) before you copy it in?  
If you share those details, I’ll fill them in and tailor the badges + deployment section exactly for your repo.
