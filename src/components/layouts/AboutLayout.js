import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import { NavBar, Footer, PostContent } from '@components/common'
import {
  SiteWrapper,
  OuterContainer,
  InnerContainer,
} from '@components/layouts'

export const AboutLayout = ({ children, pageTitle }) => {
  const {
    site: {
      siteMetadata: { title },
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
    <SiteWrapper title={`About - ${title}`} pathname="about">
      <header>
        <OuterContainer fixedToTop>
          <InnerContainer>
            <NavBar showTitle />
          </InnerContainer>
        </OuterContainer>
      </header>
      <main
        css={css`
          margin-top: 64px;
          background: #fff;
          position: relative;
          padding: 0 5vw 4vw;
          flex-grow: 1;
        `}
      >
        <InnerContainer>
          <article>
            <header
              css={css`
                position: relative;
                margin: 0 auto;
                padding: 70px 170px 50px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;

                @media (max-width: 1170px) {
                  padding: 60px 11vw 50px;
                }

                @media (max-width: 800px) {
                  padding-right: 5vw;
                  padding-left: 5vw;
                }

                @media (max-width: 500px) {
                  padding: 20px 0 35px;
                }
              `}
            >
              <h1
                css={(theme) => css`
                  margin: 0 0 0.2em;
                  color: ${theme.colors.darkgrey_a};

                  @media (max-width: 500px) {
                    margin-top: 0.2em;
                    font-size: 4.2rem;
                    line-height: 1.05em;
                  }
                `}
              >
                {pageTitle}
              </h1>
            </header>
            <PostContent>{children}</PostContent>
          </article>
        </InnerContainer>
      </main>
      <Footer />
    </SiteWrapper>
  )
}

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
}
