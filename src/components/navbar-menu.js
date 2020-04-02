import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "./layout"
import { BREAPOINTS_TYPE } from "./navbar"

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

const NavbarMenu = ({ currentBreakpoint, setIsShowingMenu }) => {
  switch (currentBreakpoint) {
    case BREAPOINTS_TYPE.HUGE_TABLET:
      return <NavbarMenuList></NavbarMenuList>
    case BREAPOINTS_TYPE.TABLET:
    case BREAPOINTS_TYPE.MOBILE:
    default:
      return (
        <div
          css={css`
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-content: center;
            background-color: ${COLOR_SCHEME.darkBlack};
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
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
              border: none;
              background: transparent;
            `}
          >
            x
          </button>
          {NAVIGATION_LINKS.map(navLink => (
            <a
              key={navLink.label}
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
      )
  }
}

const NavbarMenuList = () => {
  return (
    <div
      css={css`
        flex: 0 0 70%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-items: center;

        a:not(:last-of-type) {
          margin-right: 1.5rem;
        }
      `}
    >
      {NAVIGATION_LINKS.map(navLink => (
        <a
          key={navLink.label}
          href={navLink.href}
          target={navLink.external ? "_blank" : "_self"}
          css={css`
            color: white;
            flex: 0 1 auto;
            margin-left: 1.5rem;
            border: none;
            background: transparent;
            font-size: 1.125rem;
            font-family: Source Code Pro;
            text-align: right;
            text-decoration: none;
          `}
        >
          {navLink.label}
        </a>
      ))}
    </div>
  )
}
export default NavbarMenu
