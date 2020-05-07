import React from 'react'
import dashify from 'dashify'
import { css } from '@emotion/core'

import { Post } from '@components/Post'
import { Action } from '@components/Action'
import { SiteLayout } from '@components/SiteLayout'
import { useAnchorObservers } from '@hooks'
import { data as DOCUMENTS } from '@data/documents'

const ContactTracingStrategy = () => {
  const doc = DOCUMENTS.find((d) => d.id === 3)

  const anchors = doc.actions.map((a) => ({
    id: dashify(a.sectionName),
    label: a.sectionName,
  }))

  const [anchorRefs, currentFocus] = useAnchorObservers(anchors, [])

  return (
    <SiteLayout title={doc.title} pathname={`/more-resources/${doc.slug}`}>
      <Post
        title={doc.title}
        author={doc.author}
        publishedAt={doc.publishedAt}
        updatedAt={doc.updatedAt}
        anchors={anchors}
        focus={currentFocus}
      >
        <section>
          {doc.actions.map(({ sectionName, links }, idx) => (
            <React.Fragment key={sectionName}>
              <h2 id={anchors[idx].id} ref={anchorRefs[idx]}>
                {sectionName}
              </h2>
              <p
                css={css`
                  line-height: 2.5em;
                `}
              >
                {links.map(({ text, link }) => (
                  <React.Fragment key={link}>
                    <Action text={text} link={link} />
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </React.Fragment>
          ))}
        </section>
        <p>
          This is another research report put together by the amazing team led
          by <a href="mailto:seungcheol.ohk@sciencespo.fr">SeungCheol Ohk</a>.
          Thank you again to the team of volunteers for sharing this document!
        </p>
        <p>An excerpt:</p>
        <blockquote>
          [South Korea] tests many people quickly, and they are also swift to
          identify those that have had contact with the infected person, thus
          making their target of quarantine very clear and specific. But without
          such a system set in place, it is difficult to either identify the
          infected person or the people that have had contact with them. It is
          also hard to know what specific sites to block off and decontaminate.
          In this case, a nationwide lockdown and the closing of borders become
          the only viable method of control.
        </blockquote>
      </Post>
    </SiteLayout>
  )
}

export default ContactTracingStrategy
