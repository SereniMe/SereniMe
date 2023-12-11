import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type VideoModel = {
  _id: ObjectId;
  name: string;
  videoUrl: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_VIDEO = "videos";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

//GET ALL VIDEOS
export const getVideos = async () => {
  const db = await getDb();

  const videos = (await db
    .collection(COLLECTION_VIDEO)
    .find({})
    .toArray()) as VideoModel[];

  return videos;
};

//GET VIDEOS
export const getVideo = async (filterQuery = {}) => {
  const db = await getDb();

  const video = await db
    .collection(COLLECTION_VIDEO)
    .findOneAndDelete(filterQuery);

  return video;
};
