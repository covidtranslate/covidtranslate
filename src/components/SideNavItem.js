import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { ChevronRight } from 'react-feather'

export const SideNavItem = ({
  label,
  pathPrefix,
  slug,
  posts,
  isOpen,
  onToggleOpen,
  onNavigate,
}) => {
  const theme = useTheme()

  const hasPosts = posts && posts.length > 0

  return (
    <li>
      {typeof slug === 'string' ? (
        <Link
          to={`/${slug}`}
          onClick={() => {
            onNavigate()
          }}
          css={(theme) => css`
            color: ${theme.colors.midgrey.bolder};
            display: inline-block;
            width: 100%;
            padding: 6px 4px 6px 10px;
            border-radius: 8px;
            transition: background-color 0.2s ease-in-out;
            font-weight: 600;
            font-size: 1.1em;
            :hover {
              background-color: ${theme.colors.whitegrey.light};
              text-decoration: none;
            }
          `}
          partiallyActive
          getProps={({ location }) => {
            const isMatch =
              location.pathname === `/${slug}` ||
              location.pathname === `/${slug}/`

            return (
              isMatch && {
                style: {
                  color: theme.colors.purple.base,
                  fontWeight: 600,
                },
              }
            )
          }}
        >
          {label}
        </Link>
      ) : (
        <div
          css={(theme) => css`
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            padding: 6px 4px 6px 10px;
            border-radius: 8px;
            transition: background-color 0.2s ease-in-out;
            font-weight: 600;
            font-size: 1.1em;
            :hover {
              background-color: ${theme.colors.whitegrey.light};
            }
          `}
          onClick={() => {
            if (onToggleOpen) {
              onToggleOpen()
            }
          }}
        >
          <span>{label}</span>
          <ChevronRight
            css={{
              transition: 'transform 0.2s ease-in-out',
              ...(isOpen && { transform: 'rotate(90deg)' }),
            }}
          />
        </div>
      )}
      {hasPosts && isOpen && (
        <ul
          css={css`
            list-style: none;
          `}
        >
          {posts.map((u) => (
            <li key={u.id}>
              <Link
                to={`/${pathPrefix}/${u.slug}`}
                onClick={() => {
                  onNavigate()
                }}
                css={(theme) => css`
                  color: ${theme.colors.midgrey.bolder};
                  transition: color 0.2s ease-in-out;
                  font-size: 0.9em;
                  :hover {
                    color: ${theme.colors.blue.bolder};
                    text-decoration: none;
                  }
                `}
                partiallyActive
                activeStyle={{
                  color: theme.colors.purple.base,
                  fontWeight: 600,
                }}
              >
                {u.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

SideNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  pathPrefix: PropTypes.string,
  slug: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  isOpen: PropTypes.bool,
  onToggleOpen: PropTypes.func,
  onNavigate: PropTypes.func,
}
