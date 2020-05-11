import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { User } from 'react-feather'

import { PostNav } from '@components/PostNav'
import { propType as AuthorPropType } from '@data/authors'

export const Post = ({
  title,
  author,
  publishedAt,
  updatedAt,
  anchors = [],
  focus,
  children,
}) => {
  return (
    <>
      <section
        css={(theme) => css`
          flex-grow: 1;
          flex-shrink: 5;
          margin: 3rem 6rem;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          @media (max-width: ${theme.breakpoints.md}) {
            margin: 3rem 3rem;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
          `}
        >
          <header>
            <h1>{title}</h1>
            <hr />
            {author && (
              <section
                css={css`
                  flex-grow: 1;
                  display: flex;
                  align-items: flex-start;
                `}
              >
                <ul
                  css={css`
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 0 0 4px;
                    padding: 0 12px 0 0;
                    list-style: none;
                    justify-content: flex-start;
                  `}
                >
                  <li
                    css={css`
                      position: relative;
                      flex-shrink: 0;
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    <Link
                      to={`/${author.link}`}
                      css={(theme) => css`
                        display: block;
                        overflow: hidden;
                        margin: 0 -4px 0 -6px;
                        width: 40px;
                        height: 40px;
                        border: #fff 2px solid;
                        border-radius: 100%;
                        background: ${theme.colors.lightgrey.base};
                        object-fit: cover;

                        @media (max-width: ${theme.breakpoints.xs}) {
                          width: 36px;
                          height: 36px;
                        }
                      `}
                    >
                      <User
                        color="#fff"
                        fill="#fff"
                        css={(theme) => css`
                          margin-top: 2px;
                          width: 36px;
                          height: 36px;

                          @media (max-width: ${theme.breakpoints.xs}) {
                            width: 32px;
                            height: 32px;
                          }
                        `}
                      />
                    </Link>
                  </li>
                </ul>
                <section
                  css={(theme) => css`
                    margin: 2px 0 0;
                    color: ${theme.colors.midgrey.bolder};
                    font-size: 1.2rem;
                    line-height: 1.2em;
                    letter-spacing: 0.2px;
                    text-transform: uppercase;

                    & h4 {
                      margin: 0 0 3px;
                      font-size: 1.3rem;
                      line-height: 1.4em;
                      font-weight: 500;
                    }

                    & h4 a {
                      color: ${theme.colors.darkgrey.lighter};
                    }

                    & h4 a:hover {
                      color: ${theme.colors.darkgrey.bolder};
                      text-decoration: none;
                    }
                  `}
                >
                  <h4>
                    <a href={`${author.link}`}>{author.name}</a>
                  </h4>
                  <div>
                    <time dateTime={publishedAt.toISOString()}>
                      {publishedAt.toDateString()}&nbsp;
                    </time>
                  </div>
                </section>
              </section>
            )}
          </header>
          {children}
        </div>
        {updatedAt && (
          <p
            css={css`
              text-align: right;
            `}
          >
            <small>
              <i>
                Last updated on {updatedAt.toLocaleDateString('en')}{' '}
                {updatedAt.toLocaleTimeString('en')} EST
              </i>
            </small>
          </p>
        )}
      </section>
      <PostNav top={title} anchors={anchors} focus={focus} />
    </>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  author: AuthorPropType,
  publishedAt: PropTypes.instanceOf(Date),
  updatedAt: PropTypes.instanceOf(Date),
  anchors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  focus: PropTypes.string,
}
