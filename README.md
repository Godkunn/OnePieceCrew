# Grand Line Explorer 🏴‍☠️

An immersive, 3D-aesthetic One Piece anime fan experience built with React, Three.js, and Framer Motion.

## 🌊 Overview

Grand Line Explorer is a high-end web application designed for One Piece fans. It combines cutting-edge web technologies to create a cinematic experience featuring live show updates, interactive character profiles, and a 3D merchandise store.

## ✨ Features

- **3D Atmospheric Background**: A real-time 3D scene using `@react-three/fiber` with floating elements and sea-mist particles.
- **Conqueror's Haki Interaction**: Custom click effects that trigger red and black lightning bolts, simulating the legendary Haki power.
- **Parallax Hero Section**: Dynamic nautical elements that react to scroll depth.
- **Interactive Wanted Posters**: A "Join the Crew" feature that generates a stylized Wanted Poster with celebratory effects.
- **3D Merchandise Cards**: Product cards that tilt and react to mouse movement in 3D space.
- **Fully Responsive**: Optimized for everything from small mobile devices (iPhone SE) to 4K Ultra-wide TVs.
- **Live Broadcast Hub**: Real-time updates on the latest anime arcs and episodes.

## 🚀 Tech Stack

- **Framework**: React 19 + Vite
- **3D Rendering**: Three.js + @react-three/fiber + @react-three/drei
- **Animations**: Framer Motion (motion/react)
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

## 🛠 Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `src/components/ThreeScene.tsx`: Core 3D background engine.
- `src/components/HakiEffect.tsx`: Global interactive click effects.
- `src/components/Hero.tsx`: Parallax landing section.
- `src/components/LiveShow.tsx`: Anime update cards.
- `src/components/CharacterSection.tsx`: Crew member showcase.
- `src/components/MerchSection.tsx`: 3D merchandise grid.
- `src/components/WantedModal.tsx`: Interactive recruitment modal.

## 📜 License

This project is for fan/educational purposes. One Piece is a trademark of Eiichiro Oda / Shueisha, Toei Animation.
