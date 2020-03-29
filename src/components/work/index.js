import React from "react"
import { css } from "@emotion/core"
import Showcase from "./showcase"
import { SectionHeaders } from "../../pages"
const Work = () => {
  return (
    <div
      css={css`
        flex: 0 0 92%;
        margin-left: 4%;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 768px) {
          margin-bottom: 7.5rem;
        }
      `}
    >
      <SectionHeaders
        id="past-works"
        css={css`
          margin-top: 1rem;
          margin-bottom: 1rem;

          @media only screen and (min-width: 768px) {
            margin: 1rem 0;
          }
        `}
      >
        Work & Projects
      </SectionHeaders>{" "}
      <Showcase></Showcase>
    </div>
  )
}

export default Work
