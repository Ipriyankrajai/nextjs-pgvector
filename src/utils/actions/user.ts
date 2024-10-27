"use server";

import prisma from "@/utils/prisma";
import generateEmbedding from "../generate-embeddings";

export async function getUsers({ query }: { query: string }) {
  return await prisma.user.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
}

export async function addUsers({
  user,
}: {
  user: {
    name: string;
    category: string;
    description: string;
    founders: string;
  };
}) {
  const embedding = await generateEmbedding(user.description);
  return await prisma.$executeRaw`
    INSERT INTO "User" (name, category, description, founders, embedding)
    VALUES (${user.name}, ${user.category}, ${user.description}, ${user.founders}, ${embedding}::vector)
    RETURNING *
  `;
}

export async function searchUsersthroughEmbedding({
  query,
}: {
  query: string;
}) {
  const embedding = await generateEmbedding(query);
  return await prisma.$queryRaw`
    SELECT
      id,
      name,
      category,
      founders,
      description
    FROM "User"
    ORDER BY embedding <-> ${embedding}::vector
    LIMIT 20
  `;
}
