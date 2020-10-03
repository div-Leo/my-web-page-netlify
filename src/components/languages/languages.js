import React, { useState, useEffect } from "react";
import Revealer from "../utils/revealer"

import english from "../../images/english.gif";
import italian from "../../images/italian.gif";
import spanish from "../../images/spanish.gif";

const languages = [
  {flag:'🇮🇹', gif:italian},
  {flag:'🇬🇧', gif:english},
  {flag:'🇪🇸', gif:spanish}
];

const Languages = () => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const intId = setInterval(() => {
      setSelected(selected =>
        selected < languages.length - 1
          ? selected+1
          : 0
      )
    }, 4000);
    return () => clearInterval(intId);
  }, [])

  return (
    <div className="languages_container">
      <Revealer revealIn="fadeInUp" revealOut="fadeOut">
        <div className="languages_gif">
          <div className="gif_container">
            <div className="languages_image"></div>
            {/* <div className="languages_image" style={{backgroundImage:`url(${languages[selected].gif})`}}></div> */}
            {/* <Gif gif={languages[selected].gif} /> */}
            <div className="languages_icon">
              <span>{languages[selected].flag}</span>
            </div>
          </div>
        </div>
      </Revealer>
    </div>
)}

const Gif = ({gif}) => {
  const [animation, setAnimation] = useState('revealGifLeft')

  useEffect(() => {
    setTimeout(() => {
      setAnimation('revealGifLeft')
    }, 0);
    return () => {
      setAnimation('')
    }
  },[gif])

  return (
    <div 
      className={`languages_image ${animation} `}
      style={{backgroundImage:`url(${gif})`}}>
    </div>
)}

export default Languages