const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

const PORT = process.env.PORT || 8080;
const app = express();

const db = knex(knexConfig[environment]);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`ServerOpenしたよ http://localhost:${PORT}`);
});
