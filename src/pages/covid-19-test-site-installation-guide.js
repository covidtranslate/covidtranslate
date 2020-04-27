import React from 'react'

import { PostLayout } from '@components/layouts'
import { TEST_SITE_INSTALLATION_GUIDE } from '@posts'

const TestSiteInstallationGuide = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
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
    <PostLayout post={TEST_SITE_INSTALLATION_GUIDE} downloads={downloads}>
      <p>
        A team of kind-hearted Korean volunteers from France made a set of{' '}
        <b>walk-through and drive-through test site installation guides</b> in
        English, based on their independent research of available resources in
        Korea.
      </p>
      <p>
        Thank you to the team of volunteers for sharing your work! For more
        information, please contact:{' '}
        <a href="mailto:seungcheol.ohk@sciencespo.fr">
          seungcheol.ohk@sciencespo.fr
        </a>
        .
      </p>
    </PostLayout>
  )
}

export default TestSiteInstallationGuide
