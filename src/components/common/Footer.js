import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { OuterContainer, InnerContainer } from '@components/layouts'

export const Footer = () => {
  const {
    site: {
      siteMetadata: { title, twitter, facebook, instagram },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          twitter
          facebook
          instagram
        }
      }
    }
  `)

  const twitterUrl =
    twitter && `https://twitter.com/${twitter.replace(/^@/, ``)}`
  const facebookUrl =
    facebook && `https://www.facebook.com/${facebook.replace(/^\//, ``)}`

  const instagramUrl =
    instagram && `https://instagram.com/${instagram.replace(/^\//, ``)}`

  return (
    <footer
      css={(theme) => css`
        position: relative;
        padding-top: 20px;
        padding-bottom: 60px;
        color: #fff;
        background: ${theme.colors.darkgrey_a};
      `}
    >
      <OuterContainer>
        <InnerContainer
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            color: hsla(0, 0%, 100%, 0.7);
            font-size: 1.3rem;
            & a {
              color: hsla(0, 0%, 100%, 0.7);
            }
            & a:hover {
              color: #fff;
              text-decoration: none;
            }
            @media (max-width: 650px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          <section
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              @media (max-width: 650px) {
                align-items: center;
              }
            `}
          >
            <p>
              <Link to="/">{title}</Link> &copy; {new Date().getFullYear()}
            </p>
            <p>Made possible by amazing volunteers ❤️</p>
          </section>

          <nav
            css={css`
              display: flex;
              & a {
                position: relative;
                margin-left: 20px;
              }
              & a:before {
                content: '';
                position: absolute;
                top: 11px;
                left: -11px;
                display: block;
                width: 2px;
                height: 2px;
                background: #fff;
                border-radius: 100%;
              }
              & a:first-of-type:before {
                display: none;
              }

              @media (max-width: 650px) {
                & a:first-of-type {
                  margin-left: 0;
                }
              }
            `}
          >
            <Link to="/">Latest Posts</Link>
            {facebook && <a href={facebookUrl}>Facebook</a>}
            {twitter && <a href={twitterUrl}>Twitter</a>}
            {instagram && <a href={instagramUrl}>Instagram</a>}
          </nav>
        </InnerContainer>
      </OuterContainer>
    </footer>
  )
}
