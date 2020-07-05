import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"
import styled from "@emotion/styled"
import Feature from "./feature"

const HeroSubText = styled("h3")`
  flex: 0 0 64%;
  font-size: 0.85rem;
  text-align: center;
  font-weight: 200;
  margin-top: 0.5rem;

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
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-flow: row wrap;
        align-content: center;
        background: ${COLOR_SCHEME.darkBlack};
        padding-top: 0.5rem;
        @media only screen and (min-width: 375px) {
          padding-top: 2rem;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;

          @media only screen and (min-width: 1200px) {
            flex: 0 0 80%;
            margin-left: 10%;
          }
        `}
      >
        <h1
          css={css`
            flex: 0 0 90%;
            font-size: 2.75rem;
            line-height: 2.5rem;
            text-align: center;

            @media only screen and (min-width: 375px) {
              flex: 0 0 100%;
            }

            @media only screen and (min-width: 768px) {
              font-size: 3rem;
            }
          `}
        >
          Carlo Janea
        </h1>
        <HeroSubText>Frontend Engineer</HeroSubText>
        <HeroSubText>Cebu, PHL</HeroSubText>
      </div>

      <Feature></Feature>
    </div>
  )
}

export default Hero
