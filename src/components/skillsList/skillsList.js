import React from "react";
import Revealer from '../utils/revealer';

const skillsList = ['JavaScript', 'TypeScript', 'CSS', 'SASS', 'HTML', 'BEM', 'React (v16.8)', 'Redux', 'Svelte', 'Styled-Componets', 'Next.js', 'Gatsby', 'Angular (v2+)', 'RxJS', 'GraphQL', 'Express', 'Koa', 'Docker', 'Git', 'SQL', 'MongoDB', 'Redis', 'Webpack', 'Gulp', 'Mocha', 'Jest', 'Cypress']

function SkillsList () {
  return (
    <div>
      <h1 className="skills_title">Skills</h1>
        <Revealer revealIn="skills_list_container--open" revealOut="skills_list_container--close">
          <div>
            <div className="skills_list">
              {skillsList.map(skill => 
                <div key={skill} className="skills_item">
                <Revealer revealIn="revealText" revealOut="fadeOut">
                  <p>{skill}</p>
                </Revealer>
                </div>)}
            </div>
          </div>
        </Revealer>
    </div>
)};

export default SkillsList;
