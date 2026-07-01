# Germán Camilo Bernal Ladino Portfolio

Professional portfolio website for Germán Camilo Bernal Ladino, a backend developer focused on Java, Spring Boot, PostgreSQL, Docker, CI/CD, REST APIs, transactional workflows, authentication, and event-driven backend systems.

## Overview

This site is designed for recruiter and engineering review. It highlights backend positioning, professional experience, selected public projects, technical strengths, stack, certifications, and direct contact links.

## Tech Stack

- Vite
- React
- TypeScript
- CSS
- Static assets served from `public/`
- Deploy-ready for Vercel

## Project Structure

```text
src/
  components/   Reusable portfolio sections
  data/         Structured profile, projects, experience, skills, and certifications
  styles/       Global styling
public/
  cv/           Downloadable CV files
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Vercel Deployment

Use the default Vercel settings for a Vite app:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

No backend service or environment variables are required.

## CV Files

The downloadable CV files live in:

```text
public/cv/
```

Primary English CV:

```text
public/cv/German-Bernal-CV-Java-Backend-EN.pdf
```

Spanish CV:

```text
public/cv/German-Bernal-CV-Backend-ES.pdf
```

## Repository

[https://github.com/GermanB7/GermanDev](https://github.com/GermanB7/GermanDev)
