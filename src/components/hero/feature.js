import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import FeatureItem from "./feature-item"
import { COLOR_SCHEME } from "../layout"
import { isMobile } from "../../utils/device"

const FEATURE_ITEMS = [
  {
    label: "About",
    href: "#about-me",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke={COLOR_SCHEME.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
          stroke={COLOR_SCHEME.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14V17M12 14V17M16 14V17M3 21H21M3 10H21M3 7L12 3L21 7M4 10H20V21H4V10Z"
          stroke={COLOR_SCHEME.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Work",
    href: "#past-works",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 9L11 12L8 15M13 15H16M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z"
          stroke={COLOR_SCHEME.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H17V22L13 18H9C8.44772 18 7.94772 17.7761 7.58579 17.4142M7.58579 17.4142L11 14H15C16.1046 14 17 13.1046 17 12V6C17 4.89543 16.1046 4 15 4H5C3.89543 4 3 4.89543 3 6V12C3 13.1046 3.89543 14 5 14H7V18L7.58579 17.4142Z"
          stroke={COLOR_SCHEME.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Blog",
    href: "https://blog.carlojanea.com",
    external: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z"
          stroke={COLOR_SCHEME.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

let REFRESH_RATE = 10

// adjust index if odd for hover animation
// to be on the extremes if last element
function getAdjustedIndex(index, total) {
  if (total % 3 === 0) return index
  else return index === total - 1 ? index + 1 : index
}

const Feature = () => {
  const [xPos, setXPos] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    let _isMobile = isMobile()
    let ctr = 0
    function updateXPosition(e) {
      if (ctr % REFRESH_RATE === 0) setXPos(e.clientX)
      ctr++
    }

    if (!_isMobile) window.addEventListener("mousemove", updateXPosition)

    return () => {
      if (!_isMobile) window.removeEventListener("mousemove", updateXPosition)
    }
  }, [])

  return (
    <div
      css={css`
        grid-area: feature;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: center;

        @media only screen and (min-width: 768px) {
          justify-content: flex-start;
        }

        @media only screen and (min-width: 1200px) {
          align-content: flex-start;
          padding-top: 2rem;
        }
      `}
    >
      {FEATURE_ITEMS.map((feature, index) => (
        <FeatureItem
          key={feature.label}
          index={getAdjustedIndex(index, FEATURE_ITEMS.length)}
          feature={feature}
          xPos={xPos}
          setXPos={setXPos}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        ></FeatureItem>
      ))}
    </div>
  )
}

export default Feature
