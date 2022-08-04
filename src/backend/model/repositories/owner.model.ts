import knex from "../knexConfig";
import { TABLE_OWNERS } from "../const";

// TODO Unnecessary field needs to be removed\
// TODO Also needs to move the interface to the share model file
interface Owner {
  id: number;
  name: string;
  created_at: number;
  updated_at: number;
}

interface OwnerCreate {
  name: string;
}

interface OwnerUpdate {
  name: string;
}

/**
 * Insert data into owners table.
 *
 * @param owner Owner object
 * @returns Inserted data id
 */
export async function create(owner: OwnerCreate): Promise<number> {
  let id: number;

  try {
    const rows = await knex(TABLE_OWNERS).insert(owner, "id");
    id = rows[0].id;
  } catch (error) {
    throw error;
  }

  return id;
}

/**
 * Update owner data by id.
 *
 * @param id Owner id
 * @param owner Owner object but just name property
 * @returns Updated data id
 */
export async function updateOwnerById(
  id: number,
  owner: OwnerUpdate
): Promise<number> {
  try {
    await knex(TABLE_OWNERS)
      .where({ id })
      .update({
        ...owner,
        updated_at: knex.fn.now(),
      });
  } catch (error) {
    throw error;
  }

  return id;
}

/**
 * Find all owner data.
 *
 * @returns All owner data
 */
export async function findAll(): Promise<Owner[]> {
  let owners: Owner[];

  try {
    owners = await knex
      .select({
        id: `${TABLE_OWNERS}.id`,
        name: `${TABLE_OWNERS}.name`,
        created_at: `${TABLE_OWNERS}.created_at`,
        updated_at: `${TABLE_OWNERS}.updated_at`,
      })
      .from(TABLE_OWNERS);
  } catch (error) {
    throw error;
  }

  return owners;
}

/**
 * Find owner data by id.
 *
 * @param id Owner id
 * @returns Owner data find by id
 */
export async function findOwnerById(id: number): Promise<Owner> {
  let owner: Owner | undefined;

  try {
    owner = await knex
      .select({
        id: `${TABLE_OWNERS}.id`,
        name: `${TABLE_OWNERS}.name`,
        created_at: `${TABLE_OWNERS}.created_at`,
        updated_at: `${TABLE_OWNERS}.updated_at`,
      })
      .from(TABLE_OWNERS)
      .where({
        id,
      })
      .first();

    if (owner === undefined) {
      throw new Error(`Cannot find owner data by id: ${id}`);
    }
  } catch (error) {
    throw error;
  }

  return owner;
}
