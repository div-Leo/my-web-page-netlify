import React, { useRef } from "react";
import { useScrollState } from 'scrollmonitor-hooks';

const About = () => {
  return (
    <div className="about">
      <div className="about_description">
        <AnimateText>
          <h1>Leonardo Di Vittorio </h1>
        </AnimateText> 
        <AnimateText>
          <div>
            <i>Creative Developer in </i>❤️<i>with UX/UI</i>
          </div>
        </AnimateText>
        <AnimateText>
          <p>
            I love starting projects from scratch, often described as <b>"highly creative"</b> by my co-workers. This means I can quickly turn ideas and designs into functioning code on both front and backend. 
            <br/><br/>
            I perform well in agile teams, trying to learn the most from my team members, so to grow faster.
            <br/><br/>
            Enthusiast about product and interior design, photography, editorial design, and everything that has a nice aesthetic.
            <br/><br/>
          </p>
        </AnimateText>
      </div>
    </div>
  )
}

export default About

const AnimateText = ({children}) => {
  const ref = useRef(null);
  const scrollState = useScrollState(ref);

  let animate = 'fadeInUp';
  if (scrollState.isFullyInViewport){
    animate = 'fadeInUp';
  } else if (scrollState.isBelowViewport) {
    animate = 'fadeOut';
  } 

  return React.cloneElement(children, {
    className: animate,
    ref: ref
  });
}