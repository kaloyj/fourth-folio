import React, { useState, useEffect, useLayoutEffect } from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import useMainPhoto from "../hooks/useMainPhoto"
import { COLOR_SCHEME } from "./layout"
import NavbarMenu from "./navbar-menu"
import { AnimatePresence, motion } from "framer-motion"

const getWidth = () =>
  (typeof window !== "undefined" && window.window.innerWidth) ||
  (typeof document !== "undefined" &&
    (document.documentElement.clientWidth || document.body.clientWidth))

// these are the only breakpoints
// we currently consider
export const BREAKPOINTS_TYPE = {
  MOBILE: "mobile",
  TABLET: "tablet",
  HUGE_TABLET: "huge_tablet",
}

const getBreakPoint = width => {
  if (width >= 1024) return BREAKPOINTS_TYPE.HUGE_TABLET
  if (width >= 768) return BREAKPOINTS_TYPE.TABLET
  return BREAKPOINTS_TYPE.MOBILE
}

const Navbar = ({ setAvoidScroll }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false)
  const { fluid: mainPhoto } = useMainPhoto()

  const [screenWidth, setScreenWidth] = useState(getWidth())
  const currentBreakpoint = getBreakPoint(screenWidth)

  useLayoutEffect(() => {
    const onScreenResizeFunction = () => setScreenWidth(getWidth())

    if (typeof window !== "undefined")
      window.addEventListener("resize", onScreenResizeFunction)

    return () =>
      typeof window !== "undefined"
        ? window.removeEventListener("resize", onScreenResizeFunction)
        : null
  }, [])

  useEffect(() => {
    setAvoidScroll(isShowingMenu)
  }, [isShowingMenu, setAvoidScroll])

  return (
    <div
      css={css`
        flex: 0 0 90%;
        margin: 1rem 5%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;

        @media only screen and (min-width: 1200px) {
          flex: 0 0 76%;
          margin: 1.5rem 12%;
        }

        @media only screen and (min-width: 1920px) {
          flex: 0 0 56%;
          margin: 1.5rem 22%;
        }
      `}
    >
      <div
        css={css`
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid ${COLOR_SCHEME.accent};

          @media only screen and (min-width: 375px) {
            width: 70px;
            height: 70px;
          }

          @media only screen and (min-width: 1024px) {
            width: 90px;
            height: 90px;
          }
        `}
      >
        <Img fluid={mainPhoto}></Img>
      </div>
      {currentBreakpoint !== BREAKPOINTS_TYPE.HUGE_TABLET && (
        <motion.button
          type="button"
          css={css`
            height: 30px;
            width: 30px;
            border: none;
            background-color: transparent;
            padding: 0;
            z-index: 1;

            @media only screen and (min-width: 375px) {
              width: 36px;
              height: 36px;
            }
          `}
          onClick={() => {
            setIsShowingMenu(true)
          }}
          whileHover={{ scale: 1.125 }}
          whileTap={{ scale: 0.95 }}
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
        </motion.button>
      )}

      <AnimatePresence>
        {(isShowingMenu ||
          currentBreakpoint === BREAKPOINTS_TYPE.HUGE_TABLET) && (
          <NavbarMenu
            setIsShowingMenu={setIsShowingMenu}
            currentBreakpoint={currentBreakpoint}
          ></NavbarMenu>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
