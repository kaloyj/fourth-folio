import React, { Fragment } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Footer from "../components/footer"
import Work from "../components/work"

export const SectionHeaders = styled("h2")`
  margin-top: 1.5rem;
  width: 88%;
  margin-left: 6%;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: ${props => (props.isCentered ? "center" : "left")};
    margin-left: 4%;
    font-size: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.75rem;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <Fragment>
        <SEO title="Home" />
        <Hero></Hero>
        <div
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row wrap;

            @media only screen and (min-width: 1200px) {
              flex: 0 0 80%;
              margin-left: 10%;
            }

            @media only screen and (min-width: 1920px) {
              flex: 0 0 60%;
              margin-left: 20%;
            }
          `}
        >
          <About></About>
          <Experience></Experience>
          <Work></Work>
        </div>

        <Footer></Footer>
      </Fragment>
    </Layout>
  )
}
export default IndexPage
