import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { User } from 'react-feather'

import {
  NavBar,
  Footer,
  PostContent,
  LinkCTASection,
  LINK_ACTIONS_PROP_TYPE,
} from '@components/common'
import {
  SiteWrapper,
  OuterContainer,
  InnerContainer,
} from '@components/layouts'
import { POST_PROP_TYPE } from '@posts'

export const PostLayout = ({ children, post, downloads }) => {
  return (
    <SiteWrapper title={post.title} pathname={post.slug}>
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
              <section
                css={(theme) => css`
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  color: ${theme.colors.midgrey};
                  font-size: 1.3rem;
                  line-height: 1.4em;
                  font-weight: 600;
                  text-transform: uppercase;
                `}
              >
                <Link to={`/${post.tag.slug}`}>{post.tag.name}</Link>
              </section>
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
                {post.title}
              </h1>
              <div
                css={(theme) => css`
                  display: flex;
                  justify-content: space-between;
                  margin: 35px 0 0;
                  padding-top: 15px;
                  border-top: 1px solid ${theme.colors.lightgrey_a};

                  @media (max-width: 500px) {
                    margin-top: 20px;
                  }
                `}
              >
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
                        to={`/${post.author.slug}`}
                        className="author-avatar author-profileimage"
                        css={(theme) => css`
                          display: block;
                          overflow: hidden;
                          margin: 0 -4px 0 -6px;
                          width: 40px;
                          height: 40px;
                          border: #fff 2px solid;
                          border-radius: 100%;
                          background: ${theme.colors.lightgrey_a};
                          object-fit: cover;

                          @media (max-width: 500px) {
                            width: 36px;
                            height: 36px;
                          }
                        `}
                      >
                        <User
                          color="#fff"
                          fill="#fff"
                          css={css`
                            margin-top: 2px;
                            width: 36px;
                            height: 36px;

                            @media (max-width: 500px) {
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
                      color: ${theme.colors.midgrey_b};
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
                        color: ${theme.colors.darkgrey_c};
                      }

                      & h4 a:hover {
                        color: ${theme.colors.darkgrey};
                      }

                      @media (max-width: 500px) {
                        font-size: 1.2rem;

                        & h4 {
                          margin-bottom: 2px;
                          font-size: 1.2rem;
                        }
                      }
                    `}
                  >
                    <h4>
                      <Link to={`/${post.author.slug}`}>
                        {post.author.name}
                      </Link>
                    </h4>
                    <div>
                      <time dateTime={post.publishedAt.toISOString()}>
                        {post.publishedAt.toDateString()}&nbsp;
                      </time>
                    </div>
                  </section>
                </section>
              </div>
            </header>
            <PostContent>
              <LinkCTASection actions={downloads} />
              <p>
                <i>
                  Last updated on {post.updatedAt.toLocaleDateString('en')}{' '}
                  {post.updatedAt.toLocaleTimeString('en')}
                </i>
              </p>
              {children}
            </PostContent>
          </article>
        </InnerContainer>
      </main>
      <Footer />
    </SiteWrapper>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
  post: POST_PROP_TYPE,
  downloads: LINK_ACTIONS_PROP_TYPE,
}
