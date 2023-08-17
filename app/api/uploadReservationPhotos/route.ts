import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here
  const allUploadReservationPhotos =
    await prisma.uploadReservationPhoto.findMany();
  return NextResponse.json({ allUploadReservationPhotos });
}
