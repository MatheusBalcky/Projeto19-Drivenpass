-- CreateTable
CREATE TABLE "wifis" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "wifiName" VARCHAR(30) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "wifis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wifis_title_user_id_key" ON "wifis"("title", "user_id");

-- AddForeignKey
ALTER TABLE "wifis" ADD CONSTRAINT "wifis_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
