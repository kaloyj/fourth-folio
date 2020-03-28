import React, { Fragment } from "react"
import { css } from "@emotion/core"
import useShowcasePhotos from "../../hooks/useShowcasePhotos"
import ShowcasePreview from "./showcase-preview"
import ShowcaseDetails from "./showcase-details"

const PAST_WORKS = [
  {
    title: "Page Builder X",
    tech: ["React", "Rails"],
    description: [
      "An application that allows people to create multiple pages through drag and drop and link them together to build a fully functional website.",
      "We handled state management locally with React Hooks (Context + Reducer), and stored data in a normalized JSON to be passed down to Rails.",
      "This application's name and associated company cannot be disclosed.",
    ],
    imageRef: "",
  },
  {
    title: "Recordion",
    tech: ["React", "TypeScript"],
    description: [
      "Recordion was a take-home project for my job application at Caresharing, Inc. They wanted an app that records things with a specific set of requirements.",
      "Built the boilerplate myself, including webpack and typescript configs, as well as the basic design system.",
      "State management was handled locally with React Context + reducer hook, and the DB representation is through localStorage",
      "Got the job with this project!",
    ],
    imageRef: "recordion",
  },
  {
    title: "Virtual Summit Application Z",
    tech: ["React", "Rails"],
    description: [
      "An application that allows people to host virtual talks and webinars while also monetizing it through memberships, bonuses, and referral links.",
      "We used React classes to build the components and Redux for state management.",
      "This application's name and associated company cannot be disclosed.",
    ],
    imageRef: "",
  },
  {
    title: "Getwork",
    tech: ["Angular", "SpringBoot"],
    description: [
      "Getwork is a job order web application that catered to the requirements given by a client from a specific Cebu-based company. It was an undergraduate project developed by three people. I worked on both the SpringBoot and Angular side of the project. The app was designed by a team mate.",
      "This web application can keep track of job orders, contracts, companies, and customers. It received a great mark from the client.",
    ],
    imageRef: "getwork",
  },
]

const Showcase = () => {
  const showcasePhotos = useShowcasePhotos()

  console.log({ showcasePhotos })
  return (
    <Fragment>
      <div
        css={css`
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        `}
      >
        {PAST_WORKS.map(work => (
          <ShowcasePreview
            key={work.title}
            item={work}
            photo={work.imageRef ? showcasePhotos[work.imageRef] : ""}
          ></ShowcasePreview>
        ))}
      </div>

      <ShowcaseDetails
        selected={PAST_WORKS[0]}
        photo={showcasePhotos["recordion"]}
      ></ShowcaseDetails>
    </Fragment>
  )
}

export default Showcase
