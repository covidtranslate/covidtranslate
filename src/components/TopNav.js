import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Facebook, Twitter, Instagram, Menu, X } from 'react-feather'

import { SideNavItem } from '@components/SideNavItem'
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

export const TopNav = () => {
  const theme = useTheme()

  const {
    site: {
      siteMetadata: { twitter, facebook, instagram },
    },
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
          facebook
          instagram
        }
      }

      file(relativePath: { eq: "logo-shapes.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const facebookUrl =
    facebook && `https://www.facebook.com/${facebook.replace(/^\//, ``)}`
  const twitterUrl =
    twitter && `https://twitter.com/${twitter.replace(/^@/, ``)}`
  const instagramUrl =
    instagram && `https://instagram.com/${instagram.replace(/^\//, ``)}`

  const [isMenuOpen, toggleMenu] = React.useState(false)

  const [state, dispatch] = React.useReducer(reducer, {})

  const GUIDELINES = DOCUMENTS.filter((d) => d.category === categories.KCDC)
  const RESOURCES = DOCUMENTS.filter((d) => d.category === categories.other)

  const [hasOverflow, setHasOverflow] = React.useState(false)
  const navListContainerRef = React.useRef()
  const navListEnd = React.useRef()

  React.useLayoutEffect(() => {
    let observer = null
    if (isMenuOpen) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setHasOverflow(!entry.isIntersecting)
        },
        { root: navListContainerRef.current, threshold: 1 }
      )

      observer.observe(navListEnd.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [isMenuOpen])

  React.useEffect(() => {
    dispatch({
      type: 'INIT',
      payload: JSON.parse(
        window.sessionStorage.getItem('SIDE_NAV_STATE') || '{}'
      ),
    })
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

  return isMenuOpen ? (
    <nav
      css={(theme) => css`
        display: none;
        height: 100vh;
        width: 100%;
        justify-content: center;
        background-color: #fff;
        position: fixed;
        z-index: 1;
        @media (max-width: ${theme.breakpoints.sm}) {
          display: flex;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        `}
      >
        <section
          css={css`
            padding-top: 20px;
            padding-left: 16px;
          `}
        >
          <X
            size={24}
            strokeWidth={2}
            color={theme.colors.darkgrey.base}
            css={(theme) => css`
              display: none;
              cursor: pointer;
              @media (max-width: ${theme.breakpoints.sm}) {
                display: block;
              }
            `}
            onClick={() => {
              toggleMenu((prevState) => !prevState)
            }}
          />
        </section>
        <section
          ref={navListContainerRef}
          css={css({
            flex: 1,
            overflow: 'auto',
            paddingTop: 24,
            transition: 'box-shadow 0.2s ease-in-out',
            ...(hasOverflow && {
              boxShadow: 'inset 0 -40px 20px -35px rgba(0, 0, 0, 1);',
            }),
          })}
        >
          <ul
            css={css`
              margin: 0;
              list-style: none;
              padding-left: 8px;
              padding-right: 8px;
            `}
          >
            <SideNavItem label="Home" slug="" />
            <SideNavItem label="About" slug="about" />
            <SideNavItem
              label="KCDC Guidelines"
              pathPrefix={categories.KCDC}
              posts={GUIDELINES}
              isOpen={state.GUIDELINES}
              onToggleOpen={guidelineToggle}
            />
            <SideNavItem
              label="More Resources"
              pathPrefix={categories.other}
              posts={RESOURCES}
              isOpen={state.RESOURCES}
              onToggleOpen={resourcesToggle}
            />
            <SideNavItem
              label="Archive"
              pathPrefix="updates"
              posts={UPDATES.slice().reverse()}
              isOpen={state.UPDATES}
              onToggleOpen={updateToggle}
            />
            <li
              ref={navListEnd}
              css={css`
                height: 1px;
              `}
            ></li>
          </ul>
        </section>
      </div>
    </nav>
  ) : (
    <nav
      css={(theme) => css`
        height: 64px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 6px -4px ${theme.colors.darkgrey.bolder};
        background-color: #fff;
        width: 100%;
        @media (max-width: ${theme.breakpoints.sm}) {
          position: fixed;
          z-index: 1;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          padding-left: 16px;
        `}
      >
        <img
          css={(theme) => css`
            display: block;
            width: 30px;
            @media (max-width: ${theme.breakpoints.sm}) {
              display: none;
            }
          `}
          src={fixed.src}
          alt="COVID Translate Project"
        />
        <Menu
          size={24}
          strokeWidth={2}
          color={theme.colors.darkgrey.base}
          css={(theme) => css`
            display: none;
            cursor: pointer;
            @media (max-width: ${theme.breakpoints.sm}) {
              display: block;
            }
          `}
          onClick={() => {
            toggleMenu((prevState) => !prevState)
          }}
        />
        <h1
          css={(theme) => css`
            margin: 0;
            margin-left: 16px;
            margin-right: 16px;
            font-size: 2rem;
            line-height: 1em;
            font-weight: 600;
            @media (max-width: ${theme.breakpoints.sm}) {
              margin-left: 12px;
              font-size: 1.5rem;
            }
          `}
        >
          <Link
            to="/"
            css={(theme) =>
              css`
                color: ${theme.colors.midgrey.bolder};
                :hover {
                  text-decoration: none;
                }
              `
            }
          >
            COVID Translate Project
          </Link>
        </h1>
        <span
          css={(theme) => css`
            font-size: 0.75em;
            margin-top: 0.3em;
            @media (max-width: ${theme.breakpoints.md}) {
              display: none;
            }
          `}
        >
          Spreading knowledge worldwide to fight COVID-19
        </span>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          a {
            margin-right: 1.5em;
          }
        `}
      >
        <a
          css={(theme) => css`
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
            svg {
              height: 18px;
              width: 18px;
            }
            @media (max-width: ${theme.breakpoints.sm}) {
              line-height: 14px;
              svg {
                height: 14px;
                width: 14px;
              }
            }
          `}
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Facebook
            size={18}
            strokeWidth={1}
            color={theme.colors.darkgrey.base}
            fill={theme.colors.darkgrey.base}
          />
        </a>
        <a
          css={(theme) => css`
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
            svg {
              height: 18px;
              width: 18px;
            }
            @media (max-width: ${theme.breakpoints.sm}) {
              line-height: 14px;
              svg {
                height: 14px;
                width: 14px;
              }
            }
          `}
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter
            size={18}
            strokeWidth={1}
            color={theme.colors.darkgrey.base}
            fill={theme.colors.darkgrey.base}
          />
        </a>
        <a
          css={(theme) => css`
            opacity: 0.8;
            &:hover {
              opacity: 1;
            }
            svg {
              height: 18px;
              width: 18px;
            }
            @media (max-width: ${theme.breakpoints.sm}) {
              line-height: 14px;
              svg {
                height: 14px;
                width: 14px;
              }
            }
          `}
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram
            size={18}
            strokeWidth={2}
            color="#fff"
            fill={theme.colors.darkgrey.base}
          />
        </a>
      </div>
    </nav>
  )
}
