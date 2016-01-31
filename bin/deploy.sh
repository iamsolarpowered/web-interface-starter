npm install
./node_modules/.bin/gulp build

cd build
git add .
git commit -m Deploy
git push origin gh-pages
