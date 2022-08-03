import knex from "knex";
import config from "./knexfile";

const environment = process.env.ENVIRONMENT || "development";

export default knex(config[environment]);
