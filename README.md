# 🏴‍☠️ Grand Line Explorer

> **An immersive, 3D-aesthetic One Piece fan experience.**  
> Built with **React 19**, **Three.js**, and **Framer Motion**.

---

## 🌊 Overview

**Grand Line Explorer** is a high-end web application designed for the ultimate *One Piece* fan. It merges cutting-edge web technologies to create a cinematic, interactive journey through the world of pirates. From a morphing 3D Devil Fruit to real-time Haki effects, every detail is crafted to immerse you in the Grand Line.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🌀 3D Devil Fruit** | A real-time morphing 3D model using `@react-three/fiber` with mystical distortion effects. |
| **⚡ Conqueror's Haki** | Interactive click effects triggering red and black lightning bolts across the screen. |
| **🧭 Log Pose** | A dynamic vertical scroll indicator that tracks your journey through the New World. |
| **📖 Character Database** | A massive encyclopedia of 50+ legends with tabbed navigation and detail modals. |
| **🍇 Fruit Encyclopedia** | A gallery of iconic Devil Fruits with unique elemental icons and glowing hover states. |
| **📜 Wanted Posters** | Join the crew to generate your own bounty poster with celebratory confetti. |
| **📱 Ultra-Responsive** | Optimized for everything from the **iPhone SE** to **4K Ultra-wide TVs**. |

---

## 🚀 Tech Stack

- **Core:** `React 19` + `Vite`
- **3D/Graphics:** `Three.js` + `@react-three/fiber` + `@react-three/drei`
- **Animations:** `Framer Motion`
- **Styling:** `Tailwind CSS 4.0`
- **Icons:** `Lucide React`
- **Interactivity:** `Canvas Confetti`

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── layout/     # Navbar, Footer, LogPose
│   ├── sections/   # Hero, LiveShow, CharacterExplorer, etc.
│   ├── effects/    # HakiEffect, ThreeScene
│   └── modals/     # WantedModal
├── data/           # Character & Fruit datasets
├── lib/            # Shared utilities (cn helper)
└── App.tsx         # Main Orchestrator
```

---

## 🛠 Setup & Installation

1. **Clone & Install**:
   ```bash
   npm install
   ```
2. **Launch Dev Server**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## ☁️ Deploying on Render

To deploy this project on **Render**, follow these steps:

### 1. Create a New Static Site
1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Static Site**.
3. Connect your GitHub repository.

### 2. Configure Build Settings
| Setting | Value |
| :--- | :--- |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |

### 3. Add Environment Variables (Optional)
If you add any API keys later, add them in the **Environment** tab of your Render service.

### 4. Handle SPA Routing (Crucial)
Since this is a Single Page Application (SPA), you need to ensure all routes point to `index.html`:
1. Go to **Redirects/Rewrites** in your Render settings.
2. Add a rule:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** `Rewrite`

---

## 📜 License

This project is for fan/educational purposes. *One Piece* is a trademark of **Eiichiro Oda / Shueisha, Toei Animation**.

---
<p align="center">
  <i>"The One Piece... is real!"</i>
</p>
