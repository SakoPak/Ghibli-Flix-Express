#!/bin/bash

API="https://ghibliapi.herokuapp.com/"
URL_PATH="/films"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "film": {
      "id": "'"${ID}"'",
      "title": "'"${TITLE}"'",
      "original_Title": "'"${ORGINAL_TITLE}"'",
      "original_title_romanised": "'"${ORIGINAL_TITLE_ROMANISED}"'",
      "image": "'"${IMAGE}"'",
      "movie_banner": "'"${MOVIE_BANNER}"'",
      "description": "'"${DESCRIPTION}"'",
      "director": "'"${DIRECTOR}"'",
      "producer": "'"${PRODUCER}"'",
      "release_date": "'"${RELEASE_DATE}"'",
      "running_time": "'"${RUNNING_TIME}"'",
      "rt_score": "'"${SCORE}"'",
      "people": "'"${PEOPLE}"'"
    }
  }'

echo