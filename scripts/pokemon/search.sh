API="http://localhost:4741"
U_P="/search"

curl "${API}${U_P}/${URL_PATH}/${NAME}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
echo
