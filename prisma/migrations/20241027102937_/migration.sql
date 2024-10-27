/*
  Warnings:

  - Added the required column `founders` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `embedding` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "founders" TEXT NOT NULL,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "profession" DROP DEFAULT,
ALTER COLUMN "embedding" SET NOT NULL;
