const express = require("express");
const knex = require("knex");
const cors = require("cors");
const knexConfig = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

const PORT = process.env.PORT || 8080;
const app = express();

const db = knex(knexConfig[environment]);

//_______
// const allowCrossDomain = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, access_token"
//   );
// };
// app.use(allowCrossDomain);
app.use(cors());
// //_______

app.use(express.json());

app.get("/score", async (req, res) => {
  const scores = await db
    .select("IN-score", "OUT-score", "date")
    .table("scores");
  console.log("scores: ", JSON.stringify(scores));

  res.status(200).send(JSON.stringify(scores));
});

app.get("/player", async (req, res) => {
  const player = await db.select("*").table("player");
  console.log("player: ", JSON.stringify(player));

  res.status(200).send(JSON.stringify(player));
});

app.get("/course", async (req, res) => {
  const course = await db
    .select("id", "course_name", "distance")
    .table("golf_course");
  console.log("course: ", JSON.stringify(course));

  res.status(200).send(JSON.stringify(course));
});
app.get("/scores", async (req, res) => {
  const scores = await db
    .select("*")
    .table("scores")
    .join("golf_course", { "golf_course.id": "scores.golf_course" })
    .join("player", { "player.id": "scores.player_id" });
  console.log("course: ", JSON.stringify(scores));

  res.status(200).send(JSON.stringify(scores));
});

app.post("/scores", async (req, res) => {
  const body = req.body;
  console.log(body);
  await db("scores").insert(body);
  const kakunin = await db.select().table("scores");
  res.status(201).send(JSON.stringify(kakunin));
});

app.listen(PORT, () => {
  console.log(`ServerOpenしたよ http://localhost:${PORT}`);
});
