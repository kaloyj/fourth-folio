import React from "react"
import { css } from "@emotion/core"
import FeatureItem from "./feature-item"

const FEATURE_ITEMS = [
  {
    label: "About",
    href: "#about-me",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Work",
    href: "#past-works",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Blog",
    href: "https://blog.carlojanea.com",
    external: true,
  },
]

const Feature = () => {
  return (
    <div
      css={css`
        flex: 0 0 92%;
        margin-left: 4%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-top: 2rem;

        @media only screen and (min-width: 375px) {
          margin-top: 2rem;
        }

        @media only screen and (min-width: 768px) {
          flex: 0 0 80%;
          margin-top: 4rem;
          margin-left: 10%;
        }
      `}
    >
      {FEATURE_ITEMS.map(feature => (
        <FeatureItem key={feature.label} feature={feature}>
          i am feature
        </FeatureItem>
      ))}
    </div>
  )
}

export default Feature
