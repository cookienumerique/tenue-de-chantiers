#!/bin/bash
cd /var/www/cookie-numerique || exit
npm install
npm install pm2 -g
pm2 restart cookie_numerique
