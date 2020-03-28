import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const ShowcasePreview = ({ item, isActive, onClick }) => {
  return (
    <button
      css={css`
        flex: 0 0 22%;
        border: 3px solid ${isActive ? COLOR_SCHEME.accent : "transparent"};
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
      type="button"
      onClick={onClick}
    >
      {item.title[0]}
    </button>
  )
}

export default ShowcasePreview
