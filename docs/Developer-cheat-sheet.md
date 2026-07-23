# 🚀 Pamoja Chama Developer Cheat Sheet

This document contains the common terminal commands used throughout the Pamoja Chama project.

---

# 📁 Project Structure

```text
Pamoja_Chama_app/
│
├── frontend/
├── backend/
├── supabase/
├── docs/
└── README.md
```

---

# 🟢 Git Commands

## Check current branch

```bash
git branch
```

Lists all branches and highlights the current one.

---

## Create a new branch

```bash
git checkout -b feature/backend-api
```

Creates and switches to a new branch.

---

## Switch branches

```bash
git checkout main
```

Moves to another branch.

---

## Check project status

```bash
git status
```

Shows modified, staged, and untracked files.

---

## Stage all files

```bash
git add .
```

Stages every changed file.

---

## Commit changes

```bash
git commit -m "feat(auth): add Google authentication"
```

Creates a Git commit.

---

## Push branch

```bash
git push origin feature/backend-api
```

Uploads the branch to GitHub.

---

## Pull latest changes

```bash
git pull origin main
```

Downloads the latest changes.

---

# ⚡ Expo Commands

## Start Expo

```bash
npx expo start
```

Starts the development server.

---

## Clear Expo cache

```bash
npx expo start --clear
```

Useful after dependency updates or mysterious errors.

---

## Check Expo packages

```bash
npx expo install --check
```

Checks for outdated Expo packages.

---

## Install compatible Expo package

```bash
npx expo install expo-auth-session
```

Always use `expo install` instead of `npm install` for Expo packages.

---

# 📦 npm Commands

find . \( -path "./node_modules" -o -path "./dist" -o -path "./.git" \) -prune -o -print


## Install dependencies

```bash
npm install
```

Installs all packages.

---

## Install one package

```bash
npm install express
```

Installs a runtime dependency.

---

## Install development dependency

```bash
npm install -D typescript
```

Installs a development dependency.

---

## Update packages

```bash
npm update
```

Updates installed packages.

---

## View installed package

```bash
npm ls @supabase/supabase-js
```

Shows installed version.

---

# 🟢 Supabase CLI

## Login

```bash
supabase login
```

Authenticates the CLI.

---

## Link project

```bash
supabase link --project-ref YOUR_PROJECT_REF
```

Links the local project to Supabase.

---

## Check linked project

```bash
supabase projects list
```

Lists your projects.

---

## Create migration

```bash
supabase migration new create_profiles
```

Creates a migration file.

---

## Push migrations

```bash
supabase db push
```

Applies local migrations to the remote database.

---

## Pull remote schema

```bash
supabase db pull
```

Downloads the remote schema.

---

## Generate migration diff

```bash
supabase db diff
```

Generates SQL differences.

> Requires Docker Desktop.

---

## Repair migration history

```bash
supabase migration repair --status reverted MIGRATION_ID
```

Repairs migration history.

---

## Check Supabase status

```bash
supabase status
```

Shows local Supabase services.

> Requires Docker Desktop.

---

# 🐳 Docker

## Check Docker

```bash
docker --version
```

Shows installed Docker version.

---

## Start Docker Desktop

Open Docker Desktop before running:

```bash
supabase db diff
```

---

# 🗄 Database

## Create migration

```bash
supabase migration new create_contributions
```

---

## Apply migrations

```bash
supabase db push
```

---

## Reset local database

```bash
supabase db reset
```

**Warning:** Deletes local data.

---

# 🌿 Branch Strategy

```text
main

feature/supabase-auth

feature/backend-api

feature/groups

feature/contributions

feature/meetings

feature/loans

feature/testing
```

---

# 📚 Useful Git Workflow

```bash
git status

git add .

git commit -m "feat(groups): add group repository"

git push origin feature/backend-api
```

---

# 🛠 Useful Cleanup

Delete node_modules

Windows

```bash
rmdir /s /q node_modules
```

Mac/Linux

```bash
rm -rf node_modules
```

---

Install again

```bash
npm install
```

---

# 🚀 Backend Start

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 📱 Android

Start emulator

```bash
npx expo run:android
```

---

# 🌐 Web

```bash
npx expo start --web
```

---

# 📝 Naming Convention

## Branches

```text
feature/auth

feature/groups

feature/backend-api
```

## Commits

```text
feat:

fix:

docs:

style:

refactor:

test:

chore:
```

Example

```text
feat(groups): create group repository
```

---

# 💡 Recommended Workflow

```text
1. Pull latest changes

2. Create feature branch

3. Implement feature

4. Test feature

5. Commit

6. Push

7. Open Pull Request

8. Merge into main
```

---

# ✅ Current Project Milestones

- ✅ Design System
- ✅ UI Components
- ✅ Authentication
- ✅ Google OAuth
- ✅ Database Schema
- 🚧 Backend API
- ⏳ Groups API
- ⏳ Contributions API
- ⏳ Meetings API
- ⏳ Loans API
- ⏳ Notifications
- ⏳ Testing
- ⏳ Deployment