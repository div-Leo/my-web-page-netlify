import React from 'react';
import Revealer from '../utils/revealer';

const emojiList = ['🥞','☕','💻','🍕','🍻','🍝','🍷','🍾','🎉','🥑','🍣','⚽️','🚲','🎧','✏️','🍵','📷','✈️','☀️','🍍','📱'];

const Likes = () => (
  <div>
    <Revealer revealIn="fadeIn" revealOut="fadeOut"> 
      <h1 className="likes_title">Interests</h1>
    </Revealer>
    <div className="likes_container"> 
      <Revealer revealIn="fadeIn" revealOut="fadeOut"> 
        <div className="likes_slider"> 
          <div className="likes"> 
            <LikesList/>
            <LikesList/>
          </div> 
        </div> 
      </Revealer>
    </div> 
  </div>
)

const LikesList = () => 
  emojiList.map(emoji => <span key={emoji}>{emoji}</span>)

export default Likes;
