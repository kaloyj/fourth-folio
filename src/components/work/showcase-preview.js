import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const ShowcasePreview = ({ item, isActive, onClick }) => {
  return (
    <button
      css={css`
        width: 70px;
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

        @media only screen and (min-width: 768px) {
          width: 100px;
          height: 100px;
          margin-right: 0;
          margin-bottom: 12%;
        }
      `}
      type="button"
      onClick={onClick}
    >
      {item.title[0]}
    </button>
  )
}

export default ShowcasePreview
