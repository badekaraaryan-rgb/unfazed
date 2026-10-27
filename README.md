# Unfazed — Therapist Practice Management SaaS

A project starter based on the uploaded **Major Project – Web Development** PDF. It contains a React/Vite interactive front-end prototype and a Node/Express/Mongoose API starter.

## What is included

### Interactive front-end prototype
- Therapist workspace navigation: Overview, Clients, Schedule, Clinical notes, Payments, Messages, Analytics, Settings.
- Public therapist portal preview with editable branded slug, profile, languages, services, and booking-slot demo.
- Add client, appointment, clinical note, and demo payment dialogs.
- Client search/filter and client detail panel.
- Schedule view with duration choices (30/45/60/90 minutes), availability summary and buffer time.
- Private/shared note labels, SOAP/DAP guidance, and privacy reminders.
- Payments, package tiers (3/6/12 sessions), invoice placeholder, and Razorpay integration guidance.
- In-app messaging UI and event/notification guidance.
- Revenue, active-client, attendance/no-show analytics views.
- Plan selector and upgrade prompts to demonstrate centralized entitlement concepts.
- Responsive layout for desktop/tablet/mobile; sample clients persist in browser localStorage.

**Important:** the UI currently uses demonstration data. It is not connected to the backend API yet. Sample charts and payment amounts are illustrative, not real business records. Never put real client or clinical information into this demo.

### Backend starter
- Separate `unfazed-backend` project, Express app and MongoDB/Mongoose models for Therapist, Client, Session, SessionNote, Availability, Payment, Package, ClientPackage, Lead, SubscriptionTierConfig.
- Bcrypt password hashing, JWT auth middleware, slug generation, public profile, client CRUD starter, intake/consent record, scheduling and overlap prevention, private/shared note filtering, MongoDB aggregation analytics, entitlement service, notification stub, PDF invoice service, and Socket.io authenticated connection starter.
- Environment template for MongoDB, JWT and Razorpay test credentials.

Some external integration endpoints are intentionally returned as `501` until gateway credentials and production-grade verification are configured. Razorpay webhook signature verification, package purchase lifecycle, file-storage permissions, notification delivery, and complete socket conversation authorization still require implementation and testing before real use. This is a coursework starter, not a production-ready clinical system.

## Run the front-end prototype

Requirements: Node.js 18+ and npm.

```bash
cd unfazed-frontend
npm install
npm run dev
```

Vite normally prints a local URL such as `http://localhost:5173`.

## Run the API

1. Install Node.js 18+ and MongoDB Atlas or local MongoDB.
2. Copy `unfazed-backend/.env.example` to `unfazed-backend/.env` and fill in `MONGO_URI` and a long random `JWT_SECRET`.
3. From `unfazed-backend/` run:

```bash
npm install
npm run dev
```

4. Test `GET http://localhost:5000/api/health`.
5. Register using `POST /api/auth/register` with JSON `{ "name":"Dr Example", "email":"doctor@example.com", "password":"a-long-demo-password" }`.

Do not commit `.env` or real API keys. The frontend prototype does not yet call these API routes.

## PDF requirements coverage checklist

| PDF area | Included in this starter | Remaining for complete production/demo submission |
|---|---|---|
| React therapist dashboard + client portal | Dashboard, portal preview, navigation, responsive UI | Connect every page to authenticated API |
| Node/Express + MongoDB/Mongoose architecture | Backend project, app, schemas, health route | Tests, validation and production hardening |
| Central entitlement service | `canAccess(therapistId, featureKey)` + API endpoint + UI plan prompts | Seed tier configurations and gate every restricted route consistently |
| Therapist auth, bcrypt, JWT | Register/login endpoints and auth middleware | Rate limiting, refresh/revocation, password reset, auth UI wiring |
| Profile, unique slug, Open Graph | Profile fields, slug utility, public profile API, meta tags | Slug edit collision handling and dynamic OG tags at deployed URL |
| Availability, time zones, buffers, overrides, blocked slots | Schema, availability endpoints and schedule UI | Full slot calculation, timezone conversion, atomic double-booking protection and waitlist |
| Client CRM, intake and consent | Client schema/list/create, intake/consent fields, client detail UI | Dynamic JSON-schema form builder and auditable consent versioning UI |
| Razorpay, payment records, packages, invoices | Payment/package schemas, order endpoint placeholder, invoice PDF service and UI | Complete Razorpay order/callback/webhook verification, package expiry/usage, GST validation and invoice route |
| Clinical notes, private/shared, SOAP/DAP | Schema, note endpoints, explicit shared-only client note query, UI | Rich-text TipTap editor and thorough authorization/privacy tests |
| Chat and notifications | Socket.io authenticated handshake starter, chat UI, event notification stub | Persisted messages, verify participant membership before joining rooms, receipts/typing, scheduler for reminders, email/WhatsApp provider |
| Analytics | MongoDB aggregation endpoint for revenue, active clients and no-show rate; chart UI | Connect chart data and validate aggregation outputs |
| File storage (S3), upload/download | Folder/architecture documented | S3 integration, signed URLs, malware scanning and access controls |
| Git, seed data, deployment | README and deployment plan below | Create repository, add seed script, deploy and smoke-test |

## Suggested order (matching the PDF)

1. Foundations: backend/frontend setup, auth, therapist profile and public slug.
2. Scheduling: weekly availability, overrides, timezone conversion and booking race-condition protection.
3. CRM/intake: client list, intake form and timestamped consent.
4. Payments/packages: Razorpay test mode, signed webhooks, invoices and expiry tracking.
5. Clinical notes: private/shared API boundaries, rich editor and SOAP/DAP templates.
6. Communication: persistent Socket.io chat, event-based reminders, email and WhatsApp stub.
7. Entitlements/analytics: database-configured tiers, all feature gates via one service and MongoDB aggregations.

## Deployment direction from the PDF

- Frontend: Vercel
- Backend: Render or Railway
- Database: MongoDB Atlas
- Set production environment variables in hosting dashboards; never expose Razorpay secret or JWT secret in frontend variables.

## Security note

Therapy records are highly sensitive. Before using this with real clients, implement and independently test authorization for every therapist/client resource, private-note non-disclosure, rate limits, secure session/token handling, encrypted transport and backups, audit logs, retention/deletion controls, secure file access, and applicable Indian privacy/legal requirements. The current demo is not a compliant clinical records system.
