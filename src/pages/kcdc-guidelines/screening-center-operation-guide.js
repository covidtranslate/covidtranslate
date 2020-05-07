import React from 'react'
import dashify from 'dashify'
import { css } from '@emotion/core'

import { Post } from '@components/Post'
import { Action } from '@components/Action'
import { SiteLayout } from '@components/SiteLayout'
import { useAnchorObservers } from '@hooks'
import { data as DOCUMENTS } from '@data/documents'

const ScreeningCenterOperationGuide = () => {
  const doc = DOCUMENTS.find((d) => d.id === 5)

  const anchors = doc.actions.map((a) => ({
    id: dashify(a.sectionName),
    label: a.sectionName,
  }))

  const [anchorRefs, currentFocus] = useAnchorObservers(anchors, [])

  return (
    <SiteLayout title={doc.title} pathname={`/kcdc-guidelines/${doc.slug}`}>
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
      </Post>
    </SiteLayout>
  )
}

export default ScreeningCenterOperationGuide
