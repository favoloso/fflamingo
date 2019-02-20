/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'fflamingo', // Title for your website.
  tagline:
    'Framework per lo sviluppo di applicazioni web basato su React e GraphQL',
  url: 'https://fflamingo.org', // Your website URL
  baseUrl: '/',
  cname: 'fflamingo.org',

  projectName: 'fflamingo',
  organizationName: 'favoloso',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'main', label: 'Documentazione' },
    { page: 'help', label: 'Aiuto' },
    { blog: false, label: 'Blog' }
  ],

  headerIcon: 'img/fflamingo-logo-white-short.svg',
  footerIcon: 'img/fflamingo-logo-white-short.svg',
  // favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#BE2EDD',
    secondaryColor: '#4834D4'
  },
  fonts: {
    mainFont: ['-apple-system', 'system-ui']
  },

  copyright: `Copyright © ${new Date().getFullYear()} Favoloso Team Srl`,

  highlight: {
    theme: 'default'
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  cleanUrl: true
};

module.exports = siteConfig;
