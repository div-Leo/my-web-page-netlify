import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";

import { document } from 'browser-monads';

import emoji from '../../components/utils/emoji'

const Header = ({ siteTitle, page }) => {  
  return (
    <>
      <ScrollPercenteage/>
      <div className="nav" >
        <div className="nav_logo">div.Leo</div>
        <div className="nav_title">{siteTitle}</div>
        <div className="nav_note"> 
          <div className="note_text">
            today I'm feeling 
          </div>
          <span>{emoji()}</span></div>
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
      top: d.clientHeight-250,
      behavior: 'smooth'
    });
  }
  
  useEffect(() => { 
    window.addEventListener('scroll', () => d.scrollTop < 100 && setScrollTop((d.scrollTop))) 
  },[])
  
  return (
    <a className="mouse_container" onClick={scrollDonw} style={{opacity: scrollTop ? 0 : 1, pointerEvents: scrollTop ? 'none' : 'auto'}}>
      <div className='mouse'></div> 
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
