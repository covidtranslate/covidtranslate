import React from 'react'
import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'

import { SiteLayout } from '@components/SiteLayout'

const NotFoundPage = () => {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <SiteLayout title={`Not Found - ${siteTitle}`} pathname="">
      <section
        css={css`
          flex-grow: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div
          css={css`
            margin-top: -64px;
          `}
        >
          <h1
            css={(theme) => css`
              margin: 0;
              color: ${theme.colors.lightgrey.base};
              font-size: 12vw;
              line-height: 1em;
              letter-spacing: -5px;
              opacity: 0.75;
            `}
          >
            404
          </h1>
          <p
            css={(theme) => css`
              margin: 0;
              color: ${theme.colors.midgrey.base};
              font-size: 3rem;
              line-height: 1.3em;
              font-weight: 400;
            `}
          >
            Page not found
          </p>
        </div>
      </section>
    </SiteLayout>
  )
}

export default NotFoundPage
