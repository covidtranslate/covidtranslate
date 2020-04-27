import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const outer = css`
  position: relative;
  padding: 0 5vw;
`

const fixedPosition = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

export const OuterContainer = ({ fixedToTop = false, ...props }) => {
  const css = fixedToTop ? [outer, fixedPosition] : [outer]
  return <div css={css} {...props} />
}

OuterContainer.propTypes = {
  children: PropTypes.node.isRequired,
  fixedToTop: PropTypes.bool,
}
