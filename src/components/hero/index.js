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
    flex: 0 0 100%;
    justify-content: flex-end;
    text-align: right;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 1200px) {
    flex: 0 0 80%;
    font-size: 1rem;
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
          padding: 20vh 0;
          grid-template-columns: 4fr 6fr;
          grid-template-rows: 5fr 3fr 0.5fr 1.5fr;
          grid-template-areas:
            "summary feature"
            "icons feature"
            "more feature"
            ". feature";
        }

        @media only screen and (min-width: 1024px) {
          grid-template-columns: 3fr 7fr;
          grid-template-rows: 4fr 3fr 1.5fr 1.5fr;
        }

        @media only screen and (min-width: 1200px) {
          width: 70vw;
          margin-left: 15vw;
          grid-template-columns: 2fr 8fr;
          grid-template-rows: 4fr 3fr 1.5fr 1.5fr;
          padding: 10vh 0;
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

          @media only screen and (min-width: 768px) {
            justify-content: flex-end;
            width: 80%;
            margin-left: 10%;
          }

          @media only screen and (min-width: 1200px) {
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
              text-align: right;
            }

            @media only screen and (min-width: 1200px) {
              font-size: 2.75rem;
              text-align: right;
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

          @media only screen and (min-width: 768px) {
            width: 75%;
            margin-left: 20%;
            justify-content: flex-end;
            align-content: flex-start;
          }

          @media only screen and (min-width: 1200px) {
            width: 80%;
            margin-left: 20%;
            justify-content: flex-end;
            align-content: flex-start;
          }
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
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;

          @media only screen and (min-width: 768px) {
            justify-content: flex-end;
            width: 80%;
            margin-left: 10%;
            justify-content: flex-end;
          }
        `}
      >
        more
      </div>
    </div>
  )
}

export default Hero
