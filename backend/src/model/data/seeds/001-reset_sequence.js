const TABLES = ["owners", "shops", "menus"];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  for (let table of TABLES) {
    await knex.raw(`ALTER SEQUENCE ${table}_id_seq RESTART WITH 100`);
  }
};
