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
      address: "神奈川県藤沢市鵠沼藤が谷3-872-3",
      latitude: 35.3239757,
      longtitude: 139.4770707,
    },
    {
      id: 2,
      owner_id: 2,
      name: "Tom 1号店",
      address: "奈良県大和郡山市東奈良口町749-11",
      latitude: 34.6566701,
      longtitude: 135.7866908,
    },
    {
      id: 3,
      owner_id: 2,
      name: "Tom 2号店",
      address: "高知県高知市鏡的渕98-11",
      latitude: 33.6171517,
      longtitude: 133.4266348,
    },
    {
      id: 4,
      owner_id: 3,
      name: "TAKASHI 1号店",
      address: "40 West Newton Street, Boston, MA 02116",
      latitude: 42.339201,
      longtitude: -71.076358,
    },
  ]);
};
