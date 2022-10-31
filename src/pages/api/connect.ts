import { getUser } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const connectedUser = await getUser(req);
  if (!connectedUser) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }

  async function main() {
    if (!connectedUser) return;

    const createdUser = await prisma.user.create({
      data: {
        address: connectedUser.address,
        name: req.body.name || undefined,
      },
    });
  }
  main()
    .catch((e) => {
      if (e.code === "P2002") return console.log("user already exist!");

      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return res.redirect("/");
};

export default handler;
