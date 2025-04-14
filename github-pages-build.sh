#! /bin/bash
#
# Creates a copy of index.html named 404.html to make GitHub Pages work correctly.
# https://benfraserdesign.medium.com/deploying-an-angular-app-on-github-pages-c4dfee672968
#

ng build --configuration production --aot

cp docs/index.html docs/404.html
