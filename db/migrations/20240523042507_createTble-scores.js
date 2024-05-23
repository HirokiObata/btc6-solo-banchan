/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
  await knex.schema.createTable("scores", (t) => {
    t.increments("id").primary();
    t.integer("IN-score");
    t.integer("OUT-score");
    t.integer("player_id").references("id").inTable("player");
    t.integer("golf_course").references("id").inTable("golf_course");
    t.date("date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("scores");
};
