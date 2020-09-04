import React from "react";

import SEO from "../components/utils/seo";
import Glitch from "../components/glitch";
import About from "../components/about";
import Skills from "../components/skills";
import Languages from '../components/languages';
import Form from '../components/form';

import '../styles/index.sass';

const IndexPage = () => {
  return (
    <>
      <SEO title="Portfolio" keywords={[`portfolio`, `frontend`, `developer`]} />
      <Glitch/>
      <About/>
      <Skills/>
      <Languages/>
      <Form/>
    </>
  )
}

export default IndexPage
