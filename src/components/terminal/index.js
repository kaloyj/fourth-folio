import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const Terminal = () => {
  return (
    <div
      css={css`
        height: 50vh;
        width: 92%;
        margin: 0 4%;

        display: flex;
        flex-flow: column wrap;
        border-radius: 5px;
        overflow: hidden;
        margin-top: 10%;
        -webkit-box-shadow: -12px 10px 26px 3px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
        -moz-box-shadow: -12px 10px 26px 3px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
        box-shadow: -12px 10px 26px -5px rgba(16, 17, 18, 1),
          -2px 2px 2px -2px rgba(16, 17, 18, 1);
      `}
    >
      <div
        css={css`
          flex: 0 0 5%;
          background-color: ${COLOR_SCHEME.gray};
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          padding-left: 10px;
          position: relative;
        `}
      >
        {["browserClose", "browserMinimize", "browserMaximize"].map(button => (
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
        `}
      >
        hello
      </div>
    </div>
  )
}

export default Terminal
