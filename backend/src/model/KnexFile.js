const environment = process.env.ENVIRONMENT || "development";

const config = {
  development: {
    debug: true,
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
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};

module.exports = config[environment];
