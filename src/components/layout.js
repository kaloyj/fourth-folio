import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

export const COLOR_SCHEME = {
  mediumBlack: "#333333",
  darkBlack: "#101112",
  codeGreen: "#47FF0C",
  gray: "#534B62",
  accent: "#F2FF49",
  browserClose: "#FF605C",
  browserMinimize: "#6A607D",
  browserDarkerMinimize: "#4D4D4D",
  browserMaximize: "#FFBD44",
  tilde: "#01BAEF",
  arrow: "#F3C969",
  yellow: "#F2FF49",
}

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={title} /> */}
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            font-family: "Source Code Pro", -apple-system, BlinkMacSystemFont,
              Roboto, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;
            background-color: ${COLOR_SCHEME.darkBlack};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;
            color: white;
            font-family: "Poppins";
          }
        `}
      ></Global>
      <div>
        <main
          css={css`
            min-height: 100vh;
            width: 100vw;
            overflow-x: hidden;
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
            background: ${COLOR_SCHEME.darkBlack};
          `}
        >
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Layout
