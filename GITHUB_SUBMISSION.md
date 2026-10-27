# GitHub submission checklist (deadline: 28 October 2026)

## 1. Run the project locally

Install Node.js 18 or newer.

Terminal 1:
```bash
cd unfazed-backend
cp .env.example .env
# Edit .env and set MONGO_URI and a long random JWT_SECRET
npm install
npm run dev
```

Terminal 2:
```bash
cd unfazed-frontend
npm install
npm run dev
```

Open the local URL Vite prints (normally http://localhost:5173). The front end is currently a demo UI with browser-local sample data; it is not wired to every API endpoint. The backend needs MongoDB and environment variables.

## 2. Create the GitHub repository

1. Sign in at https://github.com/new
2. Repository name: `unfazed-therapist-platform` (or another name you prefer).
3. Choose **Public** if your evaluator needs to access it without permission. Do not put credentials or real client information in the repo.
4. Do not select “Add a README” because this project already has one.
5. Create the repository and copy its HTTPS URL.

## 3. Push this project

Open a terminal in the `unfazed-project` root folder (the folder containing this README), then run:

```bash
git init
git add .
git commit -m "Build Unfazed therapist practice platform"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/unfazed-therapist-platform.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username and use the exact repository URL GitHub gives you. If Git asks you to authenticate, complete the browser/device sign-in prompt. Never paste a password, personal access token, or API secret into chat.

If `git init` or `git remote add origin` says the repository already exists, do not repeat it blindly. Check `git status` and `git remote -v` first.

## 4. Before submitting

- Open the repository URL in a private/incognito browser window to ensure it is accessible.
- Check that `README.md`, `GITHUB_SUBMISSION.md`, `unfazed-frontend/`, and `unfazed-backend/` appear.
- Do not commit `.env`, `node_modules`, build output, or real client/clinical data.
- Submit the actual GitHub repository URL, not the ZIP download URL.
- If asked to demo, use fictional/sample data only and explain honestly which integrations are demo/stubbed.

## Current implementation status

The frontend is an interactive prototype with local browser persistence for selected sample records. The Express/Mongoose backend provides starter API routes for authentication, therapist profile, client records/intake-consent, sessions, notes, payments/webhook handling, analytics, and entitlements. A local build and full integration test still need to be run in an environment where npm dependencies and MongoDB are available. Do not describe the entire product as production-ready or claim every flow has been integration-tested.
