#!/bin/bash

API="http://localhost:4741"
URL_PATH="/pokemon"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "pokemon": {
      "name": "'"${NAME}"'",
      "order": "'"${ORDER}"'"
    }
  }'

echo
