import React from 'react'

import { PostLayout } from '@components/layouts'
import { KCDC_DRIVE_THRU_MANUAL } from '@posts'

const DriveThruManual = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
        {
          text: 'Drive-thru manual',
          link: '/KCDC-drive-thru-manual.pdf',
        },
      ],
    },
  ]

  return <PostLayout post={KCDC_DRIVE_THRU_MANUAL} downloads={downloads} />
}

export default DriveThruManual
