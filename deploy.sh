#!/bin/bash
cd /var/www/cookie-numerique || exit;
git pull origin master;
yarn install && yarn build && pm2 restart cookie_numerique
