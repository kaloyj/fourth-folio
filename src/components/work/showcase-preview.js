import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const ShowcasePreview = ({ item, photo }) => {
  return (
    <div
      css={css`
        flex: 0 0 22%;
        height: 70px;
        border-radius: 10px;
        background-color: ${COLOR_SCHEME.darkBlack};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 1.25rem;
      `}
    >
      {item.title[0]}
    </div>
  )
}

export default ShowcasePreview
