import React from "react"
import PropTypes from "prop-types"

import Header from "./header/index"
import Footer from "./footer/index"
import DotCursor from "../components/dotCursor"
import Transition from "../components/utils/transition"

const Layout = ({ children, location, ...props }) => {
  const isNight = new Date().getHours() < 8 || new Date().getHours() > 19;
  // const isNight = true;
  // const isNight = false;

  return (
    <div className={isNight ? 'dark_theme' : 'light_theme'}>
      <div className='layout'>
        <Header siteTitle={props['*'] || 'Portfolio'} page={props['*']} />
          <Transition location={location} >
              <main>{children}</main>
          </Transition>
        <Footer />
        <DotCursor location={location}/>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
  
