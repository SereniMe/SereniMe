import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type AudioModel = {
  _id: ObjectId;
  name: string;
  audioUrl: string;
  tags: string[]; //from collection interests
};

export type AudioModelCreateInput = Omit<AudioModel, "_id">;

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_AUDIO = "audios";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

//GET ALL AUDIOS
export const getAudios = async () => {
  const db = await getDb();

  const audios = (await db
    .collection(COLLECTION_AUDIO)
    .find({})
    .toArray()) as AudioModel[];

  return audios;
};

//GET AUDIO
export const getAudio = async (filterQuery: {}) => {
  const db = await getDb();
  const audio = await db.collection(COLLECTION_AUDIO).findOne(filterQuery);

  return audio;
};

//POST AUDIO
export const addAudio = async (audio: AudioModelCreateInput) => {
  const db = await getDb();
  //findAudio if needed laters

  const result = await db.collection(COLLECTION_AUDIO).insertOne(audio);

  return result;
};

//DELETE AUDIO
export const deleteAudio = async (id: ObjectId) => {
  const db = await getDb();
  const findAudio = await db.collection(COLLECTION_AUDIO).findOne({ _id: id });

  if (!findAudio) throw new Error(`Audio not found`);

  const result = await db.collection(COLLECTION_AUDIO).deleteOne({ _id: id });

  return result;
};

//GET AUDIOS BY TAGS
export const getAudiosByTags = async (filterQuery: { tags: string }) => {
  const db = await getDb();

  const audios = (await db
    .collection(COLLECTION_AUDIO)
    .find(filterQuery)
    .toArray()) as AudioModel[];

  return audios;
};
