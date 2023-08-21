/*
  Warnings:

  - You are about to drop the column `hostInsuranceId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `Features` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[vehicleId]` on the table `HostCharge` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hostId]` on the table `HostInsurance` will be added. If there are existing duplicate values, this will fail.
  - Made the column `vehicleId` on table `HostCharge` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hostId` on table `HostCharge` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_vehicleFeaturesId_fkey";

-- DropForeignKey
ALTER TABLE "HostCharge" DROP CONSTRAINT "HostCharge_hostId_fkey";

-- DropForeignKey
ALTER TABLE "HostCharge" DROP CONSTRAINT "HostCharge_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_hostInsuranceId_fkey";

-- AlterTable
ALTER TABLE "HostCharge" ALTER COLUMN "vehicleId" SET NOT NULL,
ALTER COLUMN "hostId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "hostInsuranceId";

-- DropTable
DROP TABLE "Features";

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "vehicleId" TEXT,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleFeatures" (
    "vehicleId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,

    CONSTRAINT "VehicleFeatures_pkey" PRIMARY KEY ("vehicleId","featureId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Feature_name_key" ON "Feature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HostCharge_vehicleId_key" ON "HostCharge"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "HostInsurance_hostId_key" ON "HostInsurance"("hostId");

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleFeatures" ADD CONSTRAINT "VehicleFeatures_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleFeatures" ADD CONSTRAINT "VehicleFeatures_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HostCharge" ADD CONSTRAINT "HostCharge_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HostCharge" ADD CONSTRAINT "HostCharge_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
