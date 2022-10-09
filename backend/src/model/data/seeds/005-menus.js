const TABLE_MENUS = "menus";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_MENUS).insert([
    { id: 1, shop_id: 1, name: "Jon's Tea", price: 150 },
    { id: 2, shop_id: 1, name: "Jon's Super Tea", price: 200 },
    { id: 3, shop_id: 1, name: "Jon's Awesome Tea", price: 250 },
    { id: 4, shop_id: 1, name: "Jon's Fantastic Tea", price: 500 },
    { id: 5, shop_id: 2, name: "Decaf Tomato Juice", price: 400 },
    { id: 6, shop_id: 2, name: "Decaf Tomato Coffee", price: 600 },
    { id: 7, shop_id: 2, name: "Rainbow Tomato Juice", price: 750 },
    { id: 8, shop_id: 3, name: "Decaf Tomato Juice", price: 400 },
    { id: 9, shop_id: 3, name: "Decaf Tomato Coffee", price: 600 },
    { id: 10, shop_id: 3, name: "Rainbow Tomato Juice", price: 750 },
    { id: 11, shop_id: 4, name: "TAKASHI COFFEE", price: 150 },
    { id: 12, shop_id: 4, name: "TAKASHI DECAF COFFEE", price: 150 },
    { id: 13, shop_id: 4, name: "TAKASHI SPECIAL", price: 9800 },
    { id: 14, shop_id: 5, name: "TAKASHI COFFEE", price: 150 },
    { id: 15, shop_id: 5, name: "TAKASHI DECAF COFFEE", price: 150 },
    { id: 16, shop_id: 5, name: "TAKASHI SPECIAL", price: 9800 },
    { id: 17, shop_id: 6, name: "Decaf Espresso", price: 550 },
    { id: 18, shop_id: 6, name: "Decaf Cappucino", price: 800 },
    { id: 19, shop_id: 6, name: "Decaf Julio", price: 999 },
    { id: 20, shop_id: 7, name: "Decaf Espresso", price: 550 },
    { id: 21, shop_id: 7, name: "Decaf Cappucino", price: 800 },
    { id: 22, shop_id: 7, name: "Decaf Julio", price: 999 },
    { id: 23, shop_id: 8, name: "Decaf Espresso", price: 550 },
    { id: 24, shop_id: 8, name: "Decaf Cappucino", price: 800 },
    { id: 25, shop_id: 8, name: "Decaf Julio", price: 999 },
    { id: 26, shop_id: 1, name: "Jon's Overhauled Tea", price: 450 },
    { id: 27, shop_id: 1, name: "Jon's Blend", price: 300 },
    { id: 28, shop_id: 1, name: "Jon's Afternoon Tea", price: 500 },
    { id: 29, shop_id: 1, name: "Jon's Evening Tea", price: 900 },
    { id: 30, shop_id: 2, name: "Tasty Tomato Juice", price: 700 },
    { id: 31, shop_id: 2, name: "Expensive Tomato Juice", price: 3400 },
    { id: 32, shop_id: 2, name: "Gold-Plated Tomato Juice", price: 9500 },
  ]);
};
