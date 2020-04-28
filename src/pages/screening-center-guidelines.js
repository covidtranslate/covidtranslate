import React from 'react'

import { PostFeed } from '@components/common'
import { TagLayout } from '@components/layouts'
import {
  SCREENING_CENTER_OPERATION_TAG,
  KCDC_SCREENING_CENTER_GUIDE,
  DRIVE_THRU_MANUALS,
} from '@posts'

const posts = [DRIVE_THRU_MANUALS, KCDC_SCREENING_CENTER_GUIDE]

const COVID19ResourcesPage = () => {
  return (
    <TagLayout
      numberOfPosts={posts.length}
      tag={SCREENING_CENTER_OPERATION_TAG}
    >
      <PostFeed posts={posts} />
    </TagLayout>
  )
}

export default COVID19ResourcesPage
