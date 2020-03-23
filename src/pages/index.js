import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Terminal from "../components/terminal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Terminal></Terminal>
  </Layout>
)

export default IndexPage
