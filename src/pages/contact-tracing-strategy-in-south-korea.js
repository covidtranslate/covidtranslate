import React from 'react'

import { PostLayout } from '@components/layouts'
import { CONTACT_TRACING_STRATEGY } from '@posts'

const ContactTracingStrategy = () => {
  const downloads = [
    {
      sectionName: 'Downloads:',
      links: [
        {
          text: 'Contact tracing strategy in South Korea',
          link: '/tracking-strategy-in-Korea.pdf',
        },
      ],
    },
  ]

  return (
    <PostLayout post={CONTACT_TRACING_STRATEGY} downloads={downloads}>
      <p>
        This is another research report put together by the amazing team led by{' '}
        <a href="mailto:seungcheol.ohk@sciencespo.fr">SeungCheol Ohk</a>. Thank
        you again to the team of volunteers for sharing this document!
      </p>
      <p>An excerpt:</p>
      <blockquote>
        [South Korea] tests many people quickly, and they are also swift to
        identify those that have had contact with the infected person, thus
        making their target of quarantine very clear and specific. But without
        such a system set in place, it is difficult to either identify the
        infected person or the people that have had contact with them. It is
        also hard to know what specific sites to block off and decontaminate. In
        this case, a nationwide lockdown and the closing of borders become the
        only viable method of control.
      </blockquote>
    </PostLayout>
  )
}

export default ContactTracingStrategy
