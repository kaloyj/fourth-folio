import React, { useState, useCallback } from "react"
import { css } from "@emotion/core"
import About from "./about"
import Skills from "./skills"
import { SectionHeaders } from "../../pages"
import { isMobile } from "../../utils/device"

export const ABOUT_ITEMS = {
  about: "about",
  skills: "skills",
}

const getClassName = isSelected => {
  if (isMobile()) return "selected"

  return isSelected ? "selected" : "not-selected"
}

const AboutContainer = () => {
  const [selected, setSelected] = useState(ABOUT_ITEMS.about)
  const handleItemSelect = useCallback(type => setSelected(type), [setSelected])
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
      <SectionHeaders id="about-me" isCentered>
        Who?
      </SectionHeaders>
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
        <About
          type={ABOUT_ITEMS.about}
          onSelect={handleItemSelect}
          className={getClassName(selected === ABOUT_ITEMS.about)}
        ></About>
        <Skills
          type={ABOUT_ITEMS.skills}
          onSelect={handleItemSelect}
          className={getClassName(selected === ABOUT_ITEMS.skills)}
        ></Skills>
      </div>
    </div>
  )
}

export default AboutContainer
