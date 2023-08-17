import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here
  const allReservations = await prisma.reservation.findMany();
  return NextResponse.json({ allReservations });
}
