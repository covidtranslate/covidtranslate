import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { PostNavItem } from '@components/PostNavItem'

export const PostNav = ({ top, anchors = [], focus }) => {
  return (
    <section
      css={css`
        flex: 0 0 240px;
      `}
    >
      <aside
        css={css`
          width: 100%;
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            flex: 1;
            overflow: auto;
            padding-top: 36px;
          `}
        >
          <ul
            css={(theme) => css`
              margin: 0;
              list-style: none;
              padding-top: 2px;
              padding-bottom: 2px;
              border-left: 1px solid ${theme.colors.lightgrey.base};
            `}
          >
            <li
              css={css`
                margin: 0;
              `}
            >
              <a
                href="#"
                css={(theme) => css`
                  color: ${theme.colors.midgrey.bolder};
                  font-weight: 600;
                  font-size: 0.9em;
                  :hover {
                    text-decoration: none;
                  }
                `}
              >
                {top}
              </a>
              {anchors.length > 0 && (
                <ul
                  css={css`
                    margin: 0;
                    margin-top: 0.25em;
                    padding-left: 0.5em;
                    list-style: none;
                  `}
                >
                  {anchors.map((a) => {
                    return (
                      <PostNavItem
                        key={a.id}
                        anchor={a}
                        isFocused={focus === a.id}
                      />
                    )
                  })}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </section>
  )
}

PostNav.propTypes = {
  top: PropTypes.string.isRequired,
  anchors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  focus: PropTypes.string,
}
