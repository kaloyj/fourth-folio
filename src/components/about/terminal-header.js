import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const TerminalHeader = ({
  title,
  backgroundColor = COLOR_SCHEME.mediumBlack,
  buttonsColor = COLOR_SCHEME.browserDarkerMinimize,
}) => {
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1.5rem;
        background-color: ${backgroundColor};
        color: ${COLOR_SCHEME.white};
        text-align: center;
        font-size: 0.85rem;
        display: flex;
        align-items: center;

        span:first-of-type {
          margin-left: 0.5rem;
        }
      `}
    >
      {[1, 2, 3].map(circle => (
        <span
          key={circle}
          css={css`
            background-color: ${buttonsColor};
            height: 12px;
            width: 12px;
            margin-right: 0.25rem;
            border-radius: 50%;
          `}
        ></span>
      ))}
      <span
        css={css`
          position: absolute;
          left: 50%;
          transform: translate(-50%);
        `}
      >
        {title}
      </span>
    </div>
  )
}

export default TerminalHeader
