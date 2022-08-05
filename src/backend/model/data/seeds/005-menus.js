const TABLE_MENUS = "menus";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_MENUS).insert([
    { id: 1, shop_id: 1, name: "Regular Coffee", price: 150 },
    { id: 2, shop_id: 1, name: "Cappuccino", price: 200 },
    { id: 3, shop_id: 1, name: "Espresso", price: 250 },
    { id: 4, shop_id: 2, name: "Green Tea", price: 50 },
    { id: 5, shop_id: 3, name: "British Tea", price: 9800 },
  ]);
};
