/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("golf_course").del();
  await knex("golf_course").insert([
    {
      course_name: "新陽カントリー倶楽部",
      distance: "6444",
    },
    {
      course_name: "名岐国際ゴルフ倶楽部 妻木コース",
      distance: "5917",
    },
    {
      course_name: "クラウンカントリークラブ",
      distance: "6446",
    },
    {
      course_name: "瑞陵ゴルフ倶楽部",
      distance: "6024",
    },
    {
      course_name: "デイリー瑞浪カントリー倶楽部",
      distance: "6310",
    },
    {
      course_name: "ゴルフ５カントリー みずなみコース",
      distance: "6221",
    },
  ]);
};
