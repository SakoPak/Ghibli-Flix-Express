#!/bin/sh

API="https://ghibliapi.herokuapp.com/"
URL_PATH="/films"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
