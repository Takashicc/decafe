const bcrypt = require("bcrypt");

const TABLE_OWNERS = "owners";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const passwords = [
    "Jon1234",
    "Tom1234",
    "Karen1234",
    "Michel1234",
    "Luke1234",
  ];
  const hashed_passwords = [];
  for (let i = 0; i < passwords.length; i++) {
    hashed_password = await bcrypt.hash(passwords[i], 10);
    hashed_passwords.push(hashed_password);
  }
  await knex(TABLE_OWNERS).insert([
    {
      id: 1,
      email: "jon@email.com",
      name: "Jon",
      password: hashed_passwords[0],
    },
    {
      id: 2,
      email: "tom@email.com",
      name: "Tom",
      password: hashed_passwords[1],
    },
    {
      id: 3,
      email: "takashi@email.com",
      name: "Takashi",
      password: hashed_passwords[2],
    },
    {
      id: 4,
      email: "julio@email.com",
      name: "Julio",
      password: hashed_passwords[3],
    },
    {
      id: 5,
      email: "luke@email.com",
      name: "Luke",
      password: hashed_passwords[4],
    },
  ]);
};
