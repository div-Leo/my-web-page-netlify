import React, { useEffect, useState, useRef } from "react"

const DotCursor = () => {
  const cursorDotOutline = useRef();
  const cursorDot = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [cursorPos, setCursorPos] = useState({y:0, x:0});

  const move = (e) => {
    setCursorPos({ y:e.clientY, x:e.clientX});
    positionDot(e)
  };
  
  const [cursorClass, setCursorClass] = useState('');
  const [target, setTarget] = useState('');

  const visible = (e) => {
    setCursorClass('')
    setTarget('')
  };
  const leave = (e) => setCursorClass('--hidden');
  const aHover = (e) => {
    setCursorClass('--hover');
    setTarget(e.target.dataset.alt || '')
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  
  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(()=> {
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', visible);
    document.addEventListener('mouseleave', leave);
    window.addEventListener("resize", resize);

    document.querySelectorAll('.pointer').forEach(el=>el.addEventListener('mouseenter', aHover));
    document.querySelectorAll('.pointer').forEach(el=>el.addEventListener('mouseleave', visible));

    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    requestRef.current = requestAnimationFrame(animateDotOutline);
    
    return () => {
      document.removeEventListener('mousemove');
      document.removeEventListener('mouseenter');
      document.removeEventListener('mouseleave'); 
      window.removeEventListener("resize", onResize);

      cancelAnimationFrame(requestRef.current);
    }
  },[])

  let { x, y } = cursorPos;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  function positionDot(e) {
    endX = e.clientX;
    endY = e.clientY;
    cursorDot.current.style.left = endX + "px";
    cursorDot.current.style.top = endY + "px";
  }

  function animateDotOutline (time) {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursorDotOutline.current.style.left = x + "px";
      cursorDotOutline.current.style.top = y + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  }

  return (
    <>
      <div className={`dot_cursor${cursorClass}`} ref={cursorDot}></div>
      <div className={`outline_cursor${cursorClass}`} ref={cursorDotOutline}>
        <div></div>
        {target} 
      </div>
    </>
    )
}

export default DotCursor
