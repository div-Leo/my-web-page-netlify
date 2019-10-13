import React, { useRef } from "react";
import { useScrollState } from 'scrollmonitor-hooks';

const skillsList = ['JavaScript', 'TypeScript', 'CSS', 'SASS', 'HTML', 'BEM', 'React (v16.8)', 'React Native', 'Redux', 'Styled-Componets', 'Next.js', 'Gatsby', 'Angular (v2+)', 'GreenSock', 'GraphQL', 'Express', 'Koa', 'Docker', 'Git', 'SQL', 'MongoDB', 'Redis', 'Webpack', 'Gulp', 'Mocha', 'Jest', 'Cypress']

const SkillsList = () => {
  const ref = useRef(null);
  const scrollState = useScrollState(ref);

  let animate = '--open';
  if (scrollState.isInViewport){
    animate = '--open';
  } else if (scrollState.isBelowViewport) {
    animate = '--close';
  } 

  return (
    <div>
      <h1 className="skills_title">Skills</h1>
      <div className={`skills_list_container ${animate}`} ref={ref}>
        <div className="skills_list">
          <AnimatedSkills skillsList={skillsList}/>
        </div>
      </div>
    </div>
)};

const AnimatedSkills = ({skillsList}) => {
  const ref = useRef(null);
  const scrollState = useScrollState(ref);
  
  let animate = 'revealText';
  if (scrollState.isInViewport){
    animate = 'revealText';
  } else if (scrollState.isBelowViewport) {
    animate = 'fadeOut';
  } 
  
  return skillsList.map(skill => 
    <div key={skill} className="skills_item">
      <p className={animate} ref={ref}>{skill}</p>
    </div>)
};

export default SkillsList;
