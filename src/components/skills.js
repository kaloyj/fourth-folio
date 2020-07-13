import React, { Fragment } from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "./layout"
import TerminalHeader from "./terminal-header"

const skills = [
  {
    skill: "JS",
    level: 8,
  },
  {
    skill: "Communication",
    level: 7,
  },
  {
    skill: "React",
    level: 7,
  },
  {
    skill: "Empathy",
    level: 6,
  },
  {
    skill: "UI/UX",
    level: 5,
  },
  {
    skill: "Accessibility",
    level: 5,
  },
  {
    skill: "Containers",
    level: 3,
  },
  {
    skill: "Testing",
    level: 3,
  },
]

const Skills = () => {
  return (
    <Fragment>
      <div
        css={css`
          min-height: 50vh;
          flex: 0 0 88%;
          margin: 0 6%;
          display: flex;
          flex-flow: row wrap;
          background-color: ${COLOR_SCHEME.darkBlack};
          border: 1px solid ${COLOR_SCHEME.accent};
          border-radius: 10px;
          padding: 1rem;
          padding-top: 2rem;
          position: relative;
          overflow: hidden;

          @media only screen and (min-width: 768px) {
            flex: 0 0 54%;
            margin: 1rem 0 1rem 4%;
          }
        `}
      >
        <TerminalHeader title="skills"></TerminalHeader>
        {skills.map(({ skill, level }) => (
          <div
            key={skill}
            css={css`
              flex: 0 0 100%;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              margin-bottom: 1rem;
            `}
          >
            <span
              css={css`
                flex: 0 0 45%;
                text-align: right;
                font-size: 0.75rem;
                color: white;

                @media only screen and (min-width: 375px) {
                  flex: 0 0 40%;
                }

                @media only screen and (min-width: 1024px) {
                  font-size: 1.25rem;
                }
              `}
            >
              {skill}
            </span>
            <div
              aria-label={`experience level ${level} out of 10`}
              css={css`
                margin-left: 5%;
                flex: 0 0 50%;
                display: flex;
                flex-flow: row wrap;

                @media only screen and (min-width: 375px) {
                  flex: 0 0 55%;
                }
              `}
            >
              {[...Array(level)].map((_, index) => (
                <span
                  key={index}
                  role="img"
                  aria-hidden
                  css={css`
                    @media only screen and (min-width: 1024px) {
                      font-size: 1.4rem;
                      color: white;
                    }
                  `}
                >
                  ⚡️
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Skills
