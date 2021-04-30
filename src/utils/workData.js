import React from "react"

export const PAST_WORKS = [
  {
    title: "Recordion",
    tech: ["React", "TypeScript"],
    description: [
      <span>
        Recordion was <span className="highlight-1">a take-home project</span>{" "}
        for my job application at Caresharing, Inc. They wanted{" "}
        <span className="highlight-1">an app that records things</span> with a
        specific set of requirements.
      </span>,
      <span>
        Built the boilerplate myself, including webpack and typescript configs,
        as well as the basic design system.
      </span>,
      <span>
        State management was handled locally with React Context + reducer hook,
        and the DB representation is through localStorage.
      </span>,
      <span>Got the job with this project!</span>,
    ],
    imageRef: "recordion",
  },
  {
    title: "Page Builder X",
    tech: ["React", "Rails"],
    description: [
      <span>
        An application that{" "}
        <span className="highlight-1">
          allows people to create multiple pages through drag and drop
        </span>{" "}
        and link them together to build a fully functional website.
      </span>,
      <span>
        We handled state management locally with React Hooks (Context +
        Reducer), and stored data in a normalized JSON to be passed down to
        Rails.
      </span>,
      <span>
        This application's name and associated company cannot be disclosed.
      </span>,
    ],
    imageRef: "",
  },
  {
    title: "Getwork",
    tech: ["Angular", "SpringBoot"],
    description: [
      <span>
        Getwork is{" "}
        <span className="highlight-1">a job order web application</span> that
        catered to the requirements given by a client from a specific Cebu-based
        company. It was an undergraduate project developed by three people. I
        worked on both the SpringBoot and Angular side of the project. The app
        was designed by a team mate.
      </span>,
      <span>
        This web application can{" "}
        <span className="highlight-1">
          keep track of job orders, contracts, companies, and customers.
        </span>{" "}
        It received a great mark from the client.
      </span>,
    ],
    imageRef: "getwork",
  },
  {
    title: "Virtual Summit Application Z",
    tech: ["React", "Rails"],
    description: [
      <span>
        An application that{" "}
        <span className="highlight-1">
          allows people to host virtual talks and webinars
        </span>{" "}
        while also monetizing it through memberships, bonuses, and referral
        links.
      </span>,
      <span>
        We used React classes to build the components and Redux for state
        management.
      </span>,
      <span>
        This application's name and associated company cannot be disclosed.
      </span>,
    ],
    imageRef: "",
  },
]

export const MORE_PROJECTS = [
  {
    title: "Bant",
    tech: ["NextJS", "Hasura", "Cypress", "ReactQuery", "TypeScript"],
    description: [
      <span>
        Going into adulthood, I used to manually keep track of my expenses, and
        realized how taxing it was to keep track of my expenses and savings, and
        to properly estimate my next budget.
      </span>,
      <span>Created this app to remedy the problem.</span>,
      <a
        href="https://bant.netlify.app"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://bant.netlify.app
      </a>,
    ],
    imageRef: "bant",
  },
  {
    title: "ilista",
    tech: ["NextJS", "Hasura", "Cypress", "ReactQuery", "TypeScript"],
    description: [
      <span>
        Sentimentality and nostalgia is a big thing for me, and having a place
        where I could curate a list for eachfavorite thing I could think of and
        easily look back to it made me decide to create this app.
      </span>,
      <a
        href="https://ilista-app.netlify.app"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://ilista-app.netlify.app
      </a>,
    ],
    imageRef: "ilista",
  },
  {
    title: "name-it",
    tech: ["NextJS", " Words & Thesaurus API", "jsPDF"],
    description: [
      <span>My handy tool to generate names for products.</span>,
      <a
        href="https://name-it.netlify.app"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://name-it.netlify.app
      </a>,
    ],
    imageRef: "nameIt",
  },
]
