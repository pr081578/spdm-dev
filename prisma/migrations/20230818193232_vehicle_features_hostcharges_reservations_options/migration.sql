-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_vehicleFeaturesId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_vehicleId_fkey";

-- AlterTable
ALTER TABLE "Features" ALTER COLUMN "vehicleFeaturesId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "vehicleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_vehicleFeaturesId_fkey" FOREIGN KEY ("vehicleFeaturesId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
