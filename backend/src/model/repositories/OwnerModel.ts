import knex from "../KnexConfig";
import { TABLE_OWNERS } from "../const";
import * as modelType from "model_type";

/**
 * Count owners by email.
 *
 * @param email Email.
 * @returns Number of records.
 */
export async function countOwnersByEmail(email: string): Promise<number> {
  const total = await knex
    .count("id")
    .from(TABLE_OWNERS)
    .where({ email })
    .first();

  return +total!.count;
}

/**
 * Find owner by email.
 * If owner was not found, return undefined.
 *
 * @param email Email.
 * @returns Owner or undefined.
 */
export async function findOwnerByEmail(
  email: string
): Promise<modelType.Owner | undefined> {
  const owner = await knex
    .select<modelType.Owner>({
      id: "id",
      password: "password",
    })
    .from(TABLE_OWNERS)
    .where({ email })
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
  const rows = await knex(TABLE_OWNERS).insert(owner, "id").returning("id");
  return rows[0].id;
}
