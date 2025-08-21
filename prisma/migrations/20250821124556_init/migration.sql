-- CreateTable
CREATE TABLE "public"."Result" (
    "id" SERIAL NOT NULL,
    "case" TEXT NOT NULL,
    "sumFirst" INTEGER NOT NULL,
    "sumNew" INTEGER NOT NULL,
    "sumResult" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Feedback" (
    "id" SERIAL NOT NULL,
    "key" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Result_case_key" ON "public"."Result"("case");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_key_key" ON "public"."Feedback"("key");
