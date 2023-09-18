#!/bin/bash
cd /var/www/cookie-numerique || exit;
git pull origin main;
rm -rf node_modules;
rm -f package-lock.json;
rm -f yarn-lock.json;
yarn cache clean
yarn install --verbose;
yarn build --verbose;
pm2 restart cookie_numerique;
