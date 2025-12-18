# Deployment (Synology NAS)

## Artefakte

- Docker Images
  - Frontend: `ghcr.io/<org>/portfolio-frontend`
  - Backend: `ghcr.io/<org>/portfolio-backend`
  - Postgres: offizielles `postgres:16-alpine`
- Compose Datein
  - Lokal: `docker-compose.prod.yml` für Tests mit drei Containern (benötigt `.env.production`).
  - NAS: `deploy/synology/docker-compose.yml` (verwendet oben genannte Images).
- Standard-Ports auf dem NAS (um Konflikte mit anderen Projekten zu vermeiden):
  - Backend: 1440 (`BACKEND_PORT` / `BACKEND_HOST_PORT`)
  - Backend Dev lokal: 1441 (`STRAPI_DEV_PORT`)
  - Frontend: 5190 (`FRONTEND_HOST_PORT`)
  - Postgres: 5543 Host-Port (`POSTGRES_HOST_PORT`) → Container weiter 5432

## Domains / URLs

- Frontend: `https://dominiqueulrich.ch`
- Backend / Strapi-API: `https://admin.dominiqueulrich.ch`
- Admin-Panel: `https://admin.dominiqueulrich.ch/admin`
- CORS: `https://dominiqueulrich.ch,https://admin.dominiqueulrich.ch`

Wichtige Environment-Variablen (liegen in `.env.production` bzw. `deploy/synology/.env`):

- `BACKEND_PUBLIC_URL`, `BACKEND_ADMIN_URL`, `BACKEND_CORS_ORIGIN` für Strapi
- `FRONTEND_PROD_API_URL` (wird als `VITE_API_URL` ins Frontend gebuildet)

## GitHub Actions Workflow

Die Datei `.github/workflows/deploy.yml` baut beide Images (`target=production`) und pusht sie in den GitHub Container Registry. Anschliessend wird via SSH auf das NAS verbunden und `docker compose pull && docker compose up -d` ausgeführt.

Erforderliche Secrets:

- `FRONTEND_API_URL` – Basis-URL der produktiven Strapi-Instanz für den Frontend-Build (hier: `https://admin.dominiqueulrich.ch`).
  - Basiswert für dieses Projekt: `https://admin.dominiqueulrich.ch`.
- `SYNOLOGY_HOST`, `SYNOLOGY_USER`, `SYNOLOGY_SSH_KEY`, `SYNOLOGY_SSH_PORT` (optional), `SYNOLOGY_DEPLOY_PATH` – SSH-Zugangsdaten und Pfad zur Compose-Datei.

## Synology Setup

1. Auf dem NAS Docker + docker-compose installieren.
2. Repository-Verzeichnis (oder nur `deploy/synology`) auf das NAS kopieren.
3. `deploy/synology/.env.example` nach `.env` kopieren und ausfüllen (Datenbank-Passwörter, Strapi Secrets etc.).
4. `docker compose up -d` ausführen (standardmässig drei Container: Frontend, Backend, Postgres).

Die Images werden vom NAS bei jedem Workflow-Run neu gezogen. Rollbacks lassen sich durchführen, indem man mit `docker compose` gezielt ältere Tags referenziert.
