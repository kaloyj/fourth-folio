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

const IconContainer = styled("span")`
  border: 2px solid ${COLOR_SCHEME.accent};
  position: absolute;
  top: 8%;
  left: 8%;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  transition: opacity 0.25s ease;

  path {
    transition: stroke 0.25s ease;
  }

  @media only screen and (min-width: 375px) {
    height: 50px;
    width: 50px;
  }

  @media only screen and (min-width: 1200px) {
    top: 6%;
    left: 4%;
  }
`

const FeatureItem = ({ feature: { label, href, external, icon } }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      css={css`
        flex: 0 0 40%;
        margin: 0 5% 8% 5%;
        position: relative;
        height: 100px;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 375px) {
          height: 140px;
          margin: 0 5% 12% 5%;
        }

        @media only screen and (min-width: 768px) {
          flex: 0 0 24%;
          height: 150px;
          margin: 0 4% 8% 4%;
        }

        @media only screen and (min-width: 1024px) {
          flex: 0 0 24%;
          height: 200px;
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
          position: relative;
        `}
      >
        <IconContainer className="FeatureItemIcon">{icon}</IconContainer>

        <h3
          css={css`
            text-align: right;
            flex: 0 0 84%;
            margin: 8%;
            font-size: 1rem;
            transition: color 0.25s ease;
            word-break: break-word;

            @media only screen and (min-width: 1024px) {
              font-size: 1.4rem;
            }
          `}
        >
          {label}
        </h3>
      </div>
    </a>
  )
}

export default FeatureItem
