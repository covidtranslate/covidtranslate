import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { NavBar, Footer } from '@components/common'
import { SiteWrapper } from '@components/layouts/SiteWrapper'
import { OuterContainer } from '@components/layouts/OuterContainer'
import { InnerContainer } from '@components/layouts/InnerContainer'

export const TagLayout = ({ children, numberOfPosts, tag }) => {
  return (
    <SiteWrapper title={tag.name} pathname={tag.slug}>
      <header>
        <OuterContainer fixedToTop>
          <InnerContainer>
            <NavBar showTitle />
          </InnerContainer>
        </OuterContainer>
        <OuterContainer
          css={(theme) => css`
            color: ${theme.colors.darkgrey};
            background: #fff;
            opacity: 1;
            position: relative;
            margin-top: 64px;
          `}
        >
          <InnerContainer
            css={(theme) => css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
              align-items: stretch;
              padding: 5vw 0 10px;
              border-bottom: 1px solid ${theme.colors.lightgrey_b};
              min-height: 200px;
              max-height: 600px;

              @media (max-width: 900px) {
                padding-bottom: 9vw;
              }

              @media (max-width: 500px) {
                padding: 12vw 0 20px;
                min-height: unset;
              }
            `}
          >
            <h1
              css={css`
                margin: 0 0 0 -2px;
                padding: 0;
                font-size: 5rem;
                line-height: 1em;
                font-weight: 600;

                @media (max-width: 500px) {
                  font-size: 4.2rem;
                  margin-bottom: 12px;
                }
              `}
            >
              {tag.name}
            </h1>
            <h2
              css={(theme) => css`
                margin: 0;
                padding: 5px 0;
                font-size: 2.1rem;
                line-height: 1.4em;
                font-weight: 400;
                color: ${theme.colors.midgrey};
                opacity: 1;
              `}
            >
              {tag.description ||
                `A collection of ${
                  (numberOfPosts > 0 &&
                    (numberOfPosts === 1
                      ? `1 post`
                      : `${numberOfPosts} posts`)) ||
                  `posts`
                }`}
            </h2>
          </InnerContainer>
        </OuterContainer>
      </header>
      <main
        css={css`
          background: #fff;
          position: relative;
          padding: 0 5vw 4vw;
          flex-grow: 1;
        `}
      >
        <InnerContainer>{children}</InnerContainer>
      </main>
      <Footer />
    </SiteWrapper>
  )
}

TagLayout.propTypes = {
  children: PropTypes.node.isRequired,
  numberOfPosts: PropTypes.number.isRequired,
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}
