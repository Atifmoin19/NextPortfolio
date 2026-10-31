import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Preload the two fonts the hero paints with (Archivo for the headline, Schibsted
// Grotesk 400 for body copy) so the first paint does not wait on the CSS to discover them.
const HERO_FONTS = [/archivo-latin-wdth-normal-.*\.woff2$/, /schibsted-grotesk-latin-400-normal-.*\.woff2$/]

function preloadHeroFonts(): Plugin {
  return {
    name: 'preload-hero-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        const files = Object.keys(ctx.bundle ?? {}).filter((f) => HERO_FONTS.some((re) => re.test(f)))
        return files.map((f) => ({
          tag: 'link',
          attrs: { rel: 'preload', href: `/${f}`, as: 'font', type: 'font/woff2', crossorigin: '' },
          injectTo: 'head' as const,
        }))
      },
    },
  }
}

// A case-study link opened directly (/#/project/...) would otherwise fetch the page chunk
// only after the main bundle has run. This starts both downloads together.
function preloadCaseStudyRoute(): Plugin {
  return {
    name: 'preload-case-study-route',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        const chunk = Object.values(ctx.bundle ?? {}).find(
          (c) => c.type === 'chunk' && c.facadeModuleId?.endsWith('/src/pages/ProjectDetail.tsx'),
        )
        if (!chunk || chunk.type !== 'chunk') return []
        const files = [chunk.fileName, ...chunk.imports, ...(chunk.viteMetadata?.importedCss ?? [])]
        const js = `if(location.hash.indexOf('#/project/')===0){${JSON.stringify(files)}.forEach(function(f){var l=document.createElement('link');var css=/\\.css$/.test(f);l.rel=css?'preload':'modulepreload';if(css)l.as='style';l.href='/'+f;document.head.appendChild(l)})}`
        return [{ tag: 'script', children: js, injectTo: 'head' as const }]
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preloadHeroFonts(), preloadCaseStudyRoute()],
  resolve: {
    alias: {
      store: path.resolve(__dirname, 'src/store'),
      pages: path.resolve(__dirname, 'src/pages'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
})
