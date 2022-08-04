const TABLE_NAME = "owners";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.up = async function (knex) {
  await knex.schema.alterTable(TABLE_NAME, function (table) {
    table.string("password", 72).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.down = function (knex) {
  knex.schema.alterTable(TABLE_NAME, function (table) {
    table.dropColumn("password");
  });
};
