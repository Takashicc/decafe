const TABLE_SHOPS = "shops";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex(TABLE_SHOPS).insert([
    {
      id: 1,
      owner_id: 1,
      name: "Jon 1号店",
      city: "Fujizawa",
      address: "神奈川県藤沢市鵠沼藤が谷3-872-3",
    },
    {
      id: 2,
      owner_id: 2,
      name: "Tom 1号店",
      city: "Yamato Koriyama",
      address: "奈良県大和郡山市東奈良口町749-11",
    },
    {
      id: 3,
      owner_id: 2,
      name: "Tom 2号店",
      city: "Aichi",
      address: "高知県高知市鏡的渕98-11",
    },
  ]);
};
