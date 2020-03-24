import React, { Fragment } from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const TerminalLines = ({ text }) => {
  const { showMarker = true, content } = text
  return (
    <div
      css={css`
        color: white;
        font-family: Source Code Pro;
        font-weight: 400;
        font-size: 0.7rem;
        display: flex;
        flex-flow: row wrap;
        width: 96%;
        margin: 1.5% 2%;
      `}
    >
      {showMarker && (
        <Fragment>
          <span
            css={css`
              color: ${COLOR_SCHEME.tilde};
              margin-right: 5px;
            `}
          >
            ~
          </span>
          <span
            css={css`
              color: ${COLOR_SCHEME.arrow};
              margin-right: 5px;
            `}
          >
            >
          </span>
        </Fragment>
      )}

      {content && Array.isArray(content)
        ? content.map(listItem => (
            <div
              key={listItem}
              css={css`
                flex: 0 0 100%;
                margin-bottom: 0.35rem;
              `}
            >
              <span
                css={css`
                  margin-right: 0.75rem;
                  color: ${COLOR_SCHEME.arrow};
                `}
              >
                >
              </span>
              <span>{listItem}</span>
            </div>
          ))
        : content}
    </div>
  )
}

export default TerminalLines
