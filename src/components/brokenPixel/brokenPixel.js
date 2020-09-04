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

  // useEffect(()=> {
  //   document.addEventListener('click', breakIt());
  // },[location])

  return pixel.map((p,i) => <div key={p.top+p.left} className={`broken-pixel`} style={pixel[i]}></div>)
}


export default BrokenPixel

function breakIt (e) {
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
      setPixel((pixels)=> [...pixels,newPixel]);
      clicks = 0;
    }
    lastClick = Date.now();
  }
};
