import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Contact from "./contact"
import { COLOR_SCHEME } from "../layout"
import Codepen from "./assets/codepen.svg"
import Github from "./assets/github.svg"
import Twitter from "./assets/twitter.svg"
import Linkedin from "./assets/linkedin.svg"

const RectangularSVGContainerLink = styled("a")`
  height: 50px;
  width: 100px;
  margin: 0 4%;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    margin: 0 1%;
  }
`

const SVGContainerLink = styled("a")`
  height: 30px;
  width: 30px;
  margin: 0 4%;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    margin: 0 1%;
  }
`

const Footer = () => {
  return (
    <footer
      id="contact"
      css={css`
        flex: 0 0 100%;
        min-height: 72.5vh;
        display: flex;
        flex-flow: row wrap;
        position: relative;
        background-color: ${COLOR_SCHEME.darkBlack};
        margin-top: 14rem;

        @media only screen and (min-width: 768px) {
          min-height: 50vh;
        }

        @media only screen and (min-width: 1024px) {
          min-height: 45vh;
          margin-top: 20rem;
        }
      `}
    >
      <Contact></Contact>

      <div
        css={css`
          flex: 0 0 100%;
          height: 100%;
          display: flex;
          flex-flow: row wrap;
          align-content: flex-end;
          justify-content: center;
          color: white;
          padding-bottom: 1rem;

          @media only screen and (min-width: 375px) {
            padding-bottom: 1rem;
          }

          @media only screen and (min-width: 1024px) {
            padding-bottom: 4rem;
          }
        `}
      >
        <h4
          css={css`
            color: white;
            flex: 0 0 100%;
            display: flex;
            justify-content: center;
            text-align: center;
            font-family: Source Code Pro;
            font-size: 0.9rem;
            font-weight: 400;
            margin-bottom: 0.2rem;

            @media only screen and (min-width: 768px) {
              justify-content: flex-end;
              text-align: right;
              flex: 0 0 92%;
              margin-right: 4%;
            }

            @media only screen and (min-width: 1200px) {
              flex: 0 0 72%;
              margin: 0 14%;
            }

            @media only screen and (min-width: 1920px) {
              flex: 0 0 56%;
              margin: 0 22%;
            }
          `}
        >
          © {new Date().getFullYear()}, Carlo Janea
        </h4>

        <div
          css={css`
            flex: 0 0 80%;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: center;
            margin-top: 4%;

            @media only screen and (min-width: 768px) {
              flex: 0 0 92%;
              margin-top: 1%;
              margin-right: 4%;
              justify-content: flex-end;

              a:last-of-type {
                margin-right: 0;
              }
            }

            @media only screen and (min-width: 1200px) {
              flex: 0 0 72%;
              margin: 1% 14%;
            }

            @media only screen and (min-width: 1920px) {
              flex: 0 0 56%;
              margin: 1% 22%;
            }
          `}
        >
          <SVGContainerLink href="https://github.com/kaloyj">
            <Github
              height="100%"
              width="100%"
              aria-label="github link"
            ></Github>
          </SVGContainerLink>

          <SVGContainerLink href="https://www.linkedin.com/in/carlo-janea-2880a2132/">
            <Linkedin
              height="100%"
              width="100%"
              aria-label="linkedin link"
            ></Linkedin>
          </SVGContainerLink>

          <SVGContainerLink href="https://twitter.com/carlojanea">
            <Twitter
              height="100%"
              width="100%"
              aria-label="twitter link"
            ></Twitter>
          </SVGContainerLink>

          <RectangularSVGContainerLink href="https://codepen.io/henrypeviani">
            <Codepen
              height="100%"
              width="100%"
              aria-label="codepen link"
            ></Codepen>
          </RectangularSVGContainerLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
