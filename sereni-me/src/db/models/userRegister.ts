import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPassword } from "@/utils/bcryptjs";

export type UserModel = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};
export type UserModelCreateInput = Omit<UserModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "users";

export const getDB = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const createUser = async (user: UserModelCreateInput) => {
  const newUser: UserModelCreateInput = {
    ...user,
    password: hashPassword(user.password),
  };
  const db = await getDB();
  const result = await db.collection(COLLECTION_USER).insertOne(newUser);
  return result;
};
