# Hourent

Modern full‑stack property rental marketplace that helps renters discover listings, save favorites, and engage with sellers while giving administrators a central dashboard to manage the platform. This repository contains both the customer-facing React client and the Express/MongoDB API.

## Features
- **Property discovery:** filterable listings with rich metadata, dedicated detail pages, testimonials, and marketing content to boost engagement.
- **Account management:** Firebase-powered sign-up/login flows (email/password plus Google & GitHub providers) with guarded routes and JWT-backed API requests.
- **Saved properties & dashboards:** personalized saved listings, seller onboarding workflow, and dedicated dashboards for sellers and administrators.
- **Bookings & reviews:** API endpoints to create bookings and submit reviews, laying the groundwork for a full rental transaction lifecycle.
- **Responsive UI:** Tailwind CSS v4 with DaisyUI theming, Lucide icons, and reusable component primitives for consistent styling.

## Tech Stack
- **Client (`Hourent-Client`):** React 19 + Vite, React Router, TanStack Query, Tailwind CSS v4, DaisyUI, Axios, Firebase Auth.
- **Server (`Hourent-server`):** Node.js, Express, MongoDB (official driver), JSON Web Tokens, Dotenv for configuration.
- **Tooling:** ESLint 9, Jest test runner scaffold (server), SQL dump of legacy seed data for reference.

## Getting Started
1. **Install prerequisites**
   - Node.js ≥ 18 (recommended) and npm.
   - MongoDB Atlas cluster or self-hosted instance.
   - Firebase project with Web app credentials.
2. **Clone and install dependencies**
   ```bash
   git clone <repo-url>
   cd Hourent

   # Client
   cd Hourent-Client
   npm install

   # Server
   cd ../Hourent-server
   npm install
   ```

## Environment Variables

Create `.env` files in both the client and server directories before running locally.

### Client (`Hourent-Client/.env`)
```bash
VITE_ServerUrl=http://localhost:3100
VITE_apiKey=<firebase-api-key>
VITE_authDomain=<firebase-auth-domain>
VITE_projectId=<firebase-project-id>
VITE_storageBucket=<firebase-storage-bucket>
VITE_messagingSenderId=<firebase-messaging-sender-id>
VITE_appId=<firebase-app-id>
```

### Server (`Hourent-server/.env`)
```bash
PORT=3100
DATABASE_USER=<mongo-atlas-username>
DATABASE_PASSWORD=<mongo-atlas-password>
JWT_SECRET=<secure-random-string>

# Optional: use a full connection string instead of user/password
# MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/<db>?retryWrites=true&w=majority
```

> **Tip:** The `db/hourent.sql` file contains legacy relational seed data that can help you understand dataset expectations if you plan to extend the API.

## Running Locally
1. **Start the API**
   ```bash
   cd Hourent-server
   npm run dev
   ```
   The server boots on `http://localhost:3100`.

2. **Start the client**
   ```bash
   cd Hourent-Client
   npm run dev
   ```
   Vite will expose the client at the URL printed in the console (typically `http://localhost:5173`).

3. **Login flow**
   - Users authenticate with Firebase; upon successful login, retrieve a JWT from `POST /jwt` and persist it as `access_token` in `localStorage` for authenticated API calls.

## API Snapshot
- `GET /posts` – list all property listings.
- `GET /users` / `POST /users` – manage user records (insert handler currently scaffolded).
- `GET /bookings` / `POST /bookings` / `DELETE /bookings` – booking lifecycle (delete handler pending).
- `GET /reviews` / `POST /reviews` – retrieve and submit property reviews.
- `POST /jwt` – mint a 31-day JWT for authorized client requests.

> Many controller stubs are present under `Hourent-server/controller/` for future CRUD expansion. Harden authentication/authorization before production use.

## Project Structure
```
Hourent/
├── Hourent-Client/       # React application (routes, pages, components, hooks)
│   └── src/
│       ├── components/   # UI elements, filters, marketing sections
│       ├── hooks/        # Axios instances, auth helpers, data fetching hooks
│       ├── layouts/      # Shared layout wrapper
│       ├── pages/        # Route-level screens (home, auth, dashboards, etc.)
│       └── providers/    # Firebase auth context
├── Hourent-server/       # Express API and MongoDB integration
│   ├── config/           # Database connection helpers
│   ├── jwt/              # JWT issuance logic
│   ├── middlewares/      # Auth guards (admin/token verification)
│   └── routes/           # Future route modules (currently empty stubs)
└── README.md             # You are here
```

## Quality & Testing
- **Lint:** `cd Hourent-Client && npm run lint`
- **API tests:** `cd Hourent-server && npm test` (Jest configured; add unit/integration tests under `__tests__/`).
- **Manual API checks:** use `Hourent-server/test.rest` with VS Code REST Client or similar.

## Roadmap & Known Gaps
- Finish `/admin-login`, booking deletion, and users insert handlers on the API.
- Enforce middlewares in Express routes and wire up the commented `AuthProvider` in `src/main.jsx`.
- Add form validation, optimistic updates, and error states to improve UX.
- Cover critical flows (auth, bookings, favorites) with automated tests.

## Contributing
1. Fork and branch from `main`.
2. Keep client and server changes in cohesive commits.
3. Run linting/tests before opening a PR.
4. Document schema or environment changes in this README.

---

Need help or found a bug? Open an issue describing the context, steps to reproduce, and expected behavior so we can keep Hourent evolving.

