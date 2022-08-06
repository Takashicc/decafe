const TABLE_OWNERS = "owners";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_OWNERS).insert([
    { id: 1, name: "Jon", password: "Jon1234" },
    { id: 2, name: "Tom", password: "Tom1234" },
    { id: 3, name: "TAKASHI", password: "Karen1234" },
    { id: 4, name: "Julio", password: "Michel1234" },
    { id: 5, name: "Luke", password: "Luke1234" },
  ]);
};
