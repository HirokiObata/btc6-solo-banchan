const express = require("express");
const knex = require("knex");
const cors = require("cors");
const knexConfig = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

const PORT = process.env.PORT || 8080;
const app = express();

const db = knex(knexConfig[environment]);

app.use(cors());
app.use("/", express.static(__dirname + "/frontend/dist"));
app.use(express.json());
console.log("dir", __dirname + "/frontend/dist");

app.get("/score", async (req, res) => {
  const scores = await db
    .select("IN-score", "OUT-score", "date")
    .table("scores");
  console.log("dir", __dirname);

  res.status(200).send(JSON.stringify(scores));
});

app.get("/player", async (req, res) => {
  const player = await db.select("*").table("player");

  res.status(200).send(JSON.stringify(player));
});

app.get("/course", async (req, res) => {
  const course = await db
    .select("id", "course_name", "distance")
    .table("golf_course");

  res.status(200).send(JSON.stringify(course));
});
app.get("/scores", async (req, res) => {
  const scores = await db
    .select("*")
    .table("scores")
    .join("golf_course", { "golf_course.id": "scores.golf_course" })
    .join("player", { "player.id": "scores.player_id" });

  res.status(200).send(JSON.stringify(scores));
});

app.post("/scores", async (req, res) => {
  const body = req.body;
  console.log("body: ", body);

  await db("scores").insert(body);
  const kakunin = await db.select().table("scores");
  res.status(201).send(JSON.stringify(kakunin));
});

app.listen(PORT, () => {
  console.log("port", PORT);
});
