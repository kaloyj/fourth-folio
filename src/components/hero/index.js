import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"
import styled from "@emotion/styled"
import Feature from "./feature"
import IconContainer from "./icon-container"

const HeroSubText = styled("h3")`
  flex: 0 0 64%;
  font-size: 0.85rem;
  font-weight: 200;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 375px) {
    font-size: 1.125rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`
const Hero = () => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        background: ${COLOR_SCHEME.darkBlack};
        display: grid;
        border: 1px solid white;
        grid-template-columns: 8fr;
        grid-template-rows: 1.5fr 1fr 5fr 0.5fr;
        grid-template-areas:
          "summary"
          "icons"
          "feature"
          "more";

        @media only screen and (min-width: 768px) {
          width: 80vw;
          margin-left: 10vw;

          grid-template-columns: 3fr 5fr;
          grid-template-rows: 3.5fr 0.5fr 2.5fr 1.5fr;
          grid-template-areas:
            "summary feature"
            ". feature"
            "icons feature"
            "more feature";
        }
      `}
    >
      <div
        css={css`
          grid-area: summary;
          position: relative;
          width: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-content: center;
          border: 1px solid white;

          @media only screen and (min-width: 1200px) {
            flex: 0 0 80%;
            margin-left: 10%;
            margin-top: 1rem;
          }
        `}
      >
        <h1
          css={css`
            flex: 0 0 95%;
            font-size: 2.5rem;
            text-align: center;

            @media only screen and (min-width: 768px) {
              font-size: 3rem;
            }
          `}
        >
          Carlo Janea
        </h1>
        <HeroSubText>Frontend Engineer</HeroSubText>
        <HeroSubText>
          Cebu, PHL{" "}
          <span
            role="img"
            aria-label="Philippine flag"
            css={css`
              margin-left: 0.25rem;
            `}
          >
            🇵🇭
          </span>
        </HeroSubText>
      </div>

      <div
        css={css`
          grid-area: icons;
          color: white;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
          border: 1px solid white;
        `}
      >
        <IconContainer>xxx</IconContainer>
        <IconContainer>xxx</IconContainer>
        <IconContainer>xxx</IconContainer>
      </div>

      <Feature></Feature>

      <div
        css={css`
          grid-area: more;
          color: white;
          border: 1px solid white;
        `}
      >
        more
      </div>
    </div>
  )
}

export default Hero
