import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

interface getNewRouteProps {
  req: NextRequest;
  pathname: string;
  matchPath: string;
  id: string;
}

function getNewRoute({ req, pathname, matchPath, id }: getNewRouteProps) {
  if (pathname.startsWith(matchPath)) {
    const sessionPath = matchPath + id;
    if (!pathname.startsWith(sessionPath)) {
      if (req.nextUrl.pathname.startsWith(matchPath)) {
        return sessionPath;
      }
    }
  }
  return null;
}

export async function middleware(req: NextRequest) {
  // Restrict routing for Dashboard

  const token = await getToken({ req });
  const session = token as unknown as any;
  const { pathname } = req.nextUrl.clone();
  console.log('Middleware: ', { pathname });

  // API
  // Users
  // api/users/[:id]
  const apiUser = getNewRoute({
    req: req,
    pathname: pathname,
    matchPath: '/api/users/',
    id: session.id,
  });

  if (apiUser) {
    return NextResponse.redirect(new URL(apiUser, req.url));
  }

  // Dashboards
  // Hosts
  // dashboard/host/[:id]
  const dashboardUser = getNewRoute({
    req: req,
    pathname: pathname,
    matchPath: '/dashboard/host/',
    id: session.id,
  });

  if (dashboardUser) {
    return NextResponse.redirect(new URL(dashboardUser, req.url));
  }

  // Owners
  // dashboard/owner/[:id]
  const dashboardOwner = getNewRoute({
    req: req,
    pathname: pathname,
    matchPath: '/dashboard/owner/',
    id: session.id,
  });

  if (dashboardOwner) {
    return NextResponse.redirect(new URL(dashboardOwner, req.url));
  }
}

export const config = { matcher: ['/dashboard/:path*', '/api/:path*'] };
