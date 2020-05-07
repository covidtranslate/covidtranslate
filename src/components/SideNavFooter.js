import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export const SideNavFooter = () => {
  return (
    <footer
      css={css`
        display: flex;
        flex-direction: column;
        padding: 24px 2em 0 1.3em;
        p {
          font-size: 1.3rem;
          margin-left: 10px;
        }
      `}
    >
      <p>
        <Link
          to="/"
          css={(theme) =>
            css`
              color: ${theme.colors.midgrey.bolder};
              :hover {
                text-decoration: none;
              }
            `
          }
        >
          COVID Translate Project
        </Link>{' '}
        &copy; {new Date().getFullYear()}
      </p>
      <p>Made possible by amazing volunteers ❤️</p>
    </footer>
  )
}
