-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "UploadPhoto" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UploadPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UploadPhoto_image_key" ON "UploadPhoto"("image");

-- AddForeignKey
ALTER TABLE "UploadPhoto" ADD CONSTRAINT "UploadPhoto_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
