#!/bin/bash
cd /var/www/cookie-numerique || exit
pm2 start npm --name "cookie_numerique" -- start