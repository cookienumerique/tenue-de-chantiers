#!/bin/bash
cd /var/www/cookie-numerique || exit
pm2 list;
pm2 restart all