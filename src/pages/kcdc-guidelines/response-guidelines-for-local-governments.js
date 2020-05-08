import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { css } from '@emotion/core'
import dashify from 'dashify'

import { Post } from '@components/Post'
import { Action } from '@components/Action'
import { SiteLayout } from '@components/SiteLayout'
import { useAnchorObservers } from '@hooks'
import { data as DOCUMENTS } from '@data/documents'

const ResponseGuidelinesForLocalGovts = () => {
  const doc = DOCUMENTS.find((d) => d.id === 1)

  const anchors = doc.actions
    .map((a) => ({ id: dashify(a.sectionName), label: a.sectionName }))
    .concat([
      { id: 'notes-on-the-translation', label: 'Notes on the translation' },
    ])

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
                  /* display: flex;
                  flex-direction: column; */
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
        <h2
          id={anchors[anchors.length - 1].id}
          ref={anchorRefs[anchors.length - 1]}
        >
          {anchors[anchors.length - 1].label}
        </h2>
        <p>
          This is an unofficial translation of a document from the{' '}
          <OutboundLink href="https://www.cdc.go.kr/">
            Korea Centers for Disease Control and Prevention (KCDC)
          </OutboundLink>{' '}
          titled &quot;코로나바이러스감염증-19 대응 지침 (지자체용) 7-3&quot;.
          Our version (i.e. v1.0) corresponds to version 7-3 of this document.
          The original 7-3 document in Korean has since been updated and
          replaced with a newer version. To view the original 7-3 version, click{' '}
          <Link to="/archive/CovidPlaybook_KR.pdf">here</Link>.
        </p>
        <p>
          The newest version, titled &quot;코로나바이러스감염증-19 대응 지침
          (지자체용) 7-4&quot;, can be downloaded from the{' '}
          <OutboundLink href="https://www.cdc.go.kr/board/board.es?mid=a20507020000&bid=0019&act=view&list_no=366712&tag=&nPage=1">
            KCDC website
          </OutboundLink>
          . It outlines guidance for South Korean local governments concerning
          public health measures against COVID-19.
        </p>
        <p>
          This translation is a product of a team of volunteers working around
          the clock, who hope that the information will be useful to governments
          around the world as they devise their battle plans against COVID-19.
        </p>
        <p>
          The version 1.0 uploaded here is an update to the{' '}
          <Link to="/assets/CovidPlaybook_EN_v0.9.pdf">
            previous version (v0.9)
          </Link>{' '}
          after careful review by our editorial teams. We hope that this
          document will be a helpful reference to those who are seeking in-depth
          information on how to respond to this unprecendented crisis.
        </p>
      </Post>
    </SiteLayout>
  )
}

export default ResponseGuidelinesForLocalGovts
