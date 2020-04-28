import React from 'react'

import { PostLayout } from '@components/layouts'
import { MANAGEMENT_OF_HEALTHCARE_FACILITIES } from '@posts'

const HealthcareFacilities = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
        {
          text: 'Management of healthcare facilities with confirmed cases',
          link: '/management-of-healthcare-facilities-with-confirmed-cases.pdf',
        },
      ],
    },
  ]

  return (
    <PostLayout
      post={MANAGEMENT_OF_HEALTHCARE_FACILITIES}
      downloads={downloads}
    />
  )
}

export default HealthcareFacilities
