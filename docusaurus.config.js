module.exports = {
  title: 'Automate your RTA matches',
  tagline: 'The newest RTA script for Summoners War',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RTA2Us',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Home',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Reviews',
          position: 'left'
        },
        {
          to: 'guide',
          label: 'Guide',
          position: 'left'
        },
        {
          href: '',
          label: 'Buy now',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: '',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RTA2Us, Bruno Ferreira`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
