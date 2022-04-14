// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IEEE Embedded Sys. and IoT Docs ',
  tagline: 'Powering the next Gen with Embedded and IOT',
  url: 'https://github.com/',
  baseUrl: '/IEEE_ADGITM_Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/IEEEadgitm_logo.png',
  organizationName: 'Soumyajit7819', // Usually your GitHub org/user name.     CHANGE LATER
  projectName: 'IEEE_ADGITM_Docs', // Usually your repo name.                  CHANGE LATER
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Embedded Docs',
        logo: {
          alt: 'Embedded Docs',
          src: 'img/IEEEadgitm_black.png',
          srcDark: 'img/IEEEadgitm_white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Arduino Fundamentals',
            position: 'right',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'SIG', position: 'right'},
          {
            href: 'https://ieeeadgitm.com/',
            label: 'IEEE Adgitm Official Website',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/Arduino Fundamentals',
              },
              {
                label: 'SIG Posts',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'IEEE Adgitm Website',
                href: 'https://ieeeadgitm.com/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/ieeeadgitm/?hl=en',
              },
              {
                label: 'Linkedin',
                href: 'https://in.linkedin.com/company/ieee-adgitm-student-branch',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Channels',
                href: 'https://ieeeadgitm.com/channels/',
              },
            ],
          },
        ],
        logo: {
          alt: 'IEEE ADGITM Logo',
          src: 'img/IEEEadgitm_white2.png',
          href: 'https://ieeeadgitm.com/',
          width: 200,
          height: 200,
        },
        copyright: `Copyright © ${new Date().getFullYear()} IEEE ADGITM PES CHAPTER.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
