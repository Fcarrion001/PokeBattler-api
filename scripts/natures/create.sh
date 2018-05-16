#!/bin/bash

API="http://localhost:4741"
URL_PATH="/natures"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "nature": {
      "name": "'"${NAME}"'",
      "stat_up": "'"${STAT_UP}"'",
      "stat_down": "'"${STAT_DOWN}"'"
    }
  }'

echo
