# FisLyf Dashboard

Industrial IoT Fish Health Monitoring System frontend built with React, Vite, TailwindCSS, Recharts, and React Router.

## Features

- Role-based login selection (no auth)
- Sidebar navigation
- Global health KPIs and trend charts
- Live camera feed mockup
- Recent alerts panel
- Pond analytics with bar, pie, and line charts
- Alert history with filtering
- Device management overview
- Responsive layout for desktop, tablet, and mobile
- Marine tech aesthetic with neon accents

## Development

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # reusable UI pieces
  pages/        # route screens
  data/         # mock data
  App.jsx
  main.jsx
```

## Dependencies

- React 18
- Vite
- TailwindCSS
- React Router
- Recharts
- Lucide Icons

The theme uses deep navy blues, slate gray panels, neon cyan accents, emerald green for health, yellow warnings, and red for critical alerts. The font is Inter.
