import React from 'react'

import { LinkCTASection, PostFeed } from '@components/common'
import { TagLayout } from '@components/layouts'
import {
  CONTACT_TRACING_STRATEGY,
  TEST_SITE_INSTALLATION_GUIDE,
  COVID_19_RESOURCES_TAG,
} from '@posts'

const COVID19ResourcesPage = () => {
  const posts = [CONTACT_TRACING_STRATEGY, TEST_SITE_INSTALLATION_GUIDE]
  const downloads = [
    {
      sectionName: 'Quick download links:',
      links: [
        {
          text: 'Contact tracing strategy in South Korea',
          link: '/tracking-strategy-in-Korea.pdf',
        },
        {
          text: 'Drive-through guide',
          link: '/COVID19-drive-through-test-site-instruction.pdf',
        },
        {
          text: 'Walk-through guide',
          link: '/COVID19-walk-through-test-site-instruction.pdf',
        },
      ],
    },
  ]

  return (
    <TagLayout numberOfPosts={posts.length} tag={COVID_19_RESOURCES_TAG}>
      <LinkCTASection actions={downloads} />
      <PostFeed posts={posts} />
    </TagLayout>
  )
}

export default COVID19ResourcesPage
