import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { SideNavItem } from '@components/SideNavItem'
import { SideNavFooter } from '@components/SideNavFooter'

import { data as UPDATES } from '@data/updates'
import { data as DOCUMENTS, categories } from '@data/documents'

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload
    case 'TOGGLE_UPDATES':
      return { ...state, UPDATES: !state.UPDATES }
    case 'TOGGLE_GUIDELINES':
      return { ...state, GUIDELINES: !state.GUIDELINES }
    case 'TOGGLE_RESOURCES':
      return { ...state, RESOURCES: !state.RESOURCES }
    default:
      return state
  }
}

export const SideNav = ({ initialState }) => {
  const GUIDELINES = DOCUMENTS.filter((d) => d.category === categories.KCDC)
  const RESOURCES = DOCUMENTS.filter((d) => d.category === categories.other)

  const [state, dispatch] = useReducer(reducer, initialState)

  const [hasOverflow, setHasOverflow] = React.useState(false)
  const navListContainerRef = React.useRef()
  const navListEnd = React.useRef()

  React.useLayoutEffect(() => {
    navListContainerRef.current.scrollTop =
      window.sessionStorage.getItem('SIDE_NAV_SCROLL_TOP') || 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasOverflow(!entry.isIntersecting)
      },
      { root: navListContainerRef.current, threshold: 1 }
    )

    observer.observe(navListEnd.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  React.useEffect(() => {
    window.sessionStorage.setItem('SIDE_NAV_STATE', JSON.stringify(state))
  }, [state])

  const updateToggle = React.useCallback(() => {
    dispatch({ type: 'TOGGLE_UPDATES' })
  }, [dispatch])
  const guidelineToggle = React.useCallback(() => {
    dispatch({ type: 'TOGGLE_GUIDELINES' })
  }, [dispatch])
  const resourcesToggle = React.useCallback(() => {
    dispatch({ type: 'TOGGLE_RESOURCES' })
  }, [dispatch])

  const saveScrollPosition = React.useCallback(() => {
    const elem = navListContainerRef.current
    window.sessionStorage.setItem('SIDE_NAV_SCROLL_TOP', elem.scrollTop)
  }, [navListContainerRef])

  return (
    <section
      css={css`
        flex: 0 0 280px;
      `}
    >
      <aside
        css={css`
          width: 100%;
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          ref={navListContainerRef}
          css={css({
            flex: 1,
            overflow: 'auto',
            paddingTop: 24,
            transition: 'box-shadow 0.2s ease-in-out',
            ...(hasOverflow && {
              boxShadow: 'inset 0 -25px 20px -35px rgba(0, 0, 0, 1);',
            }),
          })}
        >
          <ul
            css={css`
              margin: 0;
              list-style: none;
            `}
          >
            <SideNavItem label="Home" slug="" onNavigate={saveScrollPosition} />
            <SideNavItem
              label="About"
              slug="about"
              onNavigate={saveScrollPosition}
            />
            <SideNavItem
              label="KCDC Guidelines"
              pathPrefix={categories.KCDC}
              posts={GUIDELINES}
              isOpen={state.GUIDELINES}
              onToggleOpen={guidelineToggle}
              onNavigate={saveScrollPosition}
            />
            <SideNavItem
              label="More Resources"
              pathPrefix={categories.other}
              posts={RESOURCES}
              isOpen={state.RESOURCES}
              onToggleOpen={resourcesToggle}
              onNavigate={saveScrollPosition}
            />
            <SideNavItem
              label="Archive"
              pathPrefix="updates"
              posts={UPDATES.slice().reverse()}
              isOpen={state.UPDATES}
              onToggleOpen={updateToggle}
              onNavigate={saveScrollPosition}
            />
            <li
              ref={navListEnd}
              css={css`
                height: 1px;
              `}
            ></li>
          </ul>
        </div>
        <SideNavFooter />
      </aside>
    </section>
  )
}

SideNav.propTypes = {
  initialState: PropTypes.shape({
    UPDATES: PropTypes.bool,
    GUIDELINES: PropTypes.bool,
    RESOURCES: PropTypes.bool,
  }),
}
