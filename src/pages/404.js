import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { ErrorLayout } from '@components/layouts'

const NotFoundPage = () => {
  return (
    <ErrorLayout>
      <section
        css={(theme) => css`
          padding-bottom: 10vw;
          border-bottom: 1px solid ${theme.colors.lightgrey_a};
          text-align: center;

          @media (max-width: 800px) {
            padding-bottom: 16vw;
          }

          @media (max-width: 500px) {
            padding-bottom: 14vw;
          }
        `}
      >
        <h1
          css={(theme) => css`
            margin: 0;
            color: ${theme.colors.lightgrey};
            font-size: 12vw;
            line-height: 1em;
            letter-spacing: -5px;
            opacity: 0.75;

            @media (max-width: 800px) {
              font-size: 11.2rem;
            }
          `}
        >
          404
        </h1>
        <p
          css={(theme) => css`
            margin: 0;
            color: ${theme.colors.midgrey};
            font-size: 3rem;
            line-height: 1.3em;
            font-weight: 400;

            @media (max-width: 800px) {
              margin: 5px 0 0 0;
              font-size: 1.8rem;
            }
          `}
        >
          Page not found
        </p>
        <Link
          to="/"
          css={css`
            display: inline-block;
            margin-top: 5px;
          `}
        >
          Go to the front page →
        </Link>
      </section>
    </ErrorLayout>
  )
}

export default NotFoundPage
