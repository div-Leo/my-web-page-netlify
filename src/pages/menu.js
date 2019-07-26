import React from "react"

import SEO from "../components/utils/seo"
import Menu from "../components/menu"

const MenuPage = () => {
  return (
    <>
      <SEO title="Menu" keywords={[`portfolio`, `frontend`, `developer`]} />
      <Menu/>
    </>
  )
}

export default MenuPage
