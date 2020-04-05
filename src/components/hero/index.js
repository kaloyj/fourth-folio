import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import { COLOR_SCHEME } from "../layout"
import Navbar from "../navbar"
import HeroBackground from "./hero-backdrop"

const Hero = ({ setAvoidScroll }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-flow: row wrap;
        align-content: space-between;
        background: ${COLOR_SCHEME.darkBlack};
        background: linear-gradient(
          180deg,
          rgba(16, 17, 18, 1) 40%,
          rgba(16, 17, 18, 0) 100%
        );
      `}
    >
      <Navbar setAvoidScroll={setAvoidScroll}></Navbar>
      <div
        css={css`
          position: relative;
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;

          @media only screen and (min-width: 1200px) {
            flex: 0 0 80%;
            margin-left: 10%;
          }
        `}
      >
        <div
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
          `}
        >
          <motion.h1
            css={css`
              flex: 0 0 54%;
              font-size: 2.75rem;
              line-height: 2.5rem;
              text-align: center;

              @media only screen and (min-width: 375px) {
                font-size: 4.5rem;
                line-height: 4rem;
              }

              @media only screen and (min-width: 1024px) {
                flex: 0 0 64%;
              }
            `}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            Carlo Janea
          </motion.h1>

          <motion.h3
            css={css`
              flex: 0 0 64%;
              font-size: 0.85rem;
              text-align: center;
              font-weight: 200;
              margin-top: 0.5rem;

              @media only screen and (min-width: 375px) {
                font-size: 1.125rem;
              }

              @media only screen and (min-width: 768px) {
                flex: 0 0 64%;
                font-size: 1.5rem;
              }
            `}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            Frontend Engineer
          </motion.h3>
        </div>
      </div>

      <div
        css={css`
          flex: 0 0 88%;
          margin-left: 6%;
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-flow: row wrap;
            flex: 0 0 5%;
            justify-content: center;

            @media only screen and (min-width: 1024px) {
              svg {
                height: 64px;
                width: 64px;
              }
            }
          `}
        >
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 17L12 21M12 21L8 17M12 21L12 3"
              stroke={COLOR_SCHEME.accent}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            css={css`
              width: 100%;
              color: white;
              text-align: center;
              font-size: 0.7rem;
              font-weight: 400;
              margin-top: 0.4rem;
              text-transform: uppercase;

              @media only screen and (min-width: 1024px) {
                font-size: 1rem;
              }
            `}
          >
            more
          </div>
        </div>
      </div>
      <HeroBackground></HeroBackground>
    </div>
  )
}

export default Hero
