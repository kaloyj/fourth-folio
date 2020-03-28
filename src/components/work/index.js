import React from "react"
import { css } from "@emotion/core"
import Showcase from "./showcase"

const Work = () => {
  return (
    <div
      css={css`
        flex: 0 0 92%;
        margin-left: 4%;
        display: flex;
        flex-flow: row wrap;
      `}
    >
      <Showcase></Showcase>
    </div>
  )
}

export default Work
