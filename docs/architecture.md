# 🏗️ Architecture

This document describes the architecture and organization of the **NEXT-KIETO-UI** project.

---

## 📂 Folder Structure
```bash
.github/                  # GitHub workflows and automation
    ├─ workflows/         # CI/CD workflows
    └─ dependabot.yml     # Dependency update config
docs/                     # Project documentation
    ├─ assets/            # Images, diagrams, etc.
    ├─ architecture.md    # Architecture documentation
    └─ setup.md           # Setup instructions
mobile/                      # Next.js project
    ├─ .expo/             # Next.js build output (auto-generated)
    ├─ .vscode/      # Project dependencies
    ├─ assets/            # Static assets (images, icons, fonts)
    ├─ node_modules/
    ├─ src/               # Source code
    │   ├─ app/           # Routes and layouts (App Router)
    │   ├─ assets/           # Routes and layouts (App Router)
    │   ├─ components/    # Reusable UI components (Button, Card, Modal, etc.)
    │   └─ lib/           # Utilities, helpers, configurations (api, utils, hooks)
    ├─ .gitignore         # Files/folders to ignore in Git
    ├─ app.json    # Components configuration (if used)
    ├─ expo-env.d.ts  # ESLint configuration
    ├─ package-lock.json  # Auto-generated dependency lock file
    ├─ package.json       # Project dependencies and scripts
    └─ tsconfig.json      # TypeScript configuration
LICENSE                   # Project license
README.md                 # Project README
```
---

## 🎨 Design Patterns

- **Atomic Design**: components organized into `atoms`, `molecules`, `organisms`, and `templates`.  
- **Theme System**: light/dark theme support with TailwindCSS.  
- **Reusability**: decoupled and reusable components across different contexts.  

---

## 🔧 CI/CD

- **GitHub Actions**: pipeline configured for build, lint, and automated tests.  
- **Dependabot**: weekly updates for npm dependencies and GitHub Actions.  

---

## 📄 Notes

The architecture was designed to be **modular, scalable, and easy to maintain**, serving as a showcase of modern frontend best practices.

