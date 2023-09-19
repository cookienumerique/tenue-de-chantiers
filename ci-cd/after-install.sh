cd /var/www/cookie-numerique || exit;
npm install pm2 -g;
npx pm2 restart cookie_numerique;
