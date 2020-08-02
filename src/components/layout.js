import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { debounce } from "underscore"

export const COLOR_SCHEME = {
  mediumBlack: "#333333",
  darkBlack: "#101112",
  codeGreen: "#47FF0C",
  gray: "#534B62",
  accent: "#F7FF00",
  browserClose: "#FF605C",
  browserMinimize: "#6A607D",
  browserDarkerMinimize: "#4D4D4D",
  browserMaximize: "#FFBD44",
  tilde: "#01BAEF",
  arrow: "#F3C969",
  yellow: "#F2FF49",
  purplePink: "#DB36A4",
}

const Layout = ({ children }) => {
  useLayoutEffect(() => {
    // on mount
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    // code from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    const debouncedVhUpdate = debounce(() => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }, 400)

    window.addEventListener("resize", debouncedVhUpdate)

    return () => window.removeEventListener("resize", debouncedVhUpdate)
  }, [])
  return (
    <>
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

          .full-height {
            height: 100vh; /* Fallback for browsers that do not support Custom Properties */
            height: calc(var(--vh, 1vh) * 100);
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
  children: PropTypes.object.isRequired,
}

export default Layout
