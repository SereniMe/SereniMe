import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type UserModel = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "users";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

//Login Model
export const getUserById = async (id: string) => {
  const db = await getDb();
  const objectId = new ObjectId(id);

  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ _id: objectId }, { projection: { password: 0 } })) as UserModel;

  return user;
};

//Find User
export const getFilteredUser = async (filterQuery = {}) => {
  const db = await getDb();

  const product = await db.collection(COLLECTION_USER).findOne(filterQuery);

  return product;
};
