-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_hostInsuranceId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "hostInsuranceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_hostInsuranceId_fkey" FOREIGN KEY ("hostInsuranceId") REFERENCES "HostInsurance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
