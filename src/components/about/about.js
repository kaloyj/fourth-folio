import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"
import TerminalHeader from "./terminal-header"

const About = () => {
  return (
    <div
      css={css`
        min-height: 50vh;
        flex: 0 0 88%;
        margin: 1rem 6% 2rem;
        display: flex;
        flex-flow: row wrap;
        background-color: ${COLOR_SCHEME.darkBlack};
        border-radius: 10px;
        padding: 1rem;
        padding-top: 1.75rem;
        position: relative;
        overflow: hidden;

        @media only screen and (min-width: 768px) {
          flex: 0 0 36%;
          margin: 1rem 0 1rem 4%;
        }
      `}
    >
      <TerminalHeader title="about-me"></TerminalHeader>
      <p
        css={css`
          color: white;
          letter-spacing: 0.1rem;
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.5rem;

          @media only screen and (min-width: 1024px) {
            font-size: 1.4rem;
            line-height: 1.9rem;
          }
        `}
      >
        <span
          css={css`
            font-weight: 700;
            margin-right: 0.5rem;
            color: ${COLOR_SCHEME.arrow};
          `}
        >
          &gt;
        </span>
        Hi! My name's Carlo Janea, a frontend engineer with the heart of
        creating maintainable things to help people. I mainly focus on the JS
        side of things especially React, but I do my best with UI/UX and
        Accessibility. Super dedicated and committed, especially for the things
        I love
        <span
          role="img"
          aria-label="smiley face emoji"
          css={css`
            margin-left: 0.5rem;
          `}
        >
          😊
        </span>
      </p>
    </div>
  )
}

export default About
