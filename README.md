# CampusFinder

CampusFinder is a production-quality MVP for the Frontend Engineer internship assessment, Track B: College Discovery Platform. It helps students search for colleges, filter options, inspect details, and compare 2 to 3 colleges side by side.

## Chosen Role and Track

- Role: Frontend Engineer
- Track: Track B - College Discovery Platform

## Tech Stack

- Next.js App Router
- React
- TypeScript
- TailwindCSS
- Local mock dataset with a lightweight Next.js API route
- `localStorage` for persistent comparison selections

## Features Implemented

- Homepage with hero, tagline, explanation, calls to action, and stats.
- College listing grid with realistic mock data for 25+ colleges.
- Search by college name or course.
- Filters for location, course, maximum fees, minimum rating, and public/private type.
- Dynamic college detail pages at `/colleges/[id]`.
- Comparison page at `/compare` for 2 to 3 selected colleges.
- Persistent compare list after refresh using `localStorage`.
- Clear empty, loading, error, duplicate, max-selection, and invalid-ID states.
- Responsive layouts for mobile, tablet, and desktop.

## How to Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Next.js framework settings.
4. Deploy. Vercel will run `npm install` and `npm run build`.

## Architecture Decisions

- `src/data/colleges.ts` keeps the assessment simple with a realistic local dataset.
- `src/types/college.ts` centralizes domain types.
- `src/lib/college-utils.ts` separates filtering, lookup, and formatting logic from UI components.
- `src/lib/use-compare.ts` owns comparison persistence and guards against duplicates and more than 3 selected colleges.
- `src/lib/college-visuals.ts` maps courses to local visual assets so college cards and detail pages feel less text-heavy without relying on external image URLs.
- `src/components` contains reusable UI pieces such as cards, filters, states, and comparison table.
- `src/app/api/colleges/route.ts` demonstrates how a frontend could consume mock data without adding database complexity.

## Why This Architecture

The project is organized to make the frontend easy to explain, test, and extend:

- `src/app` owns routing, page composition, dynamic routes, loading states, errors, and the mock API endpoint.
- `src/components` keeps the interface reusable and focused. Cards, filters, navigation, empty states, comparison UI, and visual states can be changed independently.
- `src/data` contains the mock college dataset. This keeps the assessment focused on frontend behavior instead of database setup.
- `src/types` defines the college domain model once, so pages, utilities, and components share the same TypeScript contract.
- `src/lib` contains reusable logic such as filtering, formatting, visual selection, and localStorage comparison state. This avoids large page components and keeps UI code easier to read.

This structure was chosen to demonstrate frontend engineering fundamentals: separation of concerns, typed data, reusable components, predictable state management, and clear routing.

## Edge Cases Handled

- No colleges found after search or filters.
- Invalid college ID renders a helpful not-found view.
- Empty comparison list explains the next action.
- One selected college prompts the user to add another.
- Duplicate college additions show feedback instead of mutating state.
- More than 3 comparison selections are blocked with clear messaging.
- Missing review data has a safe fallback.
- Compare selections persist after refresh.

## Known Tradeoffs

- The data is mock data and intentionally stored locally to keep the assessment focused on frontend engineering.
- The API route returns the full dataset; production filtering would usually be server-backed for larger catalogs.
- Authentication, saved accounts, and application workflows are outside the MVP scope.
- AI assistance was used as a productivity aid, but the implementation decisions, architecture, testing, and final submission are reviewed and owned by the developer.


## Vercel Submission Checklist

- Run `npm run lint`.
- Run `npm run build`.
- Push the project to GitHub.
- Import the repository into Vercel.
- Confirm the deployed homepage, `/colleges`, `/compare`, and one `/colleges/[id]` page.
- Submit the Vercel link and Loom video before the deadline.

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
```
