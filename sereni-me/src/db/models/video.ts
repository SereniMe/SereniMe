import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type VideoModel = {
  _id: ObjectId;
  name: string;
  videoUrl: string;
  tags: string[]; //from collection interests
  thumbnail: string;
};

export type VideoModelCreateInput = Omit<VideoModel, "_id">;

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

//GET VIDEO
export const getVideo = async (filterQuery = {}) => {
  const db = await getDb();

  const video = await db.collection(COLLECTION_VIDEO).findOne(filterQuery);

  return video;
};

//POST VIDEOS
export const addVideo = async (video: VideoModelCreateInput) => {
  const db = await getDb();
  // const findVideo = db.collection(COLLECTION_VIDEO).findOne({
  //   name: video.name,
  // });

  const result = await db.collection(COLLECTION_VIDEO).insertOne(video);

  return result;
};

//DELETE VIDEOS
export const deleteVideo = async (id: ObjectId) => {
  const db = await getDb();
  const findVideo = await db.collection(COLLECTION_VIDEO).findOne({ _id: id });

  if (!findVideo) throw new Error(`Video not found`);

  const result = await db.collection(COLLECTION_VIDEO).deleteOne({ _id: id });

  return result;
};

//GET VIDEOS BY TAGS
export const getVideosByTags = async (filterQuery: { tags: string }) => {
  const db = await getDb();

  const videos = (await db
    .collection(COLLECTION_VIDEO)
    .find(filterQuery)
    .toArray()) as VideoModel[];

  return videos;
};
