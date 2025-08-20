# Flow

<p align="center">
  <img src="./public/logo.svg" alt="Flow Logo" width="64" height="64" />
</p>

A modern, AI-powered app builder using Next.js, Inngest, OpenAI, and more.

---

## Tech Stack

- **Next.js** (App Router)
- **React** (TypeScript)
- **Prisma** (ORM)
- **Neon** (Serverless PostgreSQL)
- **Docker** (Containerization)
- **Clerk** (Authentication)
- **TRPC** (API layer)
- **E2B Code Interpreter** (Sandboxed code execution)
- **Inngest** (Event-driven workflows)
- **OpenAI** (AI features)
- **Shadcn UI** (Styling)
- **Tailwind** (Styling)
- **zod** (Validation)
- **Vercel** (Deployment)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Docker (optional, for database or full containerization)
- Neon/PostgreSQL database (or update `.env`)
- Clerk & OpenAI API keys

### Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/flow.git
   cd flow
   ```

2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   ## Configure Environment Variables

Copy to `.env` and add your credentials. Example:

```sh
# Database
DATABASE_URL='YOUR_DATABASE_URL'
NEXT_PUBLIC_APP_URL='http://localhost:3000'

# OpenAI
OPENAI_API_KEY='YOUR_OPENAI_API_KEY'

# E2B
E2B_API_KEY='YOUR_E2B_API_KEY'

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"

NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
```

Make sure to use your

4. **Run Prisma migrations**
   ```sh
   npx prisma migrate dev
   ```

6. **Start the Next.js development server**
   ```sh
   npm run dev
   ```

7. **Start the Inngest dev server (in a separate terminal)**
   ```sh
   npx inngest-cli@latest dev
   ```
   Open [http://localhost:8288](http://localhost:8288) for Inngest UI

8. **Open [http://localhost:3000](http://localhost:3000) in your browser**


## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Inngest Documentation](https://www.inngest.com/docs)
- [OpenAI API](https://platform.openai.com/docs/)
- [Shadcn UI](https://shadcn.com/)
- [e2b](https://e2b.dev/)
- [Clerk Authentication](https://clerk.com/docs)
- [Neon Database](https://neon.tech/docs/introduction)
- [Agent Kit](https://agentkit.inngest.com/concepts/agents)

---

## Deployed app

**Live Demo:** [Visit Flow](https://flow-ai-kohl-mu.vercel.app/)

