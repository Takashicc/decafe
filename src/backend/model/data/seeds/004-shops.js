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
      name: "Jon's Afternoon Tea",
      address: "神奈川県藤沢市鵠沼藤が谷3-872-3",
      city: "Fuzisawa",
      latitude: 35.3239757,
      longtitude: 139.4770707,
    },
    {
      id: 2,
      owner_id: 2,
      name: "DrinkTomato 本店",
      city: "Boston",
      address: "38 West Newton Street, Boston, MA 02116",
      latitude: 42.3390094,
      longtitude: -71.0741938,
    },
    {
      id: 3,
      owner_id: 2,
      name: "DrinkTomato 藤泽支店",
      address: "神奈川县藤泽市大桐465-1159",
      city: "Fuzisawa",
      latitude: 35.3782411,
      longtitude: 139.4446044,
    },
    {
      id: 4,
      owner_id: 3,
      name: "TAKASHI",
      address: "40 West Newton Street, Boston, MA 02116",
      city: "Boston",
      latitude: 42.339201,
      longtitude: -71.076358,
    },
    {
      id: 5,
      owner_id: 3,
      name: "TAKASHI 2号店",
      address: "204 E 13th St, New York, NY 10003, United States",
      city: "New York",
      latitude: 40.7127753,
      longtitude: -74.0059728,
    },
    {
      id: 6,
      owner_id: 4,
      name: "JulioCoffee",
      address: "大阪府堺市南区御池台3丁目1-18",
      city: "Osaka",
      latitude: 34.4638854,
      longtitude: 135.5011332,
    },
    {
      id: 7,
      owner_id: 4,
      name: "JulioCoffee 2号店",
      address: "大阪府平方市春日北町119-1251号",
      city: "Osaka",
      latitude: 34.8078083,
      longtitude: 135.6820816,
    },
    {
      id: 8,
      owner_id: 4,
      name: "JulioCoffee 3号店",
      address: "大阪市森町郡熊取町幸田165-1265",
      city: "Osaka",
      latitude: 34.387699,
      longtitude: 135.2902878,
    },
  ]);
};
