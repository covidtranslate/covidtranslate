import React from 'react'

import { PostLayout } from '@components/layouts'
import { KCDC_RESPONSE_GUIDELINES_MORE_LANGUAGES } from '@posts'

const MoreLanguages = () => {
  const downloads = [
    {
      sectionName: 'KCDC COVID-19 Response Guidelines:',
      links: [
        {
          text: 'Română (Romanian 🇷🇴)',
          link: 'https://www.proiectecovid.org/',
        },
        { text: 'Русский (Russian 🇷🇺)', link: '/CovidPlaybook_RU_v1.0.pdf' },
        { text: 'Italiano (Italian 🇮🇹)', link: '/CovidPlaybook_IT_v1.0.pdf' },
      ],
    },
    {
      sectionName: 'Appendix to the Guidelines:',
      links: [
        {
          text: 'Русский (Russian 🇷🇺)',
          link: '/CovidPlaybook_Appendix_RU_v1.0.pdf',
        },
        {
          text: 'Italiano (Italian 🇮🇹)',
          link: '/CovidPlaybook_Appendix_IT_v1.0.pdf',
        },
      ],
    },
  ]

  return (
    <PostLayout
      post={KCDC_RESPONSE_GUIDELINES_MORE_LANGUAGES}
      downloads={downloads}
    >
      <p>
        <i>* Stay tuned for more languages</i> 🌐
      </p>
    </PostLayout>
  )
}

export default MoreLanguages
