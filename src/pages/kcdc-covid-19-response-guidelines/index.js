import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { PostLayout } from '@components/layouts'
import { KCDC_RESPONSE_GUIDELINES } from '@posts'

const ResponseGuidelines = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
        {
          text: 'Latest amendment (7-4) to the Playbook',
          link: '/CovidPlaybook_EN_v1.0_Amendment_7-4.pdf',
        },
        {
          text: 'Latest amendment (7-4) to the Appendix',
          link: '/CovidPlaybook_Appendix_EN_v1.0_Amendment_7-4.pdf',
        },
        { text: 'Playbook (v1.0)', link: '/CovidPlaybook_EN_v1.0.pdf' },
        {
          text: 'Appendix (v1.0)',
          link: '/CovidPlaybook_Appendix_EN_v1.0.pdf',
        },
        {
          text: 'Glossary',
          link: '/Glossary.xlsx',
        },
      ],
    },
  ]

  return (
    <PostLayout post={KCDC_RESPONSE_GUIDELINES} downloads={downloads}>
      <p>
        This is an unofficial translation of a document from the{' '}
        <a href="https://www.cdc.go.kr/">
          Korea Centers for Disease Control and Prevention (KCDC)
        </a>{' '}
        titled &quot;코로나바이러스감염증-19 대응 지침 (지자체용) 7-3&quot;. Our
        version (i.e. v1.0) corresponds to version 7-3 of this document. The
        original 7-3 document in Korean has since been updated and replaced with
        a newer version. To view the original 7-3 version, click{' '}
        <OutboundLink href="/archive/CovidPlaybook_KR.pdf">here</OutboundLink>.
      </p>
      <p>
        The newest version, titled &quot;코로나바이러스감염증-19 대응 지침
        (지자체용) 7-4&quot;, can be downloaded from the{' '}
        <a href="https://www.cdc.go.kr/board/board.es?mid=a20507020000&bid=0019&act=view&list_no=366712&tag=&nPage=1">
          KCDC website
        </a>
        . It outlines guidance for South Korean local governments concerning
        public health measures against COVID-19.
      </p>
      <p>
        This translation is a product of a team of volunteers working around the
        clock, who hope that the information will be useful to governments
        around the world as they devise their battle plans against COVID-19.
      </p>
      <p>
        We are releasing version 1.0 today after carefully reviewing,
        formatting, and correcting our{' '}
        <OutboundLink href="/assets/CovidPlaybook_EN_v0.9.pdf">
          previous version (v0.9)
        </OutboundLink>
        . We hope that this document will be a helpful reference to those who
        are seeking in-depth information on how to respond to this
        unprecendented crisis.
      </p>
      <p>— COVID Translate Team</p>
    </PostLayout>
  )
}

export default ResponseGuidelines
