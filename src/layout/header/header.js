import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";

import { document } from 'browser-monads';

import emoji from '../../components/utils/emoji'

function Header ({ siteTitle, page }) {  
  return (
    <>
      <ScrollPercentage/>
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

function ScrollBtn () {
  const [scrollTop, setScrollTop] = useState(false);
  let d = document.documentElement

  function scrollDown () {
    window.scroll({
      top: d.clientHeight-150,
      behavior: 'smooth'
    });
  }

  function toggleScrollIcon () {
    if (d.scrollTop < 100 && scrollTop) setScrollTop(false)
    else if (d.scrollTop > 100 && !scrollTop) setScrollTop(true)
  }
   
  useEffect(() => { 
    window.addEventListener('scroll', toggleScrollIcon) 
    return () => window.removeEventListener('scroll', toggleScrollIcon);
  },[])
  
  return (
    <a className="mouse_container pointer" data-alt="scroll" onClick={scrollDown} style={{opacity: scrollTop ? 0 : 1, pointerEvents: scrollTop ? 'none' : 'auto'}}>
      <div className='mouse'></div> 
    </a>
  )
}

function ScrollPercentage () {
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
