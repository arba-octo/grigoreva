/*
  Warnings:

  - You are about to drop the column `file` on the `Application` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Application" DROP COLUMN "file",
ADD COLUMN     "fileName" TEXT;
