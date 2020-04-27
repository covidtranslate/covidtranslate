import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { ChevronsRight, User } from 'react-feather'

import { PostStatus } from '@components/common'
import { POST_PROP_TYPE } from '@posts'

export const PostCard = ({ post }) => {
  return (
    <article
      css={(theme) => css`
        position: relative;
        flex: 1 1 301px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin: 0 0 40px;
        padding: 0 20px 40px;
        min-height: 220px;
        border-bottom: 1px solid ${theme.colors.lightgrey_b};
        background-size: cover;

        @media (max-width: 1170px) {
          margin-bottom: 5vw;
        }

        @media (max-width: 650px) {
          margin-bottom: 5vw;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <Link
          css={(theme) => css`
            padding: 0;
            position: relative;
            display: block;
            color: ${theme.colors.darkgrey};
            &:hover {
              text-decoration: none;
            }
          `}
          to={`/${post.slug}`}
        >
          <header
            css={css`
              margin: 0;
            `}
          >
            <div
              css={(theme) => css`
                margin: 0 0 0.2em;
                color: ${theme.colors.blue};
                font-size: 1.2rem;
                font-weight: 500;
                letter-spacing: 0.2px;
                text-transform: uppercase;
              `}
            >
              {post.tag.name}
            </div>
            <div
              css={css`
                display: flex;
              `}
            >
              <h2
                css={css`
                  margin: 0 0.4em 0.4em 0;
                  line-height: 1.15em;
                  transition: color 0.2s ease-in-out;

                  @media (max-width: 500px) {
                    font-size: 1.9rem;
                  }
                `}
              >
                {post.title}
              </h2>
              <PostStatus
                dateCreated={post.publishedAt}
                dateUpdated={post.updatedAt}
              />
            </div>
          </header>
          <section
            css={(theme) => css`
              max-width: 56em;
              color: ${theme.colors.midgrey};
              font-family: Georgia, serif;

              & p {
                margin-bottom: 1em;
              }

              @media (max-width: 500px) {
                font-size: 1.6rem;
              }
            `}
          >
            <p>{post.excerpt}</p>
          </section>
        </Link>
        <footer
          css={css`
            display: flex;
            align-items: flex-start;
            padding: 0;
            max-width: 56em;
          `}
        >
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              margin: 0 0 0 4px;
              padding: 0;
              list-style: none;
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
                to={`/${post.author.slug}`}
                css={(theme) => css`
                  display: block;
                  overflow: hidden;
                  margin: 0 0 0 -6px;
                  width: 34px;
                  height: 34px;
                  border: #fff 2px solid;
                  border-radius: 100%;
                  background: ${theme.colors.lightgrey_a};
                  object-fit: cover;
                `}
              >
                <User
                  size={30}
                  color="#fff"
                  fill="#fff"
                  css={css`
                    margin-top: 2px;
                  `}
                />
              </Link>
            </li>
          </ul>
          <div
            css={(theme) => css`
              flex: 1 1 50%;
              display: flex;
              flex-direction: column;
              margin: 2px 0 0 6px;
              color: ${theme.colors.midgrey_b};
              font-size: 1.2rem;
              line-height: 1.4em;
              font-weight: 400;
              letter-spacing: 0.2px;
              text-transform: uppercase;

              & span {
                margin: 0;
              }
              & a {
                color: ${theme.colors.darkgrey_b};
                font-weight: 600;
              }
            `}
          >
            <span>
              <Link to={`/${post.author.slug}`}>{post.author.name}</Link>
            </span>
            <span
              css={css`
                font-size: 1.2rem;
              `}
            >
              <time dateTime={post.publishedAt}>
                {post.publishedAt.toDateString()}
              </time>
            </span>
          </div>
          <div>
            <Link
              to={`/${post.slug}`}
              css={(theme) => css`
                color: ${theme.colors.blue};
                transition: all 0.2s ease-in-out;
                &:hover {
                  color: ${theme.colors.blue_c};
                  text-decoration: none;
                }
              `}
            >
              Read more
              <ChevronsRight
                size={16}
                css={css`
                  margin-left: 4px;
                  margin-bottom: 2px;
                `}
              />
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}

PostCard.propTypes = {
  post: POST_PROP_TYPE,
}
