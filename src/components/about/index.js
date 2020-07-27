import React from "react"
import { css } from "@emotion/core"
import About from "./about"
import Skills from "./skills"
import { SectionHeaders } from "../../pages"

export const ABOUT_ITEMS = {
  about: "about",
  skills: "skills",
}

const AboutContainer = () => {
  return (
    <div
      css={css`
        flex: 0 0 100%;
        display: flex;
        flex-flow: row wrap;
        min-height: 100vh;
        align-content: flex-start;
      `}
    >
      <SectionHeaders id="about-me">Who?</SectionHeaders>
      <div
        css={css`
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;
          perspective: 500px;

          @media only screen and (min-width: 375px) {
            margin-top: 1rem;
          }

          @media only screen and (min-width: 768px) {
            margin-top: 2rem;
          }
        `}
      >
        <About></About>
        <Skills></Skills>
      </div>
    </div>
  )
}

export default AboutContainer
