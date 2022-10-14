import knex from "../KnexConfig";
import { TABLE_OWNERS } from "../const";
import * as modelType from "model_type";

/**
 * Count owners by name.
 *
 * @param name Name.
 * @returns Number of records.
 */
export async function countOwnersByName(name: string): Promise<number> {
  const total = await knex
    .count("id")
    .from(TABLE_OWNERS)
    .where({ name })
    .first();

  return +total!.count;
}

/**
 * Find owner by name.
 * If owner was not found, return undefined.
 *
 * @param name Name.
 * @returns Owner or undefined.
 */
export async function findOwnerByName(
  name: string
): Promise<modelType.Owner | undefined> {
  const owner = await knex
    .select<modelType.Owner>({
      id: "id",
      name: "name",
      password: "password",
    })
    .from(TABLE_OWNERS)
    .where({ name })
    .first();

  return owner;
}

/**
 * Create owner data.
 *
 * @param owner Owner object.
 * @returns Created owner id.
 */
export async function createOwner(owner: modelType.Owner): Promise<number> {
  const row = await knex(TABLE_OWNERS).insert(owner, "id").first();
  return row.id;
}
