import React from 'react'
import { css } from '@emotion/core'

export const InnerContainer = (props) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1040px;
        width: 100%;
      `}
      {...props}
    />
  )
}
