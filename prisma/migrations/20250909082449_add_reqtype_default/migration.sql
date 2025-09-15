-- CreateEnum
CREATE TYPE "public"."RequestType" AS ENUM ('feedback', 'application');

-- AlterTable
ALTER TABLE "public"."Application" ADD COLUMN     "reqType" "public"."RequestType" NOT NULL DEFAULT 'application';

-- AlterTable
ALTER TABLE "public"."Feedback" ADD COLUMN     "reqType" "public"."RequestType" NOT NULL DEFAULT 'feedback';
