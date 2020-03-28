import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useMainPhoto from "../hooks/useMainPhoto"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Footer from "../components/footer"
import Work from "../components/work"

const IndexPage = () => {
  const { fluid: mainPhoto } = useMainPhoto()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero mainPhoto={mainPhoto}></Hero>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Work></Work>
      <Footer></Footer>
    </Layout>
  )
}
export default IndexPage
