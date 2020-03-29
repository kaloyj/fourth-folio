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
        font-size: 0.75rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        position: relative;

        @media only screen and (min-width: 768px) {
          span,
          h4 {
            font-size: 1rem;
          }
        }
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

          @media only screen and (min-width: 768px) {
            height: 40px;
            width: 40px;
            transform: translate(-62.5%, -15%);
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
            flex: 0 0 100%;
            color: ${COLOR_SCHEME.accent};
            font-family: Source Code Pro;
          `}
        >
          {listTitle}
        </h4>
        <span
          css={css`
            margin: 0.5rem 0;
            @media only screen and (min-width: 768px) {
              margin: 1rem 0;
            }
          `}
        >
          {yearStart} - {yearEnd}
        </span>
        {listItems.map(item => (
          <div
            key={item}
            css={css`
              margin-bottom: 0.5rem;
              flex: 0 0 100%;
              @media only screen and (min-width: 768px) {
                margin-bottom: 1rem;
              }
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
