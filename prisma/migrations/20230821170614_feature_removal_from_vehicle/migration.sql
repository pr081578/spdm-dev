/*
  Warnings:

  - You are about to drop the column `vehicleId` on the `Feature` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_vehicleId_fkey";

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "vehicleId";
