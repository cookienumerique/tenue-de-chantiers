#!/bin/bash
cd /var/www/cookie-numerique || exit;
git pull origin main;
rm -rf nodes_modules;
rm -f package-lock.json;
rm -f yarn-lock.json;
npm cache clear --force;
npm install --loglevel verbose;
npm run build --verbose;
pm2 restart cookie_numerique
