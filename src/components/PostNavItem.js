import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

export const PostNavItem = ({ anchor, isFocused = false }) => {
  const theme = useTheme()

  const { id, label } = anchor

  return (
    <li
      css={css`
        margin: 0;
      `}
    >
      <a
        href={`#${id}`}
        css={[
          css`
            color: ${theme.colors.midgrey.bolder};
            font-size: 0.75em;
            :hover {
              text-decoration: none;
            }
          `,
          isFocused &&
            css`
              color: ${theme.colors.purple.base};
              font-weight: 600;
            `,
        ]}
      >
        {label}
      </a>
    </li>
  )
}

PostNavItem.propTypes = {
  anchor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  isFocused: PropTypes.bool,
}
