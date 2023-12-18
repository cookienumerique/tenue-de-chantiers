rm -rf nodes_modules;
npm install --production;

npm run build;
#pm2 start npm --name "tenue-de-chantiers" -- start;
pm2 restart tenue-de-chantiers
