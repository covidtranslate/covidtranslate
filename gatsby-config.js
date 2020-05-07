/* eslint-env node */
const path = require('path')
const { oneLine } = require('common-tags')

let siteUrl = 'https://covidtranslate.org'
let siteHostname = 'covidtranslate.org'
if (process.env.CONTEXT === 'deploy-preview') {
  siteUrl = process.env.DEPLOY_PRIME_URL
  siteHostname = `deploy-preview-${process.env.REVIEW_ID}--covidtranslate.netlify.app`
} else if (process.env.CONTEXT === 'production') {
  siteUrl = process.env.URL
  siteHostname = 'covidtranslate.netlify.app'
}

module.exports = {
  siteMetadata: {
    title: 'COVID Translate Project',
    description: oneLine`COVID Translate Project is led by a team of
      volunteers around the world whose mission is to spread knowledge
      worldwide to fight COVID-19`,
    author: '@COVID_Translate',
    siteUrl,
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
          '@data': 'src/data',
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
        name: siteHostname,
        short_name: 'covidtranslate',
        start_url: '/',
        background_color: '#004aad',
        theme_color: '#1c82ad',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-162283365-1',
      },
    },
  ],
}
