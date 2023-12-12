import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type VideoModel = {
  _id: ObjectId;
  name: string;
  videoUrl: string;
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
  console.log(filterQuery, "filter");

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

//DELETE
export const deleteVideo = async (id: ObjectId) => {
  const db = await getDb();
  const findVideo = await db.collection(COLLECTION_VIDEO).findOne();
  console.log(id, "model id");

  if (!findVideo) throw new Error(`Video not found`);
  console.log(findVideo, "video");

  const result = await db.collection(COLLECTION_VIDEO).deleteOne({ _id: id });
  console.log(result, "result");

  return result;
};
