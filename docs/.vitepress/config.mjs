import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tippwark",
  description: "Tippwark Development",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Kast', link: '/projects/kast' },
          { text: 'Driev', link: '/projects/driev' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tippwark' }
    ]
  }
})
