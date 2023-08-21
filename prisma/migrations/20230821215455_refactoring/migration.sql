/*
  Warnings:

  - You are about to drop the `UploadHostInsuranceFile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UploadHostInsuranceFile" DROP CONSTRAINT "UploadHostInsuranceFile_hostInsuranceId_fkey";

-- DropTable
DROP TABLE "UploadHostInsuranceFile";
