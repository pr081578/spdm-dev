/*
  Warnings:

  - You are about to drop the column `UploadFiles` on the `HostInsurance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HostInsurance" DROP COLUMN "UploadFiles",
ADD COLUMN     "uploadFiles" TEXT[];
