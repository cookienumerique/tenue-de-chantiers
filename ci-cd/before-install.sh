cd /var/www/cookie-numerique || exit;
git pull origin main;
rm -rf node_modules;
sudo apt install -y nodejs npm;
sudo npm install -g yarn;
yarn cache clean;

