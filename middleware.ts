import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

export async function middleware(req: NextRequest) {
  // Restrict routing for Dashboard
  const token = await getToken({ req });
  const session = token as unknown as any;
  const { pathname } = req.nextUrl.clone();
  const sessionHostPath = '/dashboard/host/' + session.id;
  const sessionOwnerPath = '/dashboard/owner/' + session.id;
  if (pathname.startsWith('/dashboard/host/')) {
    if (!pathname.startsWith(sessionHostPath)) {
      if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL(sessionHostPath, req.url));
      }
    }
  }
  if (pathname.startsWith('/dashboard/owner/')) {
    if (!pathname.startsWith(sessionOwnerPath)) {
      if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL(sessionOwnerPath, req.url));
      }
    }
  }
}

export const config = { matcher: ['/dashboard/:path*'] };
