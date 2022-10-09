import knex from "knex";
import config from "./knexfile";

let knexConfig;
if (process.env.ENVIRONMENT === "production") {
  knexConfig = config.production;
} else {
  knexConfig = config.development;
}

export default knex(knexConfig);
