import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";

import emoji from '../../components/utils/emoji'

const Header = ({ siteTitle, page }) => {  
  return (
    <>
    <ScrollPercenteage/>
    <div className="nav" >
      <div className="nav_logo">div.Leo</div>
      <div className="nav_title">{siteTitle}</div>
      <div className="nav_note"> today I'm feeling <span>{emoji()}</span></div>
    </div>
    <ScrollBtn/>
    </>
  )
}

const ScrollBtn = () => {
  const [scrollTop, setScrollTop] = useState(0);
  let d = document.documentElement

  const scrollDonw = () => {
    window.scroll({
      top: d.clientHeight-200,
      behavior: 'smooth'
    });
  }
  
  useEffect(() => { 
    window.addEventListener('scroll', () => d.scrollTop < 100 && setScrollTop((d.scrollTop))) 
  },[])

  return (
    <a className="mouse_container" onClick={scrollDonw} style={{display: scrollTop ? 'none' : 'block'}}>
      <div className='mouse'>
        <div className="mouse_wheel"></div>
      </div>
    </a>
  )
}

const ScrollPercenteage = () => {
  const [scroll, setScroll] = useState(0);
  let d = document.documentElement
  
  const scrollHeight = () => {
    setScroll((d.scrollTop)/((d.scrollHeight) - d.clientHeight) * 100)
  }

  useEffect(() => { 
    window.addEventListener('scroll', scrollHeight) 
  },[])

  return (
    <div className="scroll_height" style={{width : scroll + 'vw'}}></div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
