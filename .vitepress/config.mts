import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clapton",
  description: "A Ruby on Rails plugin for building web apps with pure Ruby only (no JavaScript and no HTML templates).",
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/docs' },
      { text: 'Demo', link: 'https://demo.claptonrb.org' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/docs/getting-started/installation' },
          { text: 'Setup', link: '/docs/getting-started/setup' },
        ]
      },
      {
        text: 'Tutorial',
        items: [
          { text: 'Hello World', link: '/docs/tutorial/hello-world' },
          { text: 'Shorthand', link: '/docs/tutorial/shorthand' },
          { text: 'State', link: '/docs/tutorial/state' },
          { text: 'Action', link: '/docs/tutorial/action' },
          { text: 'Streaming', link: '/docs/tutorial/streaming' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kawakamimoeki/clapton' }
    ]
  }
})
