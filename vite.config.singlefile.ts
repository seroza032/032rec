import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Every font ships as woff2 + woff, and every subset gets inlined whether the
// site uses it or not. Base64'd that roughly triples the font weight for no
// benefit: anything that can open this file supports woff2, and the content is
// Ukrainian + English only.
//
// Subsets are identified by the leading value of their unicode-range, since CSS
// minification strips the comments @fontsource labels them with. Codepoints are
// compared with leading zeros removed — the minifier rewrites U+0102 as U+102.
// Anything with no unicode-range at all (the Material Icons font) is left alone.
const DROP_SUBSETS = [
  'U+102-103', // vietnamese
  'U+370-377', // greek
  'U+1F00-1FFF', // greek-ext
  'U+460-52F', // cyrillic-ext
  'U+100-2BA', // latin-ext
]

const normalizeRange = (range: string) => range.replace(/U\+0*([0-9A-F])/gi, 'U+$1')

function standaloneHtml(): Plugin {
  return {
    name: 'standalone-html',
    enforce: 'post',
    generateBundle(_options, bundle) {
      // public/ assets are copied verbatim and never inlined by Vite, so the
      // favicon would otherwise stay a sibling file the HTML depends on.
      const favicon = readFileSync('public/favicon.svg').toString('base64')

      for (const asset of Object.values(bundle)) {
        if (asset.type !== 'asset' || !asset.fileName.endsWith('.html')) continue
        let html = asset.source as string

        html = html.replace(/\.?\/favicon\.svg/, `data:image/svg+xml;base64,${favicon}`)

        // Keep woff2, drop the redundant woff fallback from every src list.
        html = html.replace(/,\s*url\(data:font\/woff;base64,[^)]*\)\s*format\((["'])woff\1\)/g, '')

        html = html.replace(/@font-face\{[^}]*\}/g, (block) => {
          const range = block.match(/unicode-range:\s*([^;}]+)/)?.[1]
          if (!range) return block
          const normalized = normalizeRange(range)
          return DROP_SUBSETS.some((prefix) => normalized.startsWith(prefix)) ? '' : block
        })

        asset.source = html
      }
    },
  }
}

// Builds the whole site into one standalone HTML file (fonts, images and all)
// so it can be opened straight from disk or handed to someone.
// Usage: npm run build:singlefile  ->  dist-singlefile/index.html
export default defineConfig({
  base: './',
  // The favicon gets inlined from source, so nothing needs copying alongside.
  publicDir: false,
  plugins: [react(), tailwindcss(), viteSingleFile(), standaloneHtml()],
  build: {
    outDir: 'dist-singlefile',
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    cssCodeSplit: false,
  },
})
