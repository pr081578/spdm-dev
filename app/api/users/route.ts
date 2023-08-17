import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  return NextResponse.json({ allUsers });
}
