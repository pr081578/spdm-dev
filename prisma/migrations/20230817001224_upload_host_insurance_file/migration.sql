/*
  Warnings:

  - You are about to drop the `CarSharingPlatform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UploadHostInsuranceFileUpload` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UploadHostInsuranceFileUpload" DROP CONSTRAINT "UploadHostInsuranceFileUpload_hostInsuranceId_fkey";

-- DropTable
DROP TABLE "CarSharingPlatform";

-- DropTable
DROP TABLE "UploadHostInsuranceFileUpload";

-- CreateTable
CREATE TABLE "UploadHostInsuranceFile" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "hostInsuranceId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UploadHostInsuranceFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UploadHostInsuranceFile_fileName_key" ON "UploadHostInsuranceFile"("fileName");

-- AddForeignKey
ALTER TABLE "UploadHostInsuranceFile" ADD CONSTRAINT "UploadHostInsuranceFile_hostInsuranceId_fkey" FOREIGN KEY ("hostInsuranceId") REFERENCES "HostInsurance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
