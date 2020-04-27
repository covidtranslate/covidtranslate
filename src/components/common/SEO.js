import React from 'react'
import PropTypes from 'prop-types'
import Url from 'url'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, pathname, description }) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        title: siteTitle,
        description: siteDescription,
        twitter,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            twitter
          }
        }
      }
    `
  )

  const canonical = Url.resolve(siteUrl, pathname)
  const metaDescription = description || siteDescription

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      defaultTitle={siteTitle}
      link={[{ rel: 'canonical', href: canonical }]}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:site_name',
          content: siteTitle,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: canonical,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: twitter,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:url',
          content: canonical,
        },
      ]}
    />
  )
}

SEO.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SEO
