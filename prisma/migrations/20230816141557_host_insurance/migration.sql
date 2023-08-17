/*
  Warnings:

  - You are about to drop the column `guestFirstName` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `guestLastName` on the `Reservation` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `carsharing` on the `CarSharingPlatform` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `guestId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostInsuranceId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('BASIC', 'ADMIN');

-- CreateEnum
CREATE TYPE "CarSharingType" AS ENUM ('TURO', 'GETAROUND', 'HYERCAR');

-- CreateEnum
CREATE TYPE "HostInsuranceType" AS ENUM ('INTERIOR', 'EXTERIOR');

-- AlterTable
ALTER TABLE "CarSharingPlatform" DROP COLUMN "carsharing",
ADD COLUMN     "carsharing" "CarSharingType" NOT NULL;

-- AlterTable
ALTER TABLE "HostCharge" ADD COLUMN     "hostId" TEXT;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "guestFirstName",
DROP COLUMN "guestLastName",
ADD COLUMN     "guestId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "RoleType" NOT NULL DEFAULT 'BASIC';

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "hostInsuranceId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "CarSharing";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HostInsurance" (
    "id" TEXT NOT NULL,
    "type" "HostInsuranceType" NOT NULL,
    "hostId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HostInsurance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_hostInsuranceId_fkey" FOREIGN KEY ("hostInsuranceId") REFERENCES "HostInsurance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HostCharge" ADD CONSTRAINT "HostCharge_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HostInsurance" ADD CONSTRAINT "HostInsurance_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
