import React, { useState, useEffect } from "react";
import Revealer from "../utils/revealer";
import italian from "../../images/italian.gif";
import english from "../../images/english.gif";
import spanish from "../../images/spanish.gif";

const Languages = () => {
  return (
    <div className="languages_container">
      <Revealer revealIn="fadeInUp" revealOut="fadeOut">
        <div className="languages_gif">
          <div className="gif_container">
            <div className="languages_image">
            <div className="gifs">
              <div className="gif">
                <img src={italian}></img>
              </div>
              <div className="gif">
                <img src={english}></img>
              </div>
              <div className="gif">
                <img src={spanish}></img>
              </div>
            </div>
            </div>
            <div className="languages_icon">
            </div>
          </div>
        </div>
      </Revealer>
    </div>
)}

export default Languages