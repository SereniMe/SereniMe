import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type InterestModel = {
  _id: ObjectId;
  name: string;
};

export type InterestModelCreateInput = Omit<InterestModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_INTEREST = "interests";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

//GET ALL INTERESTS
export const getInterests = async () => {
  const db = await getDb();

  const interests = (await db
    .collection(COLLECTION_INTEREST)
    .find({})
    .toArray()) as InterestModel[];

  return interests;
};

//GET INTEREST
export const getInterest = async (filterQuery: {}) => {
  const db = await getDb();
  const interest = await db
    .collection(COLLECTION_INTEREST)
    .findOne(filterQuery);

  return interest;
};

//POST INTEREST
export const addInterest = async (interest: InterestModelCreateInput) => {
  const db = await getDb();

  const result = await db.collection(COLLECTION_INTEREST).insertOne(interest);

  return result;
};

//DELETE INTEREST
export const deleteInterest = async (id: ObjectId) => {
  const db = await getDb();
  const findInterest = await db
    .collection(COLLECTION_INTEREST)
    .findOne({ _id: id });

  if (!findInterest) throw new Error(`Interest not found`);

  const result = await db
    .collection(COLLECTION_INTEREST)
    .deleteOne({ _id: id });

  return result;
};
