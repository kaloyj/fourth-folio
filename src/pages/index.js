import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useMainPhoto from "../hooks/useMainPhoto"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Footer from "../components/footer"

const IndexPage = () => {
  const { fluid: mainPhoto } = useMainPhoto()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero mainPhoto={mainPhoto}></Hero>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Footer></Footer>
    </Layout>
  )
}
export default IndexPage
