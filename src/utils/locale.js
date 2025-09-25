'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function LocaleLink({ children, href, lang, ...rest }) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  segments[1] = lang
  const localizedHref = segments.join('/')

  return (
    <Link href={localizedHref} {...rest}>
      {children}
    </Link>
  )
}

export function useLocale() {
  const pathname = usePathname()
  const segments = pathname.split('/')
  return segments[1] || 'en'
}

export const locales = ['en', 'am', 'ru']

export function getLocalizedPath(path, locale) {
  if (path.startsWith('/')) {
    const segments = path.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  return `/${locale}${path}`
}