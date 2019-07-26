import React from "react"

import SEO from "../components/utils/seo"
import Glitch from "../components/glitch"
import About from "../components/about"

import '../styles/index.sass'

const IndexPage = () => {
  return (
    <>
      <SEO title="Portfolio" keywords={[`portfolio`, `frontend`, `developer`]} />
      <Glitch/>
      <About/>
    </>
  )
}

export default IndexPage
