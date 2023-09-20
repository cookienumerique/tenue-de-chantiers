#!/bin/bash
cd /var/www/cookie-numerique || exit
npm start
pm2 start npm --name "cookie_numerique" -- start
pm2 startup
pm2 save
pm2 restart all