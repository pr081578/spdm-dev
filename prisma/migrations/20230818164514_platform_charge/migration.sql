/*
  Warnings:

  - A unique constraint covering the columns `[platformChargeId]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `seatCount` on the `Vehicle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "seatCount",
ADD COLUMN     "seatCount" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_platformChargeId_key" ON "Vehicle"("platformChargeId");
