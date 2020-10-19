import React, { useState, useEffect } from "react";
import Revealer from "../utils/revealer"

const Languages = () => {
  return (
    <div className="languages_container">
      <Revealer revealIn="fadeInUp" revealOut="fadeOut">
        <div className="languages_gif">
          <div className="gif_container">
            <div className="languages_image"></div>
            <div className="languages_icon">
            </div>
          </div>
        </div>
      </Revealer>
    </div>
)}

export default Languages