import React from "react"
import { css } from "@emotion/core"
import ExperienceItem from "./experience-item"
const EXPERIENCES = [
  {
    yearStart: "2011",
    yearEnd: "2015",
    title: "High School",
    listTitle: "St. Joseph's Academy",
    listItems: ["Consistent Honor Student", "Graduated 2nd Honorable Mention"],
  },
  {
    yearStart: "2015",
    yearEnd: "2018",
    title: "Computer Science Degree",
    listTitle: "University of San Carlos",
    listItems: [
      "Magna Cum Laude",
      "Consistent Dean's Lister",
      "Top 4 DS Lister Data Structures",
      "Graduated with 1.25 GWA",
    ],
  },
  {
    yearStart: "Jan 2019",
    yearEnd: "Dec 2019",
    title: "Full Scale",
    listTitle: "Frontend Developer",
    listItems: [
      "maintained an employee database application with Vue",
      "maintained and developed a virtual summit application with React + Rails",
      "created a page builder application with React + Hooks",
    ],
  },
  {
    yearStart: "Jan 2020",
    yearEnd: "Present",
    title: "Caresharing, Inc.",
    listTitle: "React Frontend Engineer",
    listItems: [
      "maintained and developed a healthcare application used in multiple countries",
      "used Apollo GraphQL, React hooks, and Rails",
    ],
  },
].reverse()
const Experience = () => {
  return (
    <div
      css={css`
        width: 100%;
        min-height: 50vh;
        display: flex;
        flex-flow: row wrap;
        align-content: start;
        position: relative;
        margin-bottom: 2rem;
      `}
    >
      <div
        css={css`
          height: 100%;
          border: 1px solid white;
          width: 0;
          position: absolute;
          top: 0;
          left: 40%;
        `}
      ></div>

      {EXPERIENCES.map(experience => (
        <ExperienceItem
          key={experience.title}
          experience={experience}
        ></ExperienceItem>
      ))}
    </div>
  )
}

export default Experience
