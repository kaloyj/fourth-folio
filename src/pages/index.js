import React, { Fragment } from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Footer from "../components/footer"
import Work from "../components/work"

export const SectionHeaders = styled("h2")`
  margin-top: 1.5rem;
  width: 88%;
  margin-left: 6%;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-left: 4%;
    font-size: 2rem;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      {({ setAvoidScroll }) => (
        <Fragment>
          <SEO title="Home" />
          <Hero setAvoidScroll={setAvoidScroll}></Hero>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Work></Work>
          <Footer></Footer>
        </Fragment>
      )}
    </Layout>
  )
}
export default IndexPage
