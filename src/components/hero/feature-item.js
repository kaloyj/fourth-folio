import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"

const BoxOverlayOffset = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10%, -10%);
  border: 2px solid ${COLOR_SCHEME.accent};
  opacity: 0.4;
  height: 100%;
  width: 100%;
  transition: opacity 0.25s ease;
`

const BoxOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid ${COLOR_SCHEME.accent};
  opacity: 0.4;
  height: 100%;
  width: 100%;
  transition: opacity 0.25s ease;
  z-index: 3;
`

const FeatureItem = ({ feature: { label, href, external } }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      css={css`
        flex: 0 0 40%;
        margin: 0 4% 8% 4%;
        position: relative;
        height: 100px;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 375px) {
          height: 140px;
        }

        @media only screen and (min-width: 768px) {
          flex: 0 0 24%;
          height: 150px;
        }

        @media only screen and (min-width: 1024px) {
          flex: 0 0 24%;
          height: 200px;
        }

        &:hover {
          .BoxOverlayOffset,
          .MainBoxBorder {
            opacity: 1;
          }

          .MainBox {
            background: ${COLOR_SCHEME.accent};
            h3 {
              color: ${COLOR_SCHEME.darkBlack};
            }
          }
        }
      `}
    >
      <BoxOverlayOffset className="BoxOverlayOffset"></BoxOverlayOffset>
      <BoxOverlay className="MainBoxBorder"></BoxOverlay>

      <div
        className="MainBox"
        css={css`
          flex: 0 0 100%;
          height: 100%;
          background: ${COLOR_SCHEME.darkBlack};
          z-index: 2;
          display: flex;
          flex-flow: row wrap;
          align-content: flex-end;
          transition: background 0.25s ease;
        `}
      >
        <h3
          css={css`
            text-align: right;
            flex: 0 0 84%;
            margin: 8%;
            font-size: 1rem;
            transition: color 0.25s ease;
          `}
        >
          {label}
        </h3>
      </div>
    </a>
  )
}

export default FeatureItem
