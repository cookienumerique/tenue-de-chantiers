#!/bin/bash
cd ~/var/www/cookie-numerique || exit;
git pull origin main;
npm install --loglevel verbose;
npm run build --verbose;
pm2 restart cookie_numerique
