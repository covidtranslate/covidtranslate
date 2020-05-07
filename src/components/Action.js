import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { css } from '@emotion/core'
import { ArrowRight, ExternalLink, Download } from 'react-feather'

const EXTERNAL_LINK = /^http/
const FILE_LINK = /\.(?:pdf|xlsx)$/

export const Action = ({ text, link }) => {
  let LinkComponent
  let LinkIcon
  let linkProps

  if (EXTERNAL_LINK.test(link)) {
    LinkComponent = OutboundLink
    LinkIcon = ExternalLink
    linkProps = { href: link }
  } else if (FILE_LINK.test(link)) {
    LinkComponent = OutboundLink
    LinkIcon = Download
    linkProps = { href: link }
  } else {
    LinkComponent = Link
    LinkIcon = ArrowRight
    linkProps = { to: link }
  }

  return (
    <LinkComponent
      {...linkProps}
      css={(theme) => css`
        font-size: 1.2em;
        transition: all 0.2s ease-in-out;
        :hover {
          color: ${theme.colors.blue.bolder};
          text-decoration: none;
        }
      `}
    >
      <b>{text}</b>
      <LinkIcon
        size={18}
        css={(theme) => css`
          margin-left: 8px;
          margin-bottom: 4px;
          color: ${theme.colors.darkgrey};
        `}
      />
    </LinkComponent>
  )
}

Action.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
