# Framecraft

Higgsfield is an avatar studio built around a simple loop: sign in, describe a character, generate a 1024x1024 image, store it, and keep the result tied to your account.

The frontend is a Vite + React app with a dark studio-style dashboard. The backend is an Express API that validates requests with Zod, signs users with JWT, generates avatar images through Pollinations, uploads the result to Cloudinary, and records the avatar metadata in PostgreSQL through Prisma.

## What It Does

- Creates username/password accounts and returns a 7-day JWT on sign-in.
- Lets signed-in users create avatars from a name and prompt.
- Generates avatar images server-side, then uploads them to Cloudinary.
- Stores avatar records, generated image URLs, and Cloudinary public IDs in Postgres.
- Lists, refreshes, deletes one avatar, or clears all avatars for the current user.
- Keeps the client API base URL configurable through `VITE_API_URL`.

## Stack

| Layer | Tools |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, React Router, TanStack Query |
| UI | Tailwind CSS, shadcn-style components, Radix UI, Lucide icons, Geist font |
| Backend | Node.js, Express 5, TypeScript, Zod, JWT |
| Data | PostgreSQL, Prisma 7 |
| Media | Pollinations image endpoint, Cloudinary |

## Repository Layout

```text
Higgsfield/
  backend/
    src/
      index.ts         # Express routes for auth and avatars
      image.ts         # Prompt-to-image download helper
      middleware.ts    # JWT auth middleware
      cloudinary.ts    # Cloudinary client setup
      db.ts            # Prisma client setup
    prisma/
      schema.prisma    # User, Avatar, AvatarImage, AvatarVideo models

  frontend/
    src/
      pages/           # Landing, auth, dashboard, static pages
      components/      # Appbar, footer, cards, UI primitives
      lib/api.ts       # API base URL
```

## Local Setup

### Requirements

- Node.js 18+
- npm
- PostgreSQL
- Cloudinary account

### 1. Install Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
JWT_SECRET=<long-random-secret>
CLOUDINARY_CLOUD_NAME=<cloud-name>
CLOUDINARY_API_KEY=<api-key>
CLOUDINARY_API_SECRET=<api-secret>
```

Run Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

Start the API:

```bash
npm run dev
```

The backend listens on `http://localhost:3000`.

### 2. Install Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Optional `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

Start Vite:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## Main API Routes

| Method | Route | Auth | Purpose |
| --- | --- | --- | --- |
| `POST` | `/signup` | No | Create a user |
| `POST` | `/signin` | No | Return a JWT |
| `POST` | `/avatar` | Yes | Generate and save a new avatar |
| `GET` | `/avatars` | Yes | Get the signed-in user's avatars |
| `GET` | `/avatar/:avatarId` | No | Get one avatar with images |
| `DELETE` | `/avatar/:avatarId` | Yes | Delete one owned avatar |
| `DELETE` | `/avatars` | Yes | Delete all owned avatars |

Authenticated calls expect:

```http
Authorization: Bearer <token>
```

## Data Model

The current Prisma schema centers on:

- `User`: username, password, owned avatars, owned videos.
- `Avatar`: user-owned avatar container with a display name.
- `AvatarImage`: generated image URL, image type, and Cloudinary public ID.
- `AvatarVideo` and `AvatarVideoReference`: prepared schema for prompt-based avatar video work.

## Development Notes

- Generated images are temporarily written to `backend/assets/`, uploaded to Cloudinary, then removed locally.
- The image helper currently uses Pollinations with `width=1024`, `height=1024`, and `nologo=true`.
- The backend CORS list is defined in `backend/src/index.ts`; add your deployed frontend URL there before production use.
- Passwords are currently stored as plain text. Add hashing before using this outside a local/demo environment.
- The generated Prisma client is configured to output into `backend/generated/prisma`.

## Scripts

Backend:

```bash
npm run dev      # tsx watch src/index.ts
npm run build    # tsc
npm start        # node dist/index.js
```

Frontend:

```bash
npm run dev      # vite
npm run build    # tsc -b && vite build
npm run lint     # oxlint
npm run preview  # vite preview
```

