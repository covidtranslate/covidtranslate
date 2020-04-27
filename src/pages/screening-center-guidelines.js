import React from 'react'

import { PostFeed } from '@components/common'
import { TagLayout } from '@components/layouts'
import {
  SCREENING_CENTER_OPERATION_TAG,
  SEJONG_CITY_DRIVE_THRU_MANUAL,
  KCDC_SCREENING_CENTER_GUIDE,
  KCDC_DRIVE_THRU_MANUAL,
} from '@posts'

const posts = [
  KCDC_DRIVE_THRU_MANUAL,
  KCDC_SCREENING_CENTER_GUIDE,
  SEJONG_CITY_DRIVE_THRU_MANUAL,
]

const firstRow = posts.slice(0, 1)
const secondRow = posts.slice(1, posts.length)

const COVID19ResourcesPage = () => {
  return (
    <TagLayout
      numberOfPosts={posts.length}
      tag={SCREENING_CENTER_OPERATION_TAG}
    >
      <PostFeed posts={firstRow} />
      <PostFeed posts={secondRow} />
    </TagLayout>
  )
}

export default COVID19ResourcesPage
