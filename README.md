# PitchBase – Discover and Share Innovative Startups

![Next.js](https://img.shields.io/badge/Next.js-15-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-2.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

PitchBase is a modern startup discovery and submission platform — inspired by tools like Product Hunt. Built with Next.js App Router, GitHub authentication, Sanity CMS, and Tailwind CSS, it features markdown-based pitch submissions, live view tracking, editor's picks, and dynamic routing.


##  Demo

[![Watch the Demo](https://raw.githubusercontent.com/jiyagarg03/pitchbase-app/main/public/pitchbase-demo.png)](https://www.youtube.com/watch?v=LjJGNr16U5k)


> A walkthrough of Pitchbase showcasing GitHub authentication, startup submission with Markdown editor, real-time view tracking, dynamic search, and curated editor picks — all built with Next.js, Sanity, and Auth.js.



---

## Features

- GitHub OAuth authentication (via Auth.js)
- Author creation upon first login
- Submit a startup with:
  - Title, category, description
  - Pitch editor (Markdown)
  - Live validation using Zod
- Real-time search with query syncing
- Live view tracking on startup pages (via Sanity write client)
- Editor's Picks curation from CMS
- User profile pages with submitted startups
- Fully responsive layout with TailwindCSS
- Performance monitoring via Sentry


---

## Tech Stack

| Layer          | Technology                              |
| -------------- | --------------------------------------- |
| **Frontend**   | Next.js 14 (App Router), React          |
| **Styling**    | Tailwind CSS, Shadcn/UI                 |
| **Auth**       | Auth.js (GitHub OAuth)                  |
| **CMS**        | Sanity.io (Content Studio + GROQ API)   |
| **Validation** | Zod (Schema validation)                 |
| **Markdown**   | MDEditor (`@uiw/react-md-editor`)       |
| **Database**   | Sanity (Document-based, real-time sync) |
| **Monitoring** | Sentry (Error tracking & performance)   |



---

## Getting Started

```bash
git clone https://github.com/jiyagarg03/pitchbase-app
cd pitchbase-app
npm install
npm run dev
```

---

## Environment Variables

To run this project locally, create a `.env.local` file in the root directory and include the following keys:

```
- GitHub OAuth
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
AUTH_SECRET=your_auth_secret

- Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_WRITE_TOKEN=your_sanity_write_token

- Sentry (Optional for error monitoring)
NEXT_PUBLIC_SENTRY_DSN=your_public_dsn
SENTRY_DSN=your_private_dsn

```

---
MIT License • © 2025 Jiya Garg

