import React from 'react'
import dashify from 'dashify'
import { css } from '@emotion/core'

import { Post } from '@components/Post'
import { Action } from '@components/Action'
import { SiteLayout } from '@components/SiteLayout'
import { useAnchorObservers } from '@hooks'
import { data as DOCUMENTS } from '@data/documents'

const ProtocolForMolecularTesting = () => {
  const doc = DOCUMENTS.find((d) => d.id === 16)

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
        <p>Abstract:</p>
        <blockquote>
          To validate the specimen-pooling strategy for real-time reverse transcription
          PCR detection of severe acute respiratory syndrome coronavirus 2, we generated
          different pools including positive specimens, reflecting the distribution of
          cycle threshold values at initial diagnosis. Cumulative sensitivities of tested
          pool sizes suggest pooling of &lt;6 specimens for surveillance by this method.
        </blockquote>
        <p>
          Kim SY, Lee J, Sung H, Lee H, Han MG, Yoo CK, et al. Pooling upper respiratory
          specimens for rapid mass screening of COVID-19 by real-time RT-PCR.
          Emerg Infect Dis. 2020 Oct. <a href="https://doi.org/10.3201/eid2610.201955">https://doi.org/10.3201/eid2610.201955</a>
        </p>
      </Post>
    </SiteLayout>
  )
}

export default ProtocolForMolecularTesting
