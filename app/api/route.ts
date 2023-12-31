import { authOptions } from '@lib/authOptions';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  console.log('GET API', { session, request });
  return NextResponse.json({ authenticated: !!session });
}
