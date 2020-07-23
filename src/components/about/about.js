import React, { Fragment, useCallback } from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"
import TerminalHeader from "./terminal-header"
import { isMobile } from "../../utils/device"

const About = ({ type, onSelect, className }) => {
  const handleSelect = useCallback(() => onSelect(type), [onSelect, type])
  return (
    <Fragment>
      <div
        className={className}
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
          transition: transform 0.5s ease;
          cursor: pointer;
          -webkit-box-shadow: 4px 0px 62px -28px rgba(242, 255, 73, 0.35),
            2px 0px 10px -2px rgba(242, 255, 73, 0.35);
          -moz-box-shadow: 4px 0px 62px -28px rgba(242, 255, 73, 0.35),
            2px 0px 10px -2px rgba(242, 255, 73, 0.35);
          box-shadow: 4px 0px 62px -28px rgba(242, 255, 73, 0.35),
            2px 0px 10px -2px rgba(242, 255, 73, 0.35);

          @media only screen and (min-width: 768px) {
            flex: 0 0 36%;
            margin: 1rem 0 1rem 4%;

            &.not-selected {
              transform: translateX(10%) scale(0.6) rotateY(10deg);
            }

            &.selected {
              transform: translateX(10%) scale(1) rotateY(0);
            }
          }
        `}
        tabIndex={isMobile() ? null : 0}
        role="button"
        onClick={handleSelect}
        onKeyDown={handleSelect}
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
          Accessibility. Super dedicated and committed, especially for the
          things I love
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
    </Fragment>
  )
}

export default About
