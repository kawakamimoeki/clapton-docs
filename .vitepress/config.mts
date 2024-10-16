import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clapton",
  description: "A Ruby on Rails plugin for building web apps with pure Ruby only (no JavaScript and no HTML templates).",
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: "Overview", link: "/docs" },
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
          { text: 'Multiple Components', link: '/docs/tutorial/multiple-components' },
          { text: 'Effect', link: '/docs/tutorial/effect' },
          { text: "Testing", link: '/docs/tutorial/testing' },
          { text: "Action Cable", link: "/docs/tutorial/action-cable.md" }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Component', link: '/docs/reference/component' },
          { text: '`c` Method', link: '/docs/reference/c-method' },
          { text: 'State', link: '/docs/reference/state' },
          { text: 'Helper', link: '/docs/reference/helper' },
          { text: 'Events', link: '/docs/reference/events' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kawakamimoeki/clapton' }
    ]
  }
})
