import React from 'react'

import { PostLayout } from '@components/layouts'
import { DRIVE_THRU_MANUALS } from '@posts'

const SejongDriveThru = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
        { text: 'KCDC drive-thru manual', link: '/KCDC-drive-thru-manual.pdf' },
        {
          text: 'Sejong City drive-thru manual',
          link: '/Drive-thru_Manual_Sejong.pdf',
        },
      ],
    },
  ]

  return (
    <PostLayout post={DRIVE_THRU_MANUALS} downloads={downloads}>
      <p>
        In addition to the main drive-thru manual, our team has also translated
        a one-page manual published for the city of Sejong, South Korea&apos;s
        administrative capital with a population of 280,000.
      </p>
    </PostLayout>
  )
}

export default SejongDriveThru
