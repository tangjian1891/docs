#!/usr/bin/env sh

# abort on errors
set -e
npm i
# build
npm run build

# navigate into the build output directory
# cd .vitepress/dist


# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
cp -r -f .vitepress/dist dist
# git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

git push -f git@github.com:tangjian1891/docs.git master

cd -