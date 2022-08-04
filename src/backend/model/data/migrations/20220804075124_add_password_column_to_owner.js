const TABLE_NAME = "owners";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.string("password", 72).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.dropColumn("password");
  });
};
