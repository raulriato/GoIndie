/*
  Warnings:

  - You are about to drop the column `inserted_by` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `main_image` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `released_at` on the `Game` table. All the data in the column will be lost.
  - Added the required column `insertedBy` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainImage` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releasedAt` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_inserted_by_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "inserted_by",
DROP COLUMN "main_image",
DROP COLUMN "released_at",
ADD COLUMN     "insertedBy" INTEGER NOT NULL,
ADD COLUMN     "mainImage" TEXT NOT NULL,
ADD COLUMN     "releasedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_insertedBy_fkey" FOREIGN KEY ("insertedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
