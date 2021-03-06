import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { LinkCTA } from '@components/common'

export const LINK_ACTIONS_PROP_TYPE = PropTypes.arrayOf(
  PropTypes.shape({
    sectionName: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired
)

export const LinkCTASection = ({ actions }) => {
  return (
    <section
      css={css`
        min-width: 100%;
        padding: 24px 0 0;

        & > h3 {
          margin: 0 0 24px !important;
          font-size: 2.5rem !important;
          line-height: 1.3em !important;
          font-weight: 600 !important;
        }
        & > p {
          margin-bottom: 32px !important;
        }
      `}
    >
      {actions.map(({ sectionName, links }) => (
        <React.Fragment key={sectionName}>
          {sectionName && <h3>{sectionName}</h3>}
          {links.map(({ text, link }) => (
            <LinkCTA key={link} text={text} link={link} />
          ))}
        </React.Fragment>
      ))}
    </section>
  )
}

LinkCTASection.propTypes = {
  actions: LINK_ACTIONS_PROP_TYPE,
}
