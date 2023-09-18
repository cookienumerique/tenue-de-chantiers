cd /var/www/cookie-numerique || exit;
git pull origin main;
rm -rf /var/www/cookie-numerique/node_modules;
yarn cache clean;

