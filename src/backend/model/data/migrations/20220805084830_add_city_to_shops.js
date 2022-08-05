const TABLE_NAME = "shops";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.string("city", 72).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.dropColumn("city");
  });
};
