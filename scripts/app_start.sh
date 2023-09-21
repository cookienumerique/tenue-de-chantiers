#!/bin/bash
cd /var/www/cookie-numerique || exit
pm2 restart all "cookie_numerique"