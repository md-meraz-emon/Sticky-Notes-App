# 📝 Sticky Notes App

A simple, dark-themed notes app built with React — create notes with a title and description, and they persist even after refreshing the page (thanks to `localStorage`).

## 🚀 Features

- Add notes with a title and description
- Delete notes instantly
- Notes persist across page refreshes using `localStorage`
- Responsive layout (stacked on mobile, side-by-side on larger screens)
- Sticky-note style UI with a paper background

## 🛠️ Tech Stack

- **React** (Hooks: `useState`, `useEffect`)
- **Tailwind CSS** for styling
- **localStorage** for persistence (no backend/database needed)

## 📦 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## 🧠 How It Works

- Notes are stored in a `task` state array, where each note is an object: `{ title, description }`
- A `useEffect` loads saved notes from `localStorage` when the app first mounts
- A second `useEffect` watches for changes to `task` and saves the updated list back to `localStorage`
- A `loaded` flag ensures notes aren't accidentally overwritten before the initial load finishes (important in React's `StrictMode`, which runs effects twice in development)

## 📁 Project Structure

```
src/
├── assets/
│   └── paperNote.png
├── App.jsx
└── main.jsx
```

## 🔮 Planned Improvements

- [ ] Edit existing notes instead of only add/delete
- [ ] Add note timestamps (created/updated)
- [ ] Search/filter notes by title
- [ ] Color-coded or draggable notes
- [ ] Move storage from `localStorage` to a real backend/database for multi-device sync
- [ ] Add empty-state UI when there are no notes yet
- [ ] Confirm before deleting a note (avoid accidental deletion)
- [ ] Animations for add/delete (e.g., using Framer Motion)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
