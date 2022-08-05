const TABLES = ["owners", "shops", "menus"];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.up = function (knex) {
  const promises = [];
  TABLES.forEach((table) => {
    promises.push(
      knex.schema.alterTable(table, (table) => {
        table
          .timestamp("created_at", { useTz: false })
          .notNullable()
          .defaultTo(knex.fn.now())
          .alter();
        table
          .timestamp("updated_at", { useTz: false })
          .notNullable()
          .defaultTo(knex.fn.now())
          .alter();
      })
    );
  });

  return Promise.all(promises);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void[]> }
 */
exports.down = function (knex) {
  const promises = [];
  TABLES.forEach((table) => {
    promises.push(
      knex.schema.alterTable(table, (table) => {
        table.timestamp("created_at", { useTz: false }).alter();
        table.timestamp("updated_at", { useTz: false }).alter();
      })
    );
  });

  return Promise.all(promises);
};
