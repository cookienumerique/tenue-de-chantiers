cd /var/www/cookie-numerique || exit;
rm -rf node_modules;
git pull origin main;
sudo apt install -y nodejs npm;
sudo npm install -g yarn;
yarn cache clean;

