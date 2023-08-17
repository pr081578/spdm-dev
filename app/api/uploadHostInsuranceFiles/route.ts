import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here
  const allUploadHostInsuranceFiles =
    await prisma.uploadHostInsuranceFile.findMany();
  return NextResponse.json({ allUploadHostInsuranceFiles });
}
