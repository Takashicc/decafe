const TABLE_OWNERS = "owners";
const TABLE_SHOPS = "shops";
const TABLE_MENUS = "menus";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_MENUS).del();
  await knex(TABLE_SHOPS).del();
  await knex(TABLE_OWNERS).del();
};
