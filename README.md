# ArtHub - Online Art Marketplace (Full-stack, one project)

Next.js frontend and the Express + MongoDB API in a single project and a single deployment.
The API is served by Next at `/api/*` (see `pages/api/[...path].js` -> `server/app.js`), so there is no CORS and no second server.

**Admin login:** admin@arthub.com / Admin@123 (auto-created on first request)

## Structure
```
app/ components/ lib/      Next.js frontend
pages/api/[...path].js     bridge: mounts the Express app under /api
server/                    Express app: routes, models, middleware, AI services
scripts/seed.js            demo artists + 12 artworks
```

## Run
```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000  (frontend + API together)
npm run seed                 # optional demo data
```
Then log in as admin > AI duplicates > "Index artworks for AI" to embed the demo data.

## Deploy
Push to Vercel as one project and add the variables from `.env.example`. No `vercel.json` needed.

## Features
JWT + Google login, buyer/artist/admin dashboards, artwork CRUD with search/filter/pagination,
Stripe Checkout and subscription tiers, buyer-only comments, imgBB uploads, dark mode,
and Gemini AI (listing assistant, semantic/image search, similar art, duplicate flagging).
