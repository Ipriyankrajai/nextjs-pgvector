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
