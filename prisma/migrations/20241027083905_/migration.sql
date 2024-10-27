-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "embedding" vector(1536);
