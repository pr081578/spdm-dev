/*
  Warnings:

  - You are about to drop the column `vehicleHostId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleOwnerId` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `Features` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliverAddressId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `physicalAddressId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platformChargeId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiveAddressId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CarSharing" AS ENUM ('TURO', 'GETAROUND', 'HYERCAR');

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleHostId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleOwnerId_fkey";

-- AlterTable
ALTER TABLE "Features" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "vehicleHostId",
DROP COLUMN "vehicleOwnerId",
ADD COLUMN     "deliverAddressId" TEXT NOT NULL,
ADD COLUMN     "hostId" TEXT,
ADD COLUMN     "ownerId" TEXT NOT NULL,
ADD COLUMN     "physicalAddressId" TEXT NOT NULL,
ADD COLUMN     "platformChargeId" TEXT NOT NULL,
ADD COLUMN     "receiveAddressId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PhysicalAddress" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,

    CONSTRAINT "PhysicalAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Host" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "physicalAddressId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Host_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "physicalAddressId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HostCharge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "vehicleId" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HostCharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlatformCharge" (
    "id" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlatformCharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarSharingPlatform" (
    "id" TEXT NOT NULL,
    "carsharing" "CarSharing" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarSharingPlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "deliverAt" TIMESTAMP(3) NOT NULL,
    "returnAt" TIMESTAMP(3) NOT NULL,
    "guestFirstName" TEXT NOT NULL,
    "guestLastName" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhysicalAddress_address_city_state_country_zipCode_key" ON "PhysicalAddress"("address", "city", "state", "country", "zipCode");

-- CreateIndex
CREATE UNIQUE INDEX "Host_userId_key" ON "Host"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_userId_key" ON "Owner"("userId");

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_physicalAddressId_fkey" FOREIGN KEY ("physicalAddressId") REFERENCES "PhysicalAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_deliverAddressId_fkey" FOREIGN KEY ("deliverAddressId") REFERENCES "PhysicalAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_receiveAddressId_fkey" FOREIGN KEY ("receiveAddressId") REFERENCES "PhysicalAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_platformChargeId_fkey" FOREIGN KEY ("platformChargeId") REFERENCES "PlatformCharge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_physicalAddressId_fkey" FOREIGN KEY ("physicalAddressId") REFERENCES "PhysicalAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_physicalAddressId_fkey" FOREIGN KEY ("physicalAddressId") REFERENCES "PhysicalAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HostCharge" ADD CONSTRAINT "HostCharge_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
