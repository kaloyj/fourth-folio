import React, { Fragment } from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import Terminal from "./terminal"
import { COLOR_SCHEME } from "./layout"

const Hero = ({ mainPhoto }) => {
  return (
    <Fragment>
      <div
        css={css`
          flex: 0 0 92%;
          margin: 1rem 4% 1rem;
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
        <div
          css={css`
            height: 30px;
            width: 30px;

            @media only screen and (min-width: 375px) {
              width: 36px;
              height: 36px;
            }
          `}
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
        </div>
      </div>

      <Terminal></Terminal>
      <div
        css={css`
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-end;
          transform: translateY(-30%);
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
          `}
        >
          Frontend Engineer
        </h3>
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
        `}
      >
        <div
          css={css`
            height: 48px;
            width: 48px;
            display: flex;
            flex-flow: row wrap;
          `}
        >
          <svg
            width="100%"
            height="100%"
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
              font-size: 0.6rem;
              font-weight: 400;
              margin-top: 0.4rem;
              letter-spacing: 0.125rem;
              text-transform: uppercase;
            `}
          >
            more
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Hero
