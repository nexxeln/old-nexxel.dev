import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createSignature(req, res);
  } else if (req.method === "GET") {
    return await getSignatures(req, res);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

async function createSignature(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  try {
    const newEntry = await prisma.signatures.create({
      data: {
        name: body.name,
        message: body.message
      }
    });
    return res.status(200).json(newEntry);
  } catch (error) {
    console.log("Request error", error);
    return res.status(500).json({ error: "Error creating signature" });
  }
}

async function getSignatures(req: NextApiRequest, res: NextApiResponse) {
  try {
    const signatures = await prisma.signatures.findMany();
    return res.status(200).json(signatures);
  } catch (error) {
    console.log("Request error", error);
    return res.status(500).json({ error: "Error getting signatures" });
  }
}
