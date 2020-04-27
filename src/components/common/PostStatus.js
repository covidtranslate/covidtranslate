import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000

export const PostStatus = ({ dateCreated, dateUpdated }) => {
  let label = ''
  let background = ''
  let border = ''
  let color = ''

  const now = new Date()

  const isNew = now - dateCreated <= THREE_DAYS_IN_MS
  if (isNew) {
    label = 'New'
    background = '#fff3ec'
    border = '#fa7119'
    color = '#fa7119'
  }

  const isUpdated = !isNew && now - dateUpdated <= THREE_DAYS_IN_MS
  if (isUpdated) {
    label = 'Updated'
    background = '#e6f7ff'
    border = '#1890ff'
    color = '#1890ff'
  }

  if (!isNew && !isUpdated) {
    return null
  }

  return (
    <span
      css={css`
        display: inline-block;
        height: 24px;
        padding: 0 7px;
        font-size: 12px;
        line-height: 22px;
        white-space: nowrap;
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;
        cursor: default;
        opacity: 1;
        background: ${background};
        border-color: ${border};
        color: ${color};
      `}
    >
      <b>{label}</b>
    </span>
  )
}

PostStatus.propTypes = {
  dateCreated: PropTypes.instanceOf(Date).isRequired,
  dateUpdated: PropTypes.instanceOf(Date).isRequired,
}
