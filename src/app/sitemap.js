
import { ENV } from '@/lib/constants'

export default function sitemap() {
  const WEBSITE_URL = ENV.NEXT_PUBLIC_WEBSITE_URL

  const newNavMenu = [
    {
      link: '/',
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      link: '/about',
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      link: '/projects',
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      link: '/uses',
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]

  const routes = newNavMenu.map((route) => ({
    url: `${WEBSITE_URL}${route.link}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
  return [...routes]
}
