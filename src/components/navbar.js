import React, { Fragment, useState, useEffect } from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import useMainPhoto from "../hooks/useMainPhoto"
import { COLOR_SCHEME } from "./layout"

const NAVIGATION_LINKS = [
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
const Navbar = ({ setAvoidScroll }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false)
  const { fluid: mainPhoto } = useMainPhoto()

  useEffect(() => {
    setAvoidScroll(isShowingMenu)
  }, [isShowingMenu, setAvoidScroll])

  return (
    <Fragment>
      {isShowingMenu && (
        <div
          css={css`
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-content: center;
            background-color: ${COLOR_SCHEME.darkBlack};
            position: relative;
          `}
        >
          <button
            type="button"
            onClick={() => setIsShowingMenu(false)}
            css={css`
              color: white;
              position: absolute;
              top: 3%;
              right: 5%;
              font-size: 1.5rem;
              font-weight: 200;
            `}
          >
            x
          </button>
          {NAVIGATION_LINKS.map(navLink => (
            <a
              href={navLink.href}
              target={navLink.external ? "_blank" : "_self"}
              css={css`
                color: white;
                flex: 0 0 60%;
                margin: 1.5rem 0;
                border: none;
                background: transparent;
                font-size: 1rem;
                font-family: Source Code Pro;
                text-align: center;
              `}
              onClick={() => setIsShowingMenu(false)}
            >
              {navLink.label}
            </a>
          ))}
        </div>
      )}
      <div
        css={css`
          flex: 0 0 100%;
          padding: 2.5% 4%;
          margin: 1rem 0;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid ${COLOR_SCHEME.accent};

            @media only screen and (min-width: 375px) {
              width: 70px;
              height: 70px;
            }
          `}
        >
          <Img fluid={mainPhoto}></Img>
        </div>
        <button
          type="button"
          css={css`
            height: 30px;
            width: 30px;
            border: none;
            background-color: transparent;
            padding: 0;

            @media only screen and (min-width: 375px) {
              width: 36px;
              height: 36px;
            }
          `}
          onClick={() => {
            setIsShowingMenu(true)
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Fragment>
  )
}

export default Navbar
