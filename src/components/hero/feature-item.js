import React, { useMemo } from "react"
import { css } from "@emotion/core"
// import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"
import RainbowBorderedBox from "../UI/rainbow-bordered-box"

// const IconContainer = styled("span")`
//   border: 2px solid ${COLOR_SCHEME.accent};
//   position: absolute;
//   top: 8%;
//   left: 8%;
//   height: 40px;
//   width: 40px;
//   border-radius: 50%;
//   display: flex;
//   flex-flow: row wrap;
//   align-items: center;
//   justify-content: center;
//   opacity: 0.4;
//   transition: opacity 0.25s ease;

//   path {
//     transition: stroke 0.25s ease;
//   }

//   @media only screen and (min-width: 375px) {
//     height: 50px;
//     width: 50px;
//   }

//   @media only screen and (min-width: 1200px) {
//     top: 6%;
//     left: 4%;
//   }
// `
const DEFAULT_X_OFFSET = 10

// we default to 1 because 0 cannot be used in dividing
const TOTAL_WINDOW_WIDTH = typeof window === "undefined" ? 1 : window.innerWidth

function calculateExtremes(location) {
  switch (location) {
    case 2:
      return -DEFAULT_X_OFFSET
    case 1:
      return 0
    case 0:
    default:
      return DEFAULT_X_OFFSET
  }
}

const FeatureItem = ({
  feature: { label, href, external, icon },
  index,
  xPos,
  hoveredIndex,
  setHoveredIndex,
}) => {
  // eslint-disable-next-line no-unused-vars
  const translatedXLocation = useMemo(() => {
    if (!xPos) return DEFAULT_X_OFFSET

    if (typeof hoveredIndex === "number")
      return calculateExtremes(hoveredIndex % 3)

    const score = 1 - xPos / (TOTAL_WINDOW_WIDTH / 2)
    return score * DEFAULT_X_OFFSET
  }, [xPos, hoveredIndex])
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      css={css`
        flex: 0 0 40%;
        margin: 4%;
        position: relative;
        height: 100px;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 375px) {
          margin: 2%;
          height: 125px;
        }

        @media only screen and (min-width: 1024px) {
          height: 200px;
        }

        @media only screen and (min-width: 1200px) {
          height: 240px;
          flex: 0 0 28%;
          margin: 0 0 4% 4%;
        }

        &:hover {
          .BoxOverlayOffset,
          .FeatureItemIcon,
          .MainBoxBorder {
            opacity: 1;
          }

          .MainBox {
            background: ${COLOR_SCHEME.accent};
            h3 {
              color: ${COLOR_SCHEME.darkBlack};
            }
          }

          .FeatureItemIcon {
            border: 3px solid ${COLOR_SCHEME.darkBlack};
            path {
              stroke: ${COLOR_SCHEME.darkBlack};
            }
          }
        }
      `}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <RainbowBorderedBox
        css={css`
          height: 100%;
          width: 100%;
        `}
      >
        <div
          className="MainBox"
          css={css`
            flex: 0 0 100%;
            height: 100%;
            background: ${COLOR_SCHEME.darkBlack};
            z-index: 2;
            display: flex;
            flex-flow: row wrap;
            transition: background 0.25s ease;
            position: relative;
          `}
        >
          <h3
            css={css`
              font-size: 1rem;
              transition: color 0.25s ease;
              text-align: right;
              position: absolute;
              word-break: break-word;
              width: 84%;
              bottom: 8%;
              right: 8%;

              @media only screen and (min-width: 1024px) {
                font-size: 1.4rem;
              }
            `}
          >
            {label}
          </h3>
        </div>
      </RainbowBorderedBox>
    </a>
  )
}

export default FeatureItem
