#1 Déploiement

Ajouter le sous domaine dans le panel de configuration de l'hebergeur.

Lancer le script de déploiement.

#1.1 Prérequis
Installer pm2

```bash
npm install pm2 -g
```

```bash
./deploiement/deploy-production.sh
```

#3 Configuration nginx

```bash
server {
        server_name <domain>;

        access_log /var/log/nginx/access_tenue_de_chantiers.log;
        error_log /var/log/nginx/error_tenue_de_chantiers.log;

        location / {
                proxy_pass http://127.0.0.1:3000; # !!! - change to your app port
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

        location /_next/static {
                add_header Cache-Control "public, max-age=3600, immutable";
                proxy_pass http://127.0.0.1:8001/_next/static;
        }

    listen 443 ssl; # managed by Certbot
}

```

#2 Certificat https

```bash
sudo certbot --nginx -d sub-domain.domain.ext
```

Choisir l'option 2 pour le prompt
