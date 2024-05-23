/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("player").del();
  await knex("player").insert([
    {
      name: "いそっち",
    },
    {
      name: "いっちー",
    },
    {
      name: "おかちゃん",
    },
    {
      name: "おついち",
    },
    {
      name: "ばんちゃん",
    },
    {
      name: "まっさ",
    },
    {
      name: "こんひろ",
    },
    {
      name: "ちーくん",
    },
    {
      name: "ささっち",
    },
    {
      name: "ゆーだい",
    },
    {
      name: "たくま",
    },
    {
      name: "グッチ",
    },
    {
      name: "なおっち",
    },
    {
      name: "づっか",
    },
    {
      name: "まっちゃん",
    },
    {
      name: "バードマン",
    },
    {
      name: "みぞ",
    },
    {
      name: "だーやま",
    },
  ]);
};
