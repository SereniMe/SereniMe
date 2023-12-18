import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { getInterest } from "./interest";

export type ActivityModel = {
  _id: ObjectId;
  name: string;
  content: string;
  tags: string[];
  thumbnail: string;
};

export type ActivitieModelCreateInput = Omit<ActivityModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_ACTIVITY = "activities";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

//GET ALL ACTIVITIES
export const getActivities = async () => {
  const db = await getDb();

  const activities = (await db
    .collection(COLLECTION_ACTIVITY)
    .find({})
    .toArray()) as ActivityModel[];

  return activities;
};

//GET ACTIVITY
export const getActivity = async (filterQuery: {}) => {
  const db = await getDb();
  const activity = await db
    .collection(COLLECTION_ACTIVITY)
    .findOne(filterQuery);

  return activity;
};

//POST ACTIVITY
export const addActivity = async (activity: ActivitieModelCreateInput) => {
  const db = await getDb();

  const result = await db.collection(COLLECTION_ACTIVITY).insertOne(activity);

  return result;
};

//DELETE ACTIVITY
export const deleteActivity = async (id: ObjectId) => {
  const db = await getDb();
  const findACtivity = await db
    .collection(COLLECTION_ACTIVITY)
    .findOne({ _id: id });

  if (!findACtivity) throw new Error(`Activity not found`);

  const result = await db
    .collection(COLLECTION_ACTIVITY)
    .deleteOne({ _id: id });
  return result;
};

//GET RECOMMENDED ACTIVITIES
export const getRecommendedActivities = async (id: ObjectId) => {
  const db = await getDb();

  const interests = await getInterest(id);

  const tags = interests?.map((interest: string) => interest);

  const result = (await db
    .collection(COLLECTION_ACTIVITY)
    .find({ tags: { $in: tags } })
    .toArray()) as ActivityModel[];

  return result;
};
