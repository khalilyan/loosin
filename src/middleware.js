import { NextResponse } from 'next/server';

const locales = ['en', 'am', 'ru'];
const defaultLocale = 'en';

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  for (const language of acceptLanguage.split(',')) {
    const [lang] = language.split(';');
    const locale = lang.substring(0, 2).toLowerCase();
    if (locales.includes(locale)) {
      return locale;
    }
  }
  return defaultLocale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname is exactly '/' (root)
  if (pathname === '/') {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Check if pathname is missing a locale prefix
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip internal paths
    '/((?!api|_next/static|_next/image|favicon.ico|images|public).*)',
  ],
};
