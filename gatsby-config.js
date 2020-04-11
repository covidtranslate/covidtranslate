/* eslint-env node */

const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'COVID Translate Project',
    description: 'Spreading knowledge worldwide to fight COVID-19',
    author: '@COVID_Translate',
    siteUrl: 'https://covidtranslate.org',
    facebook: 'covidtranslateofficial',
    twitter: 'COVID_Translate',
    instagram: 'covid_translate',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@posts': 'src/posts',
          '@styles': 'src/styles',
          '@hooks': 'src/hooks',
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'covidtranslate.org',
        short_name: 'covidtranslate',
        start_url: '/',
        background_color: '#004aad',
        theme_color: '#1c82ad',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-162283365-1',
      },
    },
  ],
}
