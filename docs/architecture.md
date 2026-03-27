# 🏗️ Architecture

This document describes the architecture and organization of the **RN-NOTION-UI** project.

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
mobile/                   # React Native (Expo) project
    ├─ .expo/             # Expo build output (auto-generated)
    ├─ .vscode/           # VS Code workspace settings
    ├─ assets/            # Static assets (images, icons, fonts)
    ├─ node_modules/      # Project dependencies
    ├─ src/               # Source code
    │   ├─ app/           # Routes and layouts (expo-router)
    │   ├─ components/    # Reusable UI components (Button, Card, etc.)
    │   └─ lib/           # Utilities, helpers, configurations (api, utils, hooks)
    ├─ .gitignore         # Files/folders to ignore in Git
    ├─ app.json           # Expo configuration
    ├─ expo-env.d.ts      # TypeScript environment types for Expo
    ├─ package-lock.json  # Auto-generated dependency lock file
    ├─ package.json       # Project dependencies and scripts
    └─ tsconfig.json      # TypeScript configuration
LICENSE                   # Project license
README.md                 # Project README
```
---

## 🎨 Design Patterns

- **Component-Based Architecture**: reusable and decoupled UI components
- **Theme System**: dark theme with reusable color palette
- **Modular Structure**: screens and components organized by feature

---

## 🔧 CI/CD

- **GitHub Actions**: pipeline configured for build, lint, and automated tests.  
- **Dependabot**: weekly updates for npm dependencies and GitHub Actions.  

---

## 📄 Notes

The architecture was designed to be **modular, scalable, and easy to maintain**, serving as a showcase of modern frontend best practices.


