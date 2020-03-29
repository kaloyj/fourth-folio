import React from "react"
import { css } from "@emotion/core"
import Terminal from "./terminal"
import { COLOR_SCHEME } from "./layout"
import Navbar from "./navbar"

const Hero = ({ setAvoidScroll }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;

        @media only screen and (min-width: 768px) {
          align-content: space-between;
        }
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
        <Terminal></Terminal>
        <div
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-end;
            transform: translateY(-35%);
            margin-bottom: -7.5%;

            @media only screen and (min-width: 375px) {
              margin-bottom: 0;
            }

            @media only screen and (min-width: 768px) {
              justify-content: flex-start;
              transform: translateY(0%);
              order: 1;
            }
          `}
        >
          <h1
            css={css`
              flex: 0 0 54%;
              margin-right: 6%;
              font-size: 2.5rem;
              text-align: right;
              line-height: 2.25rem;

              @media only screen and (min-width: 375px) {
                font-size: 4.5rem;
                line-height: 4rem;
              }

              @media only screen and (min-width: 768px) {
                text-align: left;
                margin-right: 0;
                margin-left: 4%;
              }

              @media only screen and (min-width: 1024px) {
                flex: 0 0 64%;
              }
            `}
          >
            Carlo Janea
          </h1>

          <h3
            css={css`
              flex: 0 0 64%;
              margin-right: 6%;
              font-size: 0.85rem;
              text-align: right;
              font-weight: 200;
              margin-top: 0.5rem;

              @media only screen and (min-width: 375px) {
                font-size: 1.125rem;
              }

              @media only screen and (min-width: 768px) {
                flex: 0 0 64%;
                text-align: left;
                margin: 0.5rem 0 1rem 4.5%;
                font-size: 1.5rem;
              }
            `}
          >
            Frontend Engineer
          </h3>
        </div>
      </div>

      <div
        css={css`
          flex: 0 0 88%;
          margin-left: 6%;
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;

          @media only screen and (min-width: 375px) {
            margin-top: 0;
          }

          @media only screen and (min-width: 768px) {
            flex: 0 0 92%;
            justify-content: flex-start;
            margin-left: 4%;
            margin-bottom: 8%;
            order: 3;
          }

          @media only screen and (min-width: 1200px) {
            flex: 0 0 80%;
            margin-left: 10%;
            margin-top: 2rem;
            margin-bottom: 2%;
          }
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

            @media only screen and (min-width: 1200px) {
              margin-left: 4%;
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
              strokeWidth="1.5"
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
              letter-spacing: 0.125rem;
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
    </div>
  )
}

export default Hero
