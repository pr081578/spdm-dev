import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here
  const allCarSharingRequests = await prisma.carsharingRequest.findMany();
  return NextResponse.json({ allCarSharingRequests });
}
