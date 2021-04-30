import React, { Fragment } from "react"
import { css } from "@emotion/core"
import ExperienceItem from "./experience-item"
import { SectionHeaders } from "../../pages"

const EXPERIENCES = [
  {
    yearStart: "2011",
    yearEnd: "2015",
    title: "High School",
    listTitle: "St. Joseph's Academy",
    listItems: [
      <span>Consistent Honor Student</span>,
      <span>Graduated 2nd Honorable Mention</span>,
    ],
  },
  {
    yearStart: "2015",
    yearEnd: "2018",
    title: "Computer Science Degree",
    listTitle: "University of San Carlos",
    listItems: [
      <span className="highlight-1">Magna Cum Laude</span>,
      <span>Consistent Dean's Lister</span>,
      <span>Top 4 DS Lister Data Structures</span>,
      <span>Graduated with 1.25 GWA</span>,
    ],
  },
  {
    yearStart: "Apr 2018",
    yearEnd: "Aug 2018",
    title: "Coding Avenue (Hireplicity)",
    listTitle: "Software Developer Intern",
    listItems: [
      <span>
        learned software development first-hand with industry experienced
        mentors
      </span>,
      <span>
        maintained and worked on a{" "}
        <span className="highlight-1">learning platform</span> built on PHP +
        React"
      </span>,
    ],
  },
  {
    yearStart: "Jan 2019",
    yearEnd: "Dec 2019",
    title: "Full Scale",
    listTitle: "Frontend Developer",
    listItems: [
      <span>
        Maintained and improved a{" "}
        <span className="highlight-1">virtual summit application</span> using
        ReactJS with Redux for statemanagement, and Ruby on Rails for the
        backend. Integrated with Stripe, Zapier, Mailchimp, andCloudinary for
        third party services. Code tested with Cypress.
      </span>,
      <span>
        Created a <span className="highlight-1">page builder application</span>{" "}
        with ReactJS and managed state with Context API andReact hooks. Also
        managed customer feedback with Intercom.
      </span>,
    ],
  },
  {
    yearStart: "Jan 2020",
    yearEnd: "Present",
    title: "Caresharing, Inc.",
    listTitle: "React Frontend Engineer",
    listItems: [
      <span>
        Maintained and built a{" "}
        <span className="highlight-1">healthcare application</span> used by
        majority of the hospitals in Netherlands.
      </span>,
      <span>
        Used React and Ruby on Rails for the main stack, and Apollo GraphQL for
        server side statemanagement, along with Context API and hooks for local
        state. Tested with BackstopJS.
      </span>,
      <span>
        Refactored code from class components to function components, library
        upgrades, and integrated features like video conferences, billing, and
        data monitoring.
      </span>,
    ],
  },
].reverse()
const Experience = () => {
  return (
    <Fragment>
      <SectionHeaders
        id="experience"
        css={css`
          margin-bottom: 1rem;
        `}
      >
        Experience
      </SectionHeaders>{" "}
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
        {EXPERIENCES.map(experience => (
          <ExperienceItem
            key={experience.title}
            experience={experience}
          ></ExperienceItem>
        ))}
      </div>
    </Fragment>
  )
}

export default Experience
