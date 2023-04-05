/*
  Warnings:

  - Added the required column `index` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "index" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT NOT NULL;
