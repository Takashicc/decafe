const TABLE_NAME = "shops";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.float("latitude");
    table.float("longtitude");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.dropColumn("latitude");
    table.dropColumn("longtitude");
  });
};
