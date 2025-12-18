1. Projektnamen/Domains geprüft: `portfolio`, `dominiqueulrich.ch`, Backend `admin.dominiqueulrich.ch`
2. Ports anpassen
3. 

Zum Starten bitte bei Bedarf npm install im Frontend/Backend und neu bauen (npm run build im Frontend, npm run build oder npm run develop
im Backend)

### Lokal Dev Umgebung:
Starten mit:
docker compose  --env-file .env.local -f docker-compose.local.yml up
Wenn änderungen in dev backend gemacht wurde dann:
docker compose --env-file .env.local -f docker-compose.local.yml build strapi-prod
docker compose --env-file .env.local -f docker-compose.local.yml up -d strapi-prod
