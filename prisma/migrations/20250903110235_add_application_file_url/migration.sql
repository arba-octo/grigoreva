-- CreateTable
CREATE TABLE "public"."Application" (
    "id" SERIAL NOT NULL,
    "contactType" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "question" TEXT NOT NULL,
    "file" TEXT,
    "fileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
