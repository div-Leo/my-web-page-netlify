import React from 'react';

const emojiList = ['🥞','☕','💻','🍕','🍻','🍝','🍷','🍾','🎉','🥑','🍣','⚽️','🚲','🎧','✏️','🍵','📷','✈️','☀️','🍍','📱'];

const Likes = () => (
  <div>
    <h1 className="others_title">Interests</h1>
    <div className="likes_container"> 
      <div className="likes_slider"> 
        <div className="likes"> 
          <LikesList/>
          <LikesList/>
        </div> 
      </div> 
    </div> 
  </div>
)

const LikesList = () => 
  emojiList.map(emoji => <span key={emoji}>{emoji}</span>)

export default Likes;
