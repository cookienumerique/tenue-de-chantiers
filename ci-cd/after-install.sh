cd /var/www/cookie-numerique || exit;
yarn build --verbose;

pm2 restart cookie_numerique;
ls -la /var/www/cookie-numerique;
