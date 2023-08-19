/*
  Warnings:

  - You are about to drop the column `guestId` on the `CarsharingRequest` table. All the data in the column will be lost.
  - You are about to drop the column `guestId` on the `UploadGuestPhoto` table. All the data in the column will be lost.
  - You are about to drop the column `platformChargeId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `Guest` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[platformChargeId]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `guestRequestId` to the `CarsharingRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platformChargeId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guestRequestId` to the `UploadGuestPhoto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `make` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trim` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CarsharingRequest" DROP CONSTRAINT "CarsharingRequest_guestId_fkey";

-- DropForeignKey
ALTER TABLE "UploadGuestPhoto" DROP CONSTRAINT "UploadGuestPhoto_guestId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_platformChargeId_fkey";

-- DropIndex
DROP INDEX "Vehicle_platformChargeId_key";

-- AlterTable
ALTER TABLE "CarsharingRequest" DROP COLUMN "guestId",
ADD COLUMN     "guestRequestId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "platformChargeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UploadGuestPhoto" DROP COLUMN "guestId",
ADD COLUMN     "guestRequestId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "platformChargeId",
ADD COLUMN     "make" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "trim" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Guest";

-- CreateTable
CREATE TABLE "GuestRequest" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GuestRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_platformChargeId_key" ON "Reservation"("platformChargeId");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_platformChargeId_fkey" FOREIGN KEY ("platformChargeId") REFERENCES "PlatformCharge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UploadGuestPhoto" ADD CONSTRAINT "UploadGuestPhoto_guestRequestId_fkey" FOREIGN KEY ("guestRequestId") REFERENCES "GuestRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarsharingRequest" ADD CONSTRAINT "CarsharingRequest_guestRequestId_fkey" FOREIGN KEY ("guestRequestId") REFERENCES "GuestRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
