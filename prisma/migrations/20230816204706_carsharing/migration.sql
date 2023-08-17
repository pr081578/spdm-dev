/*
  Warnings:

  - You are about to drop the column `guestId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `UploadPhoto` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[vehicleId]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[carSharingRequestId]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isVerified` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `afterFuelLevel` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `afterMilage` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beforeFuelLevel` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beforeMilage` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carSharingRequestId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostHasConfirmed` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerHasConfirmed` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FuelLevelType" AS ENUM ('EMPTY', 'ONEFORTH', 'HALF', 'THREEFORTH', 'FULL');

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_guestId_fkey";

-- DropForeignKey
ALTER TABLE "UploadPhoto" DROP CONSTRAINT "UploadPhoto_reservationId_fkey";

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "isVerified" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "guestId",
ADD COLUMN     "afterFuelLevel" "FuelLevelType" NOT NULL,
ADD COLUMN     "afterMilage" INTEGER NOT NULL,
ADD COLUMN     "beforeFuelLevel" "FuelLevelType" NOT NULL,
ADD COLUMN     "beforeMilage" INTEGER NOT NULL,
ADD COLUMN     "carSharingRequestId" TEXT NOT NULL,
ADD COLUMN     "hostHasConfirmed" BOOLEAN NOT NULL,
ADD COLUMN     "ownerHasConfirmed" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "UploadPhoto";

-- CreateTable
CREATE TABLE "UploadReservationPhoto" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "beforeReservationId" TEXT,
    "afterReservationId" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UploadReservationPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UploadHostInsuranceFileUpload" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "hostInsuranceId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UploadHostInsuranceFileUpload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UploadGuestPhoto" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UploadGuestPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarsharingRequest" (
    "id" TEXT NOT NULL,
    "type" "CarSharingType" NOT NULL,
    "deliverAt" TIMESTAMP(3) NOT NULL,
    "returnAt" TIMESTAMP(3) NOT NULL,
    "deliverAddress" TEXT NOT NULL,
    "receiveAddress" TEXT NOT NULL,
    "requestApproved" BOOLEAN NOT NULL DEFAULT false,
    "guestId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarsharingRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UploadReservationPhoto_fileName_key" ON "UploadReservationPhoto"("fileName");

-- CreateIndex
CREATE UNIQUE INDEX "UploadHostInsuranceFileUpload_fileName_key" ON "UploadHostInsuranceFileUpload"("fileName");

-- CreateIndex
CREATE UNIQUE INDEX "UploadGuestPhoto_fileName_key" ON "UploadGuestPhoto"("fileName");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_vehicleId_key" ON "Reservation"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_carSharingRequestId_key" ON "Reservation"("carSharingRequestId");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_carSharingRequestId_fkey" FOREIGN KEY ("carSharingRequestId") REFERENCES "CarsharingRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadReservationPhoto" ADD CONSTRAINT "UploadReservationPhoto_beforeReservationId_fkey" FOREIGN KEY ("beforeReservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadReservationPhoto" ADD CONSTRAINT "UploadReservationPhoto_afterReservationId_fkey" FOREIGN KEY ("afterReservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadHostInsuranceFileUpload" ADD CONSTRAINT "UploadHostInsuranceFileUpload_hostInsuranceId_fkey" FOREIGN KEY ("hostInsuranceId") REFERENCES "HostInsurance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadGuestPhoto" ADD CONSTRAINT "UploadGuestPhoto_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsharingRequest" ADD CONSTRAINT "CarsharingRequest_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
