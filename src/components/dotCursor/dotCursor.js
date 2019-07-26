import React, { useEffect, useState } from "react"

const DotCursor = ({ location }) => {
  const [dotPos, setDotPos] = useState({top:'50%', left:'50%'});
  const move = (e) => setDotPos({ ...dotPos, top:e.clientY+'px', left:e.clientX+'px'});
  
  const [dotClass, setDotClass] = useState('');
  const visible = (e) => setDotClass('');
  const leave = (e) => setDotClass('--hidden');
  const aHover = () => setDotClass('--hover');

  useEffect(()=> {
    document.addEventListener('mousemove', move);

    document.addEventListener('mouseenter', visible);
    document.addEventListener('mouseleave', leave);
    
    document.querySelectorAll('a').forEach(el=>el.addEventListener('mouseenter', aHover));
    document.querySelectorAll('a').forEach(el=>el.addEventListener('mouseleave', visible));
  },[location])

  return <div className={`dot_cursor ${dotClass}`} style={dotPos}></div>
}

export default DotCursor
