# bulk load data
mongoimport --db=pokebattler-api_development--ssl \
        --username aptible --password "$PASSWORD" \
        --host "$HOST" --port "$PORT" --collection=natures --type=csv --headerline --file=data/natures.csv
