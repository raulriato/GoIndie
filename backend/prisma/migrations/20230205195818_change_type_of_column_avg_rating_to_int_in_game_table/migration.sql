/*
  Warnings:

  - You are about to alter the column `avgRating` on the `Game` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "avgRating" SET DATA TYPE INTEGER;
