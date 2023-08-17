import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here
  const allHosts = await prisma.host.findMany();
  return NextResponse.json({ allHosts });
}
