import React from 'react'

import { PostLayout } from '@components/layouts'
import { SEJONG_CITY_DRIVE_THRU_MANUAL } from '@posts'

const SejongDriveThru = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
        {
          text: 'Drive-thru manual in Sejong City',
          link: '/Drive-thru_Manual_Sejong.pdf',
        },
      ],
    },
  ]

  return (
    <PostLayout post={SEJONG_CITY_DRIVE_THRU_MANUAL} downloads={downloads} />
  )
}

export default SejongDriveThru
