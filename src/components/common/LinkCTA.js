import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { css } from '@emotion/core'
import { ArrowRight, ExternalLink, Download } from 'react-feather'

const EXTERNAL_LINK = /^http/
const FILE_LINK = /\.(?:pdf|xlsx)$/

export const LinkCTA = ({ text, link }) => {
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
    <p
      css={(theme) => css`
        display: flex;
        align-items: center;
        & a {
          color: ${theme.colors.blue} !important;
          font-size: 24px !important;
          text-decoration: underline !important;
          box-shadow: none !important;
          transition: all 0.2s ease-in-out !important;
        }
        & a:hover {
          color: ${theme.colors.blue_c} !important;
          text-decoration: underline !important;
          box-shadow: none !important;
        }
      `}
    >
      <LinkComponent {...linkProps}>
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
    </p>
  )
}

LinkCTA.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
