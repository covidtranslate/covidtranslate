import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Facebook, Twitter, Instagram } from 'react-feather'

export const TopNav = () => {
  const theme = useTheme()

  const {
    site: {
      siteMetadata: { twitter, facebook, instagram },
    },
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
          facebook
          instagram
        }
      }

      file(relativePath: { eq: "logo-shapes.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const facebookUrl =
    facebook && `https://www.facebook.com/${facebook.replace(/^\//, ``)}`
  const twitterUrl =
    twitter && `https://twitter.com/${twitter.replace(/^@/, ``)}`
  const instagramUrl =
    instagram && `https://instagram.com/${instagram.replace(/^\//, ``)}`

  return (
    <nav
      css={(theme) => css`
        height: 64px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 6px -4px ${theme.colors.darkgrey.bolder};
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          padding-left: 16px;
        `}
      >
        <img
          css={css`
            display: block;
            width: 30px;
          `}
          src={fixed.src}
          alt="COVID Translate Project"
        />
        <h1
          css={css`
            margin: 0;
            margin-left: 16px;
            margin-right: 16px;
            font-size: 2rem;
            line-height: 1em;
            font-weight: 600;
          `}
        >
          COVID Translate Project
        </h1>
        <span
          css={css`
            font-size: 0.75em;
            margin-top: 0.3em;
          `}
        >
          Spreading knowledge worldwide to fight COVID-19
        </span>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          a {
            margin-right: 1.5em;
          }
        `}
      >
        <a
          css={css`
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
          `}
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Facebook
            size={18}
            strokeWidth={1}
            color={theme.colors.darkgrey.base}
            fill={theme.colors.darkgrey.base}
          />
        </a>
        <a
          css={css`
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
          `}
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter
            size={18}
            strokeWidth={1}
            color={theme.colors.darkgrey.base}
            fill={theme.colors.darkgrey.base}
          />
        </a>
        <a
          css={css`
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
          `}
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram
            size={18}
            strokeWidth={2}
            color="#fff"
            fill={theme.colors.darkgrey.base}
          />
        </a>
      </div>
    </nav>
  )
}
