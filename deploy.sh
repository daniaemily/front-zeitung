#!/usr/bin/env sh

# DOCS See: https://cli.vuejs.org/guide/deployment.html#github-pages

set -e
npm run build

cd dist
echo 'Deployed: '`date '+%m/%d/%Y %H:%M:%S' `> version.html

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:daniaemily/glassnews.git master:gh-pages

cd -
