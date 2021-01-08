import React, { useEffect, useState } from "react"

function BrokenPixel ({ location }) {
  const [pixel, setPixel] = useState([]);

  useEffect(()=> {
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log('w, h', w, h);
    setPixel(() => {
      return [{
        top: Math.random() * h + 'px', 
        left: Math.random() * w + 'px', 
        background: ['red','orange','yellow','lime','blue','purple'][Math.random()*6|0]
      }]
    })
  },[location])

  useEffect(()=> {
    document.addEventListener('click', breakPixel(setPixel));
    // document.addEventListener('click', breakPixels(setPixel));
  },[location])

  return pixel.map((p,i) => <div key={p.top+p.left+i} className={`broken-pixel`} style={pixel[i]}></div>)
}


export default BrokenPixel

function breakPixel (update) {
  let clicks = 0
  let lastClick = 0;
  return function (e) {
    const delta =  Date.now() - lastClick;
    if (delta < 500) clicks++;
    // else setPixelPos({display: 'none'});
    if (clicks > 2) {
      const newPixel =  {
        top:e.clientY+'px', 
        left:e.clientX+'px', 
        background: ['red','orange','yellow','lime','blue','purple'][Math.random()*6|0]
      }
      update((pixels)=> [...pixels,newPixel]);
      clicks = 0;
    }
    lastClick = Date.now();
  }
};

function breakPixels (update) {
  let clicks = 0
  let lastClick = 0;

  return function (e) {
    const delta =  Date.now() - lastClick;
    if (delta < 500) clicks++;
    if (clicks > 3) {
      const newPixels = []
      for (let i = 0; i < clicks * clicks; i++) {
        const distance = i * i / 2;
        newPixels.push({
          top: (e.clientY) + (Math.random() * distance*2) - distance + 'px', 
          left: (e.clientX) + (Math.random() * distance*2) - distance + 'px',
          background: ['red','orange','yellow','lime','blue','purple'][Math.random()*6|0]
        })
      }
      console.log('newPixels', newPixels);
      update((pixels)=> [...pixels,...newPixels]);
      clicks = 0;
    }
    lastClick = Date.now();
  }
};
