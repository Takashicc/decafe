import knex from "../knexConfig";
import { TABLE_OWNERS } from "../const";
import modelType from "../../model.type";

/**
 * Count records filtered by owner name.
 *
 * @param name Owner name
 * @returns Record count
 */
export async function countRecordByName(name: string): Promise<number> {
  try {
    const total = await knex
      .count("id")
      .from(TABLE_OWNERS)
      .where({ name })
      .first();

    if (!total || total.count === 0) {
      return 0;
    }

    return +total.count;
  } catch (error) {
    throw error;
  }
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
  try {
    const count = await countRecordByName(name);

    if (count === 0) {
      return;
    }

    const owner = await knex
      .select<modelType.Owner>({
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
  } catch (error) {
    throw error;
  }
}

/**
 * Insert data into owners table.
 *
 * @param owner Owner object
 */
export async function create(owner: modelType.Owner): Promise<void> {
  try {
    await knex(TABLE_OWNERS).insert(owner);
  } catch (error) {
    throw error;
  }
}
