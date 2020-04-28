import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { Facebook, Twitter, Instagram, ExternalLink } from 'react-feather'

const Z_INDEX_HIGH = 10
const Z_INDEX_LOW = 1

export const NavBar = ({ showTitle = false }) => {
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
    <nav
      css={css`
        height: 64px;
        font-size: 1.3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        overflow: hidden;
        z-index: ${Z_INDEX_LOW};
        position: relative;
      `}
    >
      <div
        css={css`
          position: relative;
          flex: 1 0 auto;
          display: flex;
        `}
      >
        <div
          css={css`
            flex: 1 0 auto;
            display: flex;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            margin-right: 10px;
            padding: 10px 0 80px;
            font-weight: 500;
            letter-spacing: 0.2px;
            text-transform: uppercase;
            white-space: nowrap;
            -ms-overflow-scrolling: touch;

            @media (max-width: 700px) {
              margin-right: 0;
              padding-left: 5vw;
            }
          `}
        >
          {showTitle && (
            <Link
              to="/"
              css={(theme) => css`
                flex-shrink: 0;
                display: inline-block;
                margin-right: 32px;
                padding: 12px 0;
                color: ${theme.colors.darkgrey};
                font-size: 1.7rem;
                line-height: 1.8rem;
                font-weight: bold;
                letter-spacing: -0.5px;
                text-transform: none;
                position: relative;
                z-index: ${Z_INDEX_LOW};
                &:hover {
                  text-decoration: none;
                }
                @media (max-width: 700px) {
                  margin-right: 48px;
                }
              `}
            >
              {title}
            </Link>
          )}
          <div
            css={(theme) => css`
              align-self: flex-start;
              position: relative;
              ul {
                display: flex;
                margin: 0 0 0 -12px;
                padding: 0;
                list-style: none;
                transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
                position: absolute;
                z-index: ${Z_INDEX_HIGH};
              }
              li {
                display: block;
                margin: 0;
                padding: 0;
              }
              @media (max-width: 700px) {
                li:first-of-type > a {
                  margin-left: -20px;
                }
              }
              a {
                position: relative;
                display: block;
                padding: 12px;
                color: ${theme.colors.darkgrey};
                opacity: 0.8;
                transition: opacity 0.35s ease-in-out;
              }
              a:hover {
                text-decoration: none;
                opacity: 1;
              }
              a:before {
                content: '';
                position: absolute;
                right: 100%;
                bottom: 8px;
                left: 12px;
                height: 1px;
                background: ${theme.colors.darkgrey};
                opacity: 0.25;
                transition: all 0.35s ease-in-out;
              }
              a:hover:before {
                right: 12px;
                opacity: 0.5;
              }
            `}
          >
            <ul role="menu">
              <li role="menuitem">
                <Link to="/">Home</Link>
              </li>
              <li role="menuitem">
                <Link to="/about">About</Link>
              </li>
              <li role="menuitem">
                <a
                  href="https://forms.gle/9yakwuCyC6GNCbNF9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join us!&nbsp;
                  <ExternalLink
                    size={14}
                    css={css`
                      margin-bottom: 4px;
                    `}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        css={css`
          flex: 0 1 auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 64px;
          padding: 10px 0;

          @media (max-width: 700px) {
            display: none;
          }
        `}
      >
        <div
          css={css`
            flex-shrink: 0;
            display: flex;
            align-items: center;
          `}
        >
          {facebook && (
            <a
              href={facebookUrl}
              css={(theme) => css`
                display: inline-block;
                margin: 0;
                padding: 0 10px;
                opacity: 0.8;
                &:hover {
                  opacity: 1;
                }
                & svg {
                  margin-bottom: 4px;
                  fill: ${theme.colors.darkgrey};
                  color: ${theme.colors.darkgrey};
                  stroke-width: 1;
                }
              `}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <Facebook size={18} />
            </a>
          )}
          {twitter && (
            <a
              href={twitterUrl}
              css={(theme) => css`
                display: inline-block;
                margin: 0;
                padding: 0 10px;
                opacity: 0.8;
                &:hover {
                  opacity: 1;
                }
                & svg {
                  margin-bottom: 4px;
                  fill: ${theme.colors.darkgrey};
                  color: ${theme.colors.darkgrey};
                  stroke-width: 1;
                }
              `}
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <Twitter size={18} />
            </a>
          )}
          {instagram && (
            <a
              href={instagramUrl}
              css={(theme) => css`
                display: inline-block;
                margin: 0;
                padding: 0 10px;
                opacity: 0.8;
                &:hover {
                  opacity: 1;
                }
                & svg {
                  margin-bottom: 4px;
                  fill: ${theme.colors.darkgrey};
                  color: #fff;
                  stroke-width: 2;
                }
              `}
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  showTitle: PropTypes.bool,
}
