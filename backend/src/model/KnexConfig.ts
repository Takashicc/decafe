import knex from "knex";
import config from "./KnexFile";

let knexConfig;
if (process.env.ENVIRONMENT === "production") {
  knexConfig = config.production;
} else {
  knexConfig = config.development;
}

export default knex(knexConfig);
