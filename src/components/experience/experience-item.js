import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const ExperienceItem = ({
  experience: { title, listTitle, listItems, yearStart, yearEnd },
}) => {
  return (
    <div
      css={css`
        flex: 0 0 92%;
        margin: 1rem 4%;
        color: white;
        font-family: Source Code Pro;
        font-size: 0.75rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        position: relative;
      `}
    >
      <div
        css={css`
          height: 30px;
          width: 30px;
          border-radius: 50%;
          border: 3px solid white;
          position: absolute;
          background-color: ${COLOR_SCHEME.lightBlack};
          top: 0;
          left: 40%;
          transform: translate(-55%, -15%);

          @media only screen and (min-width: 375px) {
            height: 35px;
            width: 35px;
          }
        `}
      ></div>

      <span
        css={css`
          flex: 0 0 30%;
          display: flex;
          flex-flow: row wrap;
        `}
      >
        {title}
      </span>
      <span
        css={css`
          flex: 0 0 50%;
          display: flex;
          flex-flow: row wrap;
        `}
      >
        <h4
          css={css`
            color: ${COLOR_SCHEME.accent};
          `}
        >
          {listTitle}
        </h4>
        <span
          css={css`
            margin: 0.5rem 0;
          `}
        >
          {yearStart} - {yearEnd}
        </span>
        {listItems.map(item => (
          <div
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            {item}
          </div>
        ))}
      </span>
    </div>
  )
}

export default ExperienceItem
