# Ngoan Meow Meow Coffee – Frontend

Frontend application for **Ngoan Meow Meow Coffee System**.  
Responsible for **UI/UX**, user interaction, and communication with backend API.

---

## Highlights

- ⚡ **React 19 + Vite** – fast dev & build
- 🎨 **Mantine v8** – modern UI system
- 🧠 **TypeScript** – type-safe & maintainable
- 🌍 **i18n ready** – multi-language support
- 🧭 **React Router v7**
- 📦 Clean project structure
- 🔐 Environment-based configuration

---

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **UI Library**: Mantine v8 + Emotion
- **Routing**: React Router DOM v7
- **Form Handling**: Mantine Form
- **Internationalization**: react-i18next
- **Linting**: ESLint

---

## Project Structure

```bash
src/
├─ assets/        # Images, icons, static resources
├─ components/    # Shared / reusable components
├─ layouts/       # App layouts (Auth, Main, etc.)
├─ pages/         # Route-level pages
├─ hooks/         # Custom React hooks
├─ services/      # API services & axios configs
├─ i18n/          # Language resources
├─ routes/        # Route definitions
├─ utils/         # Helper functions
├─ main.tsx       # Application entry point
└─ App.tsx
```

---

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3001
```
`VITE_API_BASE_URL` points to Meow Coffee Backend API

---

## Getting Started
Install dependencies:

```bash
npm install
```

Run development server:
```bash
npm run dev
```

Application will be available at: `http://localhost:5173`

## Build for Production
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Backend Integration

- This frontend works with:
- Meow Coffee API
- RESTful architecture
- Authentication & business logic handled by backend
- Frontend focuses on presentation & user experience

## Internationalization (i18n)

- Powered by react-i18next
- Language resources stored in src/i18n
- Easy to extend for new languages

## Development Notes

- Do NOT hardcode API URLs
- Always use import.meta.env
- Prefer reusable components
- Follow Mantine system for styling
- Ready for scaling (admin, dashboard, POS)