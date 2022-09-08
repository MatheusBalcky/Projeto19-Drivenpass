-- CreateTable
CREATE TABLE "safenotes" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "annotation" VARCHAR(1000) NOT NULL,

    CONSTRAINT "safenotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "safenotes_title_user_id_key" ON "safenotes"("title", "user_id");

-- AddForeignKey
ALTER TABLE "safenotes" ADD CONSTRAINT "safenotes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
