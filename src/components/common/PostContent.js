import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export const PostContent = ({ children }) => {
  return (
    <section
      css={(theme) => css`
        position: relative;
        margin: 0 auto;
        padding: 0 170px 6vw;
        min-height: 230px;
        font-family: Georgia, serif;
        font-size: 2rem;
        line-height: 1.6em;
        background: #fff;

        @media (max-width: 1170px) {
          padding: 0 11vw;
        }
        @media (max-width: 800px) {
          padding: 0 5vw;
          font-size: 1.8rem;
        }

        @media (max-width: 500px) {
          padding: 0;
        }

        & h1,
        & h2,
        & h3,
        & h4,
        & h5,
        & h6,
        & p,
        & ul,
        & ol,
        & dl,
        & pre,
        & blockquote {
          margin: 0 0 1.5em 0;
          min-width: 100%;
        }

        @media (max-width: 500px) {
          & p,
          & ul,
          & ol,
          & dl,
          & pre {
            margin-bottom: 1.28em;
          }
        }

        & li {
          word-break: break-word;
        }

        & li p {
          margin: 0;
        }

        & a {
          color: ${theme.colors.darkgrey};
          word-break: break-word;
          box-shadow: ${theme.colors.darkgrey} 0 -1px 0 inset;
          transition: all 0.2s ease-in-out;
        }

        & a:hover {
          color: ${theme.colors.blue};
          text-decoration: none;
          box-shadow: ${theme.colors.blue} 0 -1px 0 inset;
        }

        & strong,
        & em {
          color: ${theme.colors.darkgrey_a};
        }

        & small {
          display: inline-block;
          line-height: 1.6em;
        }

        & li:first-of-type {
          margin-top: 0;
        }

        & blockquote {
          margin: 0 0 1.5em;
          padding: 0 1.5em;
          border-left: #3eb0ef 3px solid;
        }
        @media (max-width: 500px) {
          & blockquote {
            padding: 0 1.3em;
          }
        }

        & blockquote p {
          margin: 0 0 1em 0;
          color: inherit;
          font-size: inherit;
          line-height: inherit;
          font-style: italic;
        }

        & blockquote p:last-child {
          margin-bottom: 0;
        }

        & blockquote a,
        & blockquote a:hover {
          box-shadow: none;
        }

        & code {
          padding: 0 5px 2px;
          font-size: 0.8em;
          line-height: 1em;
          font-weight: 400 !important;
          background: ${theme.colors.whitegrey};
          border-radius: 3px;
        }

        & p code {
          word-break: break-all;
        }

        & pre {
          overflow-x: auto;
          margin: 1.5em 0 3em;
          padding: 20px;
          max-width: 100%;
          border: 1px solid #000;
          color: ${theme.colors.whitegrey};
          font-size: 1.4rem;
          line-height: 1.5em;
          background: ${theme.colors.darkgrey_d};
          border-radius: 5px;
        }

        & pre ::selection {
          color: ${theme.colors.midgrey_c};
        }

        & pre code {
          padding: 0;
          font-size: inherit;
          line-height: inherit;
          background: transparent;
        }

        & pre code :not(span) {
          color: inherit;
        }

        & hr {
          margin: 2em 0;
        }

        & hr:after {
          content: '';
          position: absolute;
          top: -15px;
          left: 50%;
          display: block;
          margin-left: -10px;
          width: 1px;
          height: 30px;
          background: ${theme.colors.lightgrey_a};
          box-shadow: #fff 0 0 0 5px;
          transform: rotate(45deg);
        }

        & hr + p {
          margin-top: 1.2em;
        }

        & h1,
        & h2,
        & h3,
        & h4,
        & h5,
        & h6 {
          color: ${theme.colors.darkgrey_a};
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        & h1 {
          margin: 0.5em 0 0.4em;
          font-size: 4.2rem;
          line-height: 1.25em;
          font-weight: 600;
        }
        & p + h1 {
          margin-top: 0.8em;
        }
        @media (max-width: 800px) {
          & h1 {
            font-size: 3.2rem;
            line-height: 1.25em;
          }
        }

        & h2 {
          margin: 0.5em 0 0.4em;
          font-size: 3.2rem;
          line-height: 1.25em;
          font-weight: 600;
        }
        & p + h2 {
          margin-top: 0.8em;
        }
        @media (max-width: 800px) {
          & h2 {
            margin-bottom: 0.3em;
            font-size: 2.8rem;
            line-height: 1.25em;
          }
        }

        & h3 {
          margin: 0.5em 0 0.2em;
          font-size: 2.5rem;
          line-height: 1.3em;
          font-weight: 600;
        }
        & h2 + h3 {
          margin-top: 0.7em;
        }
        @media (max-width: 800px) {
          & h3 {
            margin-bottom: 0.3em;
            font-size: 2.4rem;
            line-height: 1.3em;
          }
        }

        & h4 {
          margin: 0.5em 0 0.2em;
          font-size: 2.5rem;
          font-weight: 600;
        }
        & h2 + h4 {
          margin-top: 0.7em;
        }
        & h3 + h4 {
          margin-top: 0;
        }
        @media (max-width: 800px) {
          & h4 {
            margin-bottom: 0.3em;
            font-size: 2.4rem;
            line-height: 1.3em;
          }
        }

        & h5 {
          display: block;
          margin: 0.5em 0;
          padding: 0.4em 1em 0.9em;
          border: 0;
          color: ${theme.colors.blue};
          font-family: Georgia, serif;
          font-size: 3.2rem;
          line-height: 1.35em;
          text-align: center;
        }
        @media (min-width: 1180px) {
          & h5 {
            max-width: 1060px;
            width: 100vw;
          }
        }
        @media (max-width: 800px) {
          & h5 {
            margin-bottom: 1em;
            margin-left: 1.3em;
            padding: 0 0 0.5em;
            font-size: 2.4rem;
            text-align: initial;
          }
        }

        & h6 {
          margin: 0.5em 0 0.2em 0;
          font-size: 2rem;
          font-weight: 700;
        }
        @media (max-width: 800px) {
          & h6 {
            font-size: 1.8rem;
            line-height: 1.4em;
          }
        }

        & table {
          display: inline-block;
          overflow-x: auto;
          margin: 0.5em 0 2.5em;
          max-width: 100%;
          width: auto;
          border-spacing: 0;
          border-collapse: collapse;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 1.6rem;
          white-space: nowrap;
          vertical-align: top;
        }

        & table {
          -webkit-overflow-scrolling: touch;
          background: radial-gradient(
                ellipse at left,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0) 75%
              )
              0 center,
            radial-gradient(
                ellipse at right,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0) 75%
              )
              100% center;
          background-attachment: scroll, scroll;
          background-size: 10px 100%, 10px 100%;
          background-repeat: no-repeat;
        }

        & table td:first-of-type {
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 20px 100%;
          background-repeat: no-repeat;
        }

        & table td:last-child {
          background-image: linear-gradient(
            to left,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-position: 100% 0;
          background-size: 20px 100%;
          background-repeat: no-repeat;
        }

        & table th {
          color: ${theme.colors.darkgrey};
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.2px;
          text-align: left;
          text-transform: uppercase;
          background-color: ${theme.colors.whitegrey_a};
        }

        & table th,
        & table td {
          padding: 6px 12px;
          border: 1px solid ${theme.colors.whitegrey_b};
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {children}
      </div>
    </section>
  )
}

PostContent.propTypes = { children: PropTypes.node.isRequired }
