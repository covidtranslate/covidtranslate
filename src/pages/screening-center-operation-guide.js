import React from 'react'

import { PostLayout } from '@components/layouts'
import { KCDC_SCREENING_CENTER_GUIDE } from '@posts'

const ScreeningCenterGuidelines = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
        {
          text: 'Screening center operation guidelines',
          link: '/screening-center-operation-guide.pdf',
        },
      ],
    },
  ]

  return <PostLayout post={KCDC_SCREENING_CENTER_GUIDE} downloads={downloads} />
}

export default ScreeningCenterGuidelines
