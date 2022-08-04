module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "decafe",
      user: "postgres",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {},
};
