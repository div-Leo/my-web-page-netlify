import { useEffect, useState } from "react";

function usePerspective (ref={}) {
  const [perspective, setPerspective] = useState(null);

  function updatedPerspective(e) {
    const y = e.offsetY + 1;
    const x = e.offsetX + 1;
    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;
    
    const around1 = (y * 100 / height * 0.2 - 10);
    const around2 = -1 * (x * 100 / width * 0.2 - 10);
    const trans1 = (x * 100 / width * 0.2 - 10);
    const trans2 = (y * 100 / height * 0.2 - 10);

    setPerspective(`translate3d(${trans1}px, ${trans2}px, 0) rotateX(${around1}deg) rotateY(${around2}deg)`)
  } 

  useEffect(() => { 
    ref.current && ref.current.addEventListener('mousemove', (e) => updatedPerspective(e)) 
    ref.current && ref.current.addEventListener('mouseleave', (e) => setPerspective(null)) 
  },[])

  return perspective;
}

export default usePerspective;
