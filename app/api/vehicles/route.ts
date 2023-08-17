import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here
  const allVehicles = await prisma.vehicle.findMany();
  return NextResponse.json({ allVehicles });
}
