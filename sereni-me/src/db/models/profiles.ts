import {Db, ObjectId} from "mongodb";
import {getMongoClientInstance} from "../config";

export type ProfileModel = {
	_id: ObjectId;
	fullName: string;
	address: string;
	phone: string;
	activities?: string[];
	favorites?: string[];
	interests: string;
	// reminder: string;
	userId: ObjectId;
};
export type ProfileModelCreateInput = Omit<ProfileModel, "_id">;
export type ProfileModelUpdateInput = Omit<ProfileModel, "_id">;

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

//GET ONE PROFILE
export const getProfile = async (id: ObjectId) => {
	const db = await getDb();

	const findProfile = await db
		.collection(COLLECTION_PROFILE)
		.findOne({userId: id});
	if (!findProfile) throw new Error(`Profile not found for _id: ${id}`);

	console.log(findProfile);

	return findProfile;
};

//POST PROFILE
export const addProfile = async (profile: ProfileModelCreateInput) => {
	const db = await getDb();
	const result = await db.collection(COLLECTION_PROFILE).insertOne(profile);
	return result;
};

//EDIT PROFILE
export const updateProfile = async (
	id: ObjectId,
	profile: ProfileModelUpdateInput
) => {
	try {
		const db = await getDb();
		//!
		console.log(profile);

		const findProfile = await db
			.collection(COLLECTION_PROFILE)
			.findOne({_id: id});
		if (!findProfile) throw new Error(`Profile not found for id: ${id}`);
		//!
		const filter = {_id: id};
		const result = await db.collection(COLLECTION_PROFILE).updateOne(filter, {
			$set: {...profile},
		});
		console.log(result);

		return result;
	} catch (error) {
		console.log(error);

		throw error;
	}
};

//DELETE PROFILE
export const deleteProfile = async (_id: ObjectId) => {
	const db = await getDb();
	//!
	const findProfile = await db.collection(COLLECTION_PROFILE).findOne({_id});
	if (!findProfile) throw new Error(`Profile not found for _id: ${_id}`);
	//!
	const result = await db.collection(COLLECTION_PROFILE).deleteOne({_id});
	return result;
};
