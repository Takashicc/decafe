const TABLE_NAME = "owners";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.string("email", 254);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.dropColumn("email");
  });
};
