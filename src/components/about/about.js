import React, { useRef } from "react";
import Revealer from '../utils/revealer';
import usePerspective from '../utils/usePerspective';

import profile from "../../images/leo.jpg";

const About = () => {
  const ref = useRef(null);
  const perspective = usePerspective(ref);

  return (
    <div className="about">
      <div className="about_description">
        <Revealer revealIn="fadeInUp" revealOut="fadeOut">
          <h1>Hi, I'm Leonardo <br/> Di Vittorio </h1>
        </Revealer> 
        <Revealer revealIn="fadeInUp" revealOut="fadeOut">
          <div>
            <i>Creative Developer in </i>❤️<i>with UX/UI</i>
          </div>
        </Revealer>
        <Revealer revealIn="fadeInUp" revealOut="fadeOut">
          <p>
            I love starting projects from scratch, often described as <b>"highly creative"</b> by my co-workers. This means I can quickly turn ideas and designs into functioning code on both front and backend. 
            <br/><br/>
            I perform well in agile teams, trying to learn the most from my team members, so to grow faster.
            <br/><br/>
            Enthusiast about product and interior design, photography, editorial design, and everything that has a nice aesthetic.
            <br/><br/>
          </p>
        </Revealer>
      </div>
        <div className="about_image">
          <div className="image_container" ref={ref}>
            <Revealer revealIn="revealImage" revealOut="hidenImage">
              <div style={{transition: 'all .3s ease',  transform: perspective}}>
                <img src={profile} alt="Profile image"/>
              </div>
            </Revealer>
          </div>
        </div>
    </div>
  )
}

export default About
