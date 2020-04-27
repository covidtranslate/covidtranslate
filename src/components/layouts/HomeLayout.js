import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import { NavBar, Footer } from '@components/common'
import { SiteWrapper } from '@components/layouts/SiteWrapper'
import { OuterContainer } from '@components/layouts/OuterContainer'
import { InnerContainer } from '@components/layouts/InnerContainer'

export const HomeLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }

      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 110, height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <SiteWrapper title={`Home - ${title}`} pathname="">
      <header
        css={css`
          margin-bottom: 7vw;
        `}
      >
        <OuterContainer>
          <InnerContainer>
            <NavBar />
            <div
              css={css`
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 10vw 0 20px;
                @media (max-width: 500px) {
                  flex-direction: column;
                  align-items: center;
                  min-height: unset;
                }
              `}
            >
              <img
                css={css`
                  display: block;
                  width: 110px;
                  height: 110px;
                  box-shadow: 0 0 0 6px hsla(0, 0%, 100%, 0.1);
                `}
                src={fixed.src}
                alt="COVID Translate Project"
              />
              <div
                css={(theme) => css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  margin: 4px 0 0 32px;

                  & h1 {
                    font-size: 5rem;
                    line-height: 1em;
                    font-weight: 600;
                    margin: 0 0 0 -4px;
                  }

                  & h2 {
                    color: ${theme.colors.midgrey};
                    margin: 8px 0 0;
                    max-width: 46em;
                    font-size: 2rem;
                    line-height: 1.3em;
                    font-weight: 400;
                  }

                  @media (max-width: 500px) {
                    align-items: center;
                    margin: 16px 0 0;
                    h1 {
                      margin: 0;
                      font-size: 4.2rem;
                      text-align: center;
                    }
                    h2 {
                      font-size: 1.8rem;
                      line-height: 1.3em;
                      letter-spacing: 0;
                      text-align: center;
                    }
                  }
                `}
              >
                <h1>COVID Translate Project</h1>
                <h2>Spreading knowledge worldwide to fight COVID-19</h2>
              </div>
            </div>
          </InnerContainer>
        </OuterContainer>
      </header>

      <main
        css={css`
          flex-grow: 1;
        `}
      >
        <OuterContainer>
          <InnerContainer>{children}</InnerContainer>
        </OuterContainer>
      </main>
      <Footer />
    </SiteWrapper>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
