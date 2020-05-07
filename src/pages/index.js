import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'

import { Post } from '@components/Post'
import { Action } from '@components/Action'
import { SiteLayout } from '@components/SiteLayout'
import { useAnchorObservers } from '@hooks'
import { data as UPDATES } from '@data/updates'
import { data as DOCUMENTS } from '@data/documents'

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const updates = UPDATES.slice().reverse()

  const newUpdate = updates[0]
  const recentUpdates = updates.slice(1, 4)

  const anchors = [
    { id: 'new', label: 'New' },
    { id: 'more-recent-updates', label: 'More recent updates' },
  ]

  const [anchorRefs, currentFocus] = useAnchorObservers(anchors, [])

  return (
    <SiteLayout title={`Home - ${siteTitle}`} pathname="">
      <Post
        title="COVID Translate Project"
        anchors={anchors}
        focus={currentFocus}
      >
        <h2 id={anchors[0].id} ref={anchorRefs[0]}>
          {anchors[0].label}
        </h2>
        <section>
          <p
            css={css`
              line-height: 2.5em;
            `}
          >
            {newUpdate.releases.map((r) => {
              const doc = DOCUMENTS.find((d) => d.id === r)
              return (
                <React.Fragment key={doc.id}>
                  <Action
                    text={doc.title}
                    link={`/${doc.category}/${doc.slug}`}
                  />
                  <br />
                </React.Fragment>
              )
            })}
          </p>
          {newUpdate.message.map((m, idx) => (
            <p key={idx}>{m}</p>
          ))}
        </section>

        <h2 id={anchors[1].id} ref={anchorRefs[1]}>
          {anchors[1].label}
        </h2>
        {recentUpdates.map((u) => {
          return (
            <React.Fragment key={u.id}>
              <Link to={`/updates/${u.slug}`}>{u.title}</Link>
              {u.message.map((m, idx) => (
                <p key={idx}>{m}</p>
              ))}
            </React.Fragment>
          )
        })}
      </Post>
    </SiteLayout>
  )
}

export default IndexPage
