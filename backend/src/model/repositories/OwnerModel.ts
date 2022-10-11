import knex from "../KnexConfig";
import { TABLE_OWNERS } from "../const";
import * as modelType from "model_type";

/**
 * Count records filtered by owner name.
 *
 * @param name Owner name
 * @returns Record count
 */
export async function countRecordByName(name: string): Promise<number> {
  const total = await knex
    .count("id")
    .from(TABLE_OWNERS)
    .where({ name })
    .first();

  if (!total || total.count === 0) {
    return 0;
  }

  return +total.count;
}

/**
 * Find owner data by owner name.
 * If owner data is not found, return undefined.
 *
 * @param name owner name
 * @returns Owner object or undefined
 */
export async function findOneByName(
  name: string
): Promise<modelType.Owner | undefined> {
  const count = await countRecordByName(name);

  if (count === 0) {
    return;
  }

  const owner = await knex
    .select<modelType.Owner>({
      id: "id",
      name: "name",
      password: "password",
    })
    .from(TABLE_OWNERS)
    .where({ name })
    .first();

  if (!owner) {
    return;
  }

  return owner;
}

/**
 * Insert data into owners table.
 *
 * @param owner Owner object
 */
export async function create(owner: modelType.Owner): Promise<number> {
  const rows = await knex(TABLE_OWNERS).insert(owner, "id");
  let owner_id: number = rows[0].id;
  return owner_id;
}
