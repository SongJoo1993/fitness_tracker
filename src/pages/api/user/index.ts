import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../database/mongodb";
// import { ObjectId } from "mongodb";

export const getAllUsers = async (): Promise<{}> => {
  const mongoClient = await clientPromise;
  const data = await mongoClient
    .db("fitness_app")
    .collection("users")
    .find({})
    .toArray();

  return JSON.parse(JSON.stringify(data));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await getAllUsers();
    res.json({ users: data });
  } 
}