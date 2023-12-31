import {Db, ObjectId} from "mongodb";
import {getMongoClientInstance} from "../config";

export type ProfileModel = {
	_id: ObjectId;
	email?: string;
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
	_id: ObjectId,
	profile: ProfileModelUpdateInput
) => {
	const db = await getDb();
	//!
	const findProfile = await db.collection(COLLECTION_PROFILE).findOne({_id});
	if (!findProfile) throw new Error(`Profile not found for _id: ${_id}`);
	//!
	const filter = {_id};
	const result = await db
		.collection(COLLECTION_PROFILE)
		.updateOne(filter, {$set: profile});
	return result;
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

export const addFavorite = async (
	profid: ObjectId,
	id: ObjectId,
	type: string
) => {
	const db = await getDb();
	const result = await db.collection(COLLECTION_PROFILE).updateOne(
		{_id: profid},
		{
			$push: {
				favorites: {
					type,
					id,
				},
			},
		}
	);
	console.log(result);

	return result;
};

export const deleteFavorite = async (
	profid: ObjectId,
	id: ObjectId,
	type: string
) => {
	const db = await getDb();
	const result = await db.collection(COLLECTION_PROFILE).updateOne(
		{_id: profid},

		{$pull: {favorites: {type, id}}}
	);
	console.log(result);

	return result;
};
