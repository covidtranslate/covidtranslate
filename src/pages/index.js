import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

import { Post } from '@components/Post'
import { SiteLayout } from '@components/SiteLayout'
import { useAnchorObservers } from '@hooks'
import { data as UPDATES } from '@data/updates'

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

  const recentUpdates = UPDATES.slice().reverse().slice(0, 3)

  const anchors = [{ id: 'recent-updates', label: 'Recent updates' }]

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
        {recentUpdates.map((u) => {
          return (
            <React.Fragment key={u.id}>
              <Link to={`/updates/${u.slug}`}>{u.title}</Link>
              <p>{u.message}</p>
            </React.Fragment>
          )
        })}
      </Post>
    </SiteLayout>
  )
}

export default IndexPage
