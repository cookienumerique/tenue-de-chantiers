rm -rf node_modules;
rm -rf .next;
npm install --max-old-space-size=4096;
npm run build;
#pm2 start npm --name "tenue-de-chantiers" -- start;
pm2 restart tenue-de-chantiers
