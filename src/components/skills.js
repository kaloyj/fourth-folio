import React, { Fragment } from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "./layout"

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
      {/* <SectionHeaders
        css={css`
          margin-top: 1rem;
          margin-bottom: 1rem;
        `}
      >
        Skills
      </SectionHeaders> */}
      <div
        css={css`
          min-height: 50vh;
          flex: 0 0 88%;
          margin: 0 6%;
          display: flex;
          flex-flow: row wrap;
          background-color: ${COLOR_SCHEME.lightBlack};
          border-radius: 10px;
          padding: 1rem;

          -webkit-box-shadow: -12px 10px 26px 3px rgba(23, 25, 28, 1),
            -2px 2px 2px -2px rgba(23, 25, 28, 1);
          -moz-box-shadow: -12px 10px 26px 3px rgba(23, 25, 28, 1),
            -2px 2px 2px -2px rgba(23, 25, 28, 1);
          box-shadow: -12px 10px 26px -5px rgba(16, 17, 18, 1),
            -2px 2px 2px -2px rgba(16, 17, 18, 1);

          @media only screen and (min-width: 768px) {
            flex: 0 0 54%;
            margin: 1rem 0 1rem 4%;
          }
        `}
      >
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
              `}
            >
              {skill}
            </span>
            <div
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
                <span key={index} role="img" aria-label="lightning">
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
