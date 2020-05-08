import React from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { normalization } from '@styles/global'
import { base } from '@styles/base'
import { theme } from '@styles/theme'

import { SEO } from '@components/SEO'
import { TopNav } from '@components/TopNav'
import { SideNav } from '@components/SideNav'

export const SiteLayout = ({ children, title, pathname }) => {
  const [initialState, setInitialState] = React.useState(null)

  React.useLayoutEffect(() => {
    setInitialState(
      JSON.parse(window.sessionStorage.getItem('SIDE_NAV_STATE') || '{}')
    )
  }, [])

  return (
    <>
      <SEO title={title} pathname={pathname} />
      <Global styles={normalization} />
      <ThemeProvider theme={theme}>
        <Global styles={base} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          `}
        >
          <TopNav />
          <main
            css={css`
              flex: 1;
              display: flex;
              justify-content: space-between;
              @media (max-width: ${theme.breakpoints.sm}) {
                margin-top: 64px;
              }
            `}
          >
            {initialState && <SideNav initialState={initialState} />}
            {children}
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  pathname: PropTypes.node.isRequired,
}
