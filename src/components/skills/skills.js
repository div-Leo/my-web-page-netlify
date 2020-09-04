import React from 'react';
import Revealer from '../utils/revealer';

import SkillsList from '../skillsList';
import Likes from '../likes';

function Skills () {
  return (
    <div className="skills">
      <SkillsList/>
      <div className="others">
        <div className="strengths">
        <Revealer revealIn="fadeIn" revealOut="fadeOut">
          <h1 className="others_title">Others strengths</h1>
        </Revealer>
        <Revealer revealIn="fadeIn" revealOut="fadeOut">
          <p>
            With my experience as a JavaScript instructor I have learned how to explain complex concepts in easy words and to mentor junior developers, giving support and highlighting their strengths.
            <br/><br/>
            I've also developed a marked ability in debugging errors even in messy codes, incrementing my development speed.
          </p>
        </Revealer>
        </div>
        <Likes/>
      </div>
    </div>
)}

export default Skills;
