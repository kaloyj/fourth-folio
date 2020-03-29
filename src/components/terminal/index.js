import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"
import TerminalLines from "./TerminalLines"

const terminalLines = [
  {
    content: "Carlo Janea's Portfolio",
  },
  {
    content: "summary --show",
  },
  {
    showMarker: false,
    content: ["loves JS", "tries his best on UI/UX", "Paramore's #1 fan"],
  },
]

const headerButtons = ["browserClose", "browserMinimize", "browserMaximize"]
const Terminal = () => {
  return (
    <div
      css={css`
        height: 42.5vh;
        flex: 0 0 92%;
        margin: 2% 4% 0;

        display: flex;
        flex-flow: column wrap;
        border-radius: 5px;
        overflow: hidden;
        -webkit-box-shadow: -12px 10px 26px 3px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
        -moz-box-shadow: -12px 10px 26px 3px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
        box-shadow: -12px 10px 26px -5px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);

        @media only screen and (min-width: 768px) {
          width: 53%;
          height: 30vh;
          margin: 0 4%;
          position: absolute;
          top: -40%;
          right: 0;
          order: 2;
        }
      `}
    >
      <div
        css={css`
          flex: 0 0 7.5%;
          background-color: ${COLOR_SCHEME.gray};
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          padding-left: 10px;
          position: relative;

          @media only screen and (min-width: 375px) {
            flex: 0 0 6%;
          }
        `}
      >
        {headerButtons.map(button => (
          <div
            key={button}
            css={css`
              height: 10px;
              width: 10px;
              border-radius: 50%;
              margin-right: 5px;
              background-color: ${COLOR_SCHEME[button]};
            `}
          ></div>
        ))}
        <p
          css={css`
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.7rem;
            color: white;
            font-family: Arial;
          `}
        >
          cjaneas-portfolio
        </p>
      </div>
      <div
        css={css`
          flex: 1;
          background-color: ${COLOR_SCHEME.darkBlack};
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          padding-top: 2%;
        `}
      >
        {terminalLines.map((text, index) => (
          <TerminalLines text={text} key={index}></TerminalLines>
        ))}
      </div>
    </div>
  )
}

export default Terminal
