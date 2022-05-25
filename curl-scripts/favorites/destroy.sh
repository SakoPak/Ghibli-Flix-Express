#!/bin/bash

API="https://ghibliapi.herokuapp.com/"
URL_PATH="/films"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo