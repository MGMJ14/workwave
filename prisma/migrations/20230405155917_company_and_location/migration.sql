/*
  Warnings:

  - A unique constraint covering the columns `[job_id]` on the table `JobPost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `company` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `JobPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ALTER COLUMN "index" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "JobPost_job_id_key" ON "JobPost"("job_id");
