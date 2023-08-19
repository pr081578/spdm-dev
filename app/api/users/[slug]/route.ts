import { authOptions } from '@lib/authOptions';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/server/prisma';

export async function GET() {
  // ... you will write your Prisma Client queries here

  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email as string,
    },
  });
  return NextResponse.json({ user });
}
