import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type ProfileModel = {
  _id: ObjectId;
  fullName: string;
  address: string;
  phone: string;
  activities: string[];
  favorites: string[];
  interests: string[];
  userId: ObjectId;
};
export type ProfileModelCreateInput = Omit<ProfileModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_PROFILE = "profiles";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

//GET ALL PROFILES
export const getProfiles = async () => {
  const db = await getDb();
  const profiles = (await db
    .collection(COLLECTION_PROFILE)
    .find({})
    .toArray()) as ProfileModel[];
  return profiles;
};

//POST PROFILE
export const addProfile = async (profile: ProfileModelCreateInput) => {
  const db = await getDb();
  const result = await db.collection(COLLECTION_PROFILE).insertOne(profile);
  return result;
};

//DELETE PROFILE
export const deleteProfile = async (id: ObjectId) => {
  const db = await getDb();
  const findProfile = await db
    .collection(COLLECTION_PROFILE)
    .findOne({ _id: id });
  if (!findProfile) throw new Error(`Profile not found`);
  const result = await db.collection(COLLECTION_PROFILE).deleteOne({ _id: id });
  return result;
};
