#!/bin/bash
set -eux
cd "$(dirname $0)/.."
find src -type d \
  | sed -E 's/^src($|\/)//g' \
  | xargs -i mkdir -pv dist/{}

find src -type f \
  | sed -E 's/(^src\/|.mjs$)//g' \
  | xargs -i node_modules/.bin/uglifyjs -cm -o dist/{}.min.mjs src/{}.mjs
