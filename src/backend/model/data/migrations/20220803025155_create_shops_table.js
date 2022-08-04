const TABLE_NAME = "shops";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.integer("owner_id").notNullable();
    table.foreign("owner_id").references("owners.id");
    table.string("name", 255).notNullable();
    table.string("address", 255).notNullable();
    table.timestamp("created_at", { useTz: false });
    table.timestamp("updated_at", { useTz: false });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
