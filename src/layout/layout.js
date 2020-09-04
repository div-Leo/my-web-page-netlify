import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Header from "./header/index"
import Footer from "./footer/index"
import DotCursor from "../components/dotCursor"
import BrokenPixel from "../components/brokenPixel"
import Transition from "../components/utils/transition"

const Layout = ({ children, location, ...props }) => {
  
  useEffect(() => {
    const isNight = new Date().getHours() < 8 || new Date().getHours() > 19;
    document.getElementsByTagName('html')[0].classList.add(isNight ? 'dark_theme' : 'light_theme')
  },[])
  
  return (
    <div>
      <Header siteTitle={props['*'] || 'Portfolio'} page={props['*']} />
        <Transition location={location} >
            <main>{children}</main>
        </Transition>
      <Footer />
      <BrokenPixel/>
      <DotCursor location={location}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
  
