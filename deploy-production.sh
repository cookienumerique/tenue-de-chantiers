rm -rf node_modules
npm install --max-old-space-size=4096
pm2 restart tenue-de-chantiers
