#!/bin/bash

API="http://localhost:4741"
URL_PATH="/pokemon"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "pokemon": {
      "name": "'"${NAME}"'",
      "order": "'"${ORDER}"'"
    }
  }'

echo
