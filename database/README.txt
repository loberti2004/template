npx wrangler d1 execute tabletop-db --local --file=./database/schema.sql
npx wrangler d1 execute tabletop-db --local --command "SELECT * FROM items;"

npx wrangler d1 execute tabletop-db --remote --command "SELECT * FROM items;"