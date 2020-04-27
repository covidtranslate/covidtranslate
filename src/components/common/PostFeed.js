import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { PostCard } from '@components/common'
import { POST_PROP_TYPE } from '@posts'

export const PostFeed = ({ posts }) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -20px;
        padding: 50px 0 0;
        background: #fff;

        @media (max-width: 650px) {
          padding-top: 5vw;
        }
      `}
    >
      {posts.map((p) => {
        return <PostCard key={p.id} post={p} />
      })}
    </div>
  )
}

PostFeed.propTypes = {
  posts: PropTypes.arrayOf(POST_PROP_TYPE).isRequired,
}
