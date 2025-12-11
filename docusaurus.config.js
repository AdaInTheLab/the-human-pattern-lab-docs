// @ts-check
const config = {
  title: 'The Human Pattern Lab',
  tagline: 'Chaos, patterns, and creatures with opinions.',
  favicon: 'img/favicon.ico',

  url: 'https://thehumanpatternlab.com',
  baseUrl: '/docs/',

  organizationName: 'human-pattern-lab',
  projectName: 'lab-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'The Human Pattern Lab',
      logo: { alt: 'Lab Logo', src: 'img/logo.png' },
      items: [
        { to: '/getting-started', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Lab',
          items: [
            {
              label: 'Docs',
              to: '/getting-started',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Main Site',
              href: 'https://thehumanpatternlab.com',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com', // swap for your real channel
            },
          ],
        },
        {
          title: 'Meta',
          items: [
            {
              label: 'Contributing',
              to: '/contributing',
            },
          ],
        },
      ],
      copyright: `Built with curiosity, caffeine, and questionable mascot oversight. © ${new Date().getFullYear()} The Human Pattern Lab.`,
    },
  },
};

module.exports = config;
