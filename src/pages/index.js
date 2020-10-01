import React from "react";

import SEO from "../components/utils/seo";
import Glitch from "../components/glitch";
import About from "../components/about";
import Skills from "../components/skills";
import Contacts from '../components/contacts';

import '../styles/index.sass';

const IndexPage = () => {
  return (
    <>
      <SEO title="Portfolio" keywords={[`portfolio`, `frontend`, `developer`]} />
      <Glitch/>
      <About/>
      <Skills/>
      <Contacts/>
    </>
  )
}

export default IndexPage
