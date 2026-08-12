import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = 'https://fontwow.github.io'
const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

writeFileSync(resolve('public/sitemap.xml'), sitemap)
