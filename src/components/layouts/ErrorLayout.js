import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import { NavBar, Footer } from '@components/common'
import {
  SiteWrapper,
  OuterContainer,
  InnerContainer,
} from '@components/layouts'

export const ErrorLayout = ({ children }) => {
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
    <SiteWrapper title={`Page not found - ${title}`} pathname="">
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
          position: relative;
          padding: 14vw 4vw 6vw;
          flex-grow: 1;
          @media (max-width: 800px) {
            padding-top: 24vw;
          }
          @media (max-width: 500px) {
            padding-top: 28vw;
          }
        `}
      >
        <InnerContainer>{children}</InnerContainer>
      </main>
      <Footer />
    </SiteWrapper>
  )
}

ErrorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
