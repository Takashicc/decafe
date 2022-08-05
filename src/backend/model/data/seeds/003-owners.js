const TABLE_OWNERS = "owners";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_OWNERS).insert([
    { id: 1, name: "Jon", password: "Jon1234" },
    { id: 2, name: "Tom", password: "Tom1234" },
    { id: 3, name: "Karen", password: "Karen1234" },
    { id: 4, name: "Michel", password: "Michel1234" },
    { id: 5, name: "Luke", password: "Luke1234" },
  ]);
};
