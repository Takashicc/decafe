const TABLE_NAME = "menus";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments("id").primary();
    table.integer("shop_id").notNullable();
    table.foreign("shop_id").references("shops.id");
    table.string("name", 255).notNullable();
    table.integer("price").notNullable();
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
