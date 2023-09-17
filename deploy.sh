#!/bin/bash
cd ~/var/www/cookie-numerique || exit;
git pull origin main;
npm install && npm run build && pm2 restart cookie_numerique
