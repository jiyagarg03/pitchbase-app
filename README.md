# Startups Showcase — Fullstack Next.js + Sanity + Auth.js Project

A startup discovery and submission platform built with Next.js App Router, Sanity CMS, Shadcn/UI, and GitHub OAuth. The project enables showcasing innovative ideas, managing authorship, tracking real-time views, and supporting markdown-based pitches.

---

## Tech Stack

| Layer          | Technology                        |
|----------------|---------------------------------|
| Frontend       | Next.js 14 (App Router), React  |
| Styling        | Tailwind CSS, Shadcn/UI          |
| Authentication | Auth.js with GitHub OAuth        |
| CMS            | Sanity.io                       |
| Validation     | Zod                             |
| Editor         | MDEditor (Markdown editor)      |
| Monitoring     | Sentry                          |

---

## Features

- Authentication: GitHub OAuth integration via Auth.js, with author creation and session management.
- Content Management: Sanity CMS for managing startups, authors, and playlists with real-time content fetching.
- Startup Submissions: Form with markdown pitch editor and robust schema validation using Zod.
- Search Functionality: Dynamic filtering of startups based on search queries.
- View Tracking: Real-time view count updates in Sanity without blocking UI rendering.
- Playlists: Curated startup playlists managed in Sanity and displayed on the frontend.
- Error Tracking: Integrated Sentry for runtime error monitoring.

---

## Project Structure

/app
├─ page.tsx # Main homepage rendering startup list
├─ layout.tsx # Root layout and navigation
/assets # Static assets like images
/components # Reusable UI components
├─ StartupCard.tsx
├─ Navbar.tsx
├─ SearchForm.tsx
├─ SearchFormReset.tsx
/sanity
├─ schematypes # Sanity schema definitions (author, startup, playlist)
/lib
├─ client.ts # Sanity client setup
├─ queries.ts # GROQ queries for fetching data
├─ write-client.ts # For updating views without blocking UI


---

## Data Fetching

- Uses Sanity’s live content API to fetch fresh data on each request.
- Supports parallel fetching for independent data (e.g., startup and playlists).
- Implements server-only actions to update view counts asynchronously.

---

## Form Validation

- Uses Zod for schema validation on startup submissions.
- Enforces constraints on fields like title, description, category, link (must be a valid image URL), and pitch (minimum length).

---

## How to Run

1. Clone the repository.
2. Set up Sanity backend with defined schemas and deploy.
3. Configure `.env` with Sanity project details and GitHub OAuth credentials.
4. Run `npm install` or `yarn` to install dependencies.
5. Start the Next.js development server with `npm run dev` or `yarn dev`.

---

## Notes

- The app uses Shadcn/UI for consistent, accessible components.
- Real-time updates are handled carefully to avoid UI blocking using Next.js server-only APIs.
- Sentry integration is configured for bug tracking.

