import React from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { SEO } from '@components/common'
import { normalization } from '@styles/global'
import { base } from '@styles/base'
import { theme } from '@styles/theme'

export const SiteWrapper = ({ children, title, pathname }) => {
  return (
    <>
      <SEO title={title} pathname={pathname} />
      <Global styles={normalization} />
      <Global styles={base} />
      <ThemeProvider theme={theme}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          `}
        >
          {children}
        </div>
      </ThemeProvider>
    </>
  )
}

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  pathname: PropTypes.node.isRequired,
}
