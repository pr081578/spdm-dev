/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Role" NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "name" SET DEFAULT 'BASIC';

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "vuel" TEXT NOT NULL,
    "gasGrade" TEXT NOT NULL,
    "cityMPG" INTEGER NOT NULL,
    "hwyMPG" INTEGER NOT NULL,
    "driveTrain" TEXT NOT NULL,
    "seatCount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "vehicleOwnerId" TEXT NOT NULL,
    "vehicleHostId" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Features" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vehicleFeaturesId" TEXT NOT NULL,

    CONSTRAINT "Features_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_vin_key" ON "Vehicle"("vin");

-- CreateIndex
CREATE UNIQUE INDEX "Features_name_key" ON "Features"("name");

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_vehicleOwnerId_fkey" FOREIGN KEY ("vehicleOwnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_vehicleHostId_fkey" FOREIGN KEY ("vehicleHostId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_vehicleFeaturesId_fkey" FOREIGN KEY ("vehicleFeaturesId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
