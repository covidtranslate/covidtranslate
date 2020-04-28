import React from 'react'

import { HomeLayout } from '@components/layouts'
import { LinkCTASection, PostFeed } from '@components/common'
import {
  KCDC_RESPONSE_GUIDELINES,
  TEST_SITE_INSTALLATION_GUIDE,
  CONTACT_TRACING_STRATEGY,
  KCDC_SCREENING_CENTER_GUIDE,
  KCDC_RESPONSE_GUIDELINES_MORE_LANGUAGES,
  DRIVE_THRU_MANUALS,
  MANAGEMENT_OF_HEALTHCARE_FACILITIES,
} from '@posts'

const IndexPage = () => {
  const actions = [
    {
      sectionName: null,
      links: [
        {
          text: 'Give your feedback on next translations',
          link:
            'https://docs.google.com/forms/d/e/1FAIpQLScvWqH-t7sUdebVFgfeqOoK8FcUKiFcUCLlH_UUuUPzy69FtQ/viewform',
        },
        {
          text: 'Get the playbook & glossary',
          link: '/kcdc-covid-19-response-guidelines',
        },
        { text: 'More resources', link: '/covid-19-resources' },
      ],
    },
  ]

  return (
    <HomeLayout>
      <LinkCTASection actions={actions} />
      <PostFeed posts={[MANAGEMENT_OF_HEALTHCARE_FACILITIES]} />
      <PostFeed posts={[DRIVE_THRU_MANUALS, KCDC_SCREENING_CENTER_GUIDE]} />
      <PostFeed posts={[KCDC_RESPONSE_GUIDELINES_MORE_LANGUAGES]} />
      <PostFeed posts={[KCDC_RESPONSE_GUIDELINES]} />
      <PostFeed
        posts={[CONTACT_TRACING_STRATEGY, TEST_SITE_INSTALLATION_GUIDE]}
      />
    </HomeLayout>
  )
}

export default IndexPage
