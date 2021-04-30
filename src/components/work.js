import React from "react"
import { css } from "@emotion/core"
import Showcase from "./showcase"
import { SectionHeaders } from "../pages"

const Work = ({ customTitle, data }) => {
  return (
    <div
      css={css`
        flex: 0 0 92%;
        margin-left: 4%;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 768px) {
          margin-bottom: 3rem;
        }
      `}
    >
      <SectionHeaders
        id="past-works"
        css={css`
          margin-top: 1rem;
          margin-bottom: 1rem;

          @media only screen and (min-width: 768px) {
            margin: 1rem 0 1.5rem;
          }
        `}
      >
        {customTitle || " Work & Projects"}
      </SectionHeaders>

      {data.map((work, index) => (
        <Showcase
          key={work.title}
          work={work}
          isReversed={index % 2 === 0}
        ></Showcase>
      ))}
    </div>
  )
}

export default Work
