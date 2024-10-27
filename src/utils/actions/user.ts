"use server";

import prisma from "@/utils/prisma";

export async function getUsers({ query }: { query: string }) {
  return await prisma.user.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });
}

export async function addUsers({
  user,
}: {
  user: { name: string; profession: string; description: string };
}) {
  return await prisma.user.create({
    data: user,
  });
}
