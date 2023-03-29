import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://0x3147cooper.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  })
}
