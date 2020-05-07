import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { Post } from '@components/Post'
import { Action } from '@components/Action'
import { SiteLayout } from '@components/SiteLayout'
import { useAnchorObservers } from '@hooks'
import { data as UPDATES } from '@data/updates'
import { data as DOCUMENTS } from '@data/documents'

const Update = ({ pageContext: { id: updateId } }) => {
  const update = UPDATES.find((u) => u.id === updateId)

  const anchors = [
    { id: 'releases', label: 'Releases' },
    { id: 'update', label: 'Update' },
  ]

  const [anchorRefs, currentFocus] = useAnchorObservers(anchors, [])

  return (
    <SiteLayout title={update.title} pathname={`updates/${update.slug}`}>
      <Post
        title={update.title}
        author={update.author}
        publishedAt={new Date(update.date)}
        anchors={anchors}
        focus={currentFocus}
      >
        <section>
          <h2 id={anchors[0].id} ref={anchorRefs[0]}>
            {anchors[0].label}
          </h2>
          <p
            css={css`
              line-height: 2.5em;
            `}
          >
            {update.releases.map((r) => {
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
        </section>

        <h2 id={anchors[1].id} ref={anchorRefs[1]}>
          {anchors[1].label}
        </h2>
        {update.message.map((m, idx) => (
          <p key={idx}>{m}</p>
        ))}
      </Post>
    </SiteLayout>
  )
}

Update.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
}

export default Update
