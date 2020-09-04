import React, { useEffect, useState } from "react";
import Spinner from "../spinner";

const Reference = () => {
  const [refs, setRefs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000')
    .then(res => res.json())
    .then(refs => {
      console.log('refs', refs);
      setRefs(refs)
    })
  }, [])
  return (
    <div className="reference_container">
      <div className="reference">
        References
        <br/><br/>
        {Object.entries(refs).map(([name, ref]) => (
          <div>
            <h1 className="name">{name}</h1>
            <div className="text">{ref}</div>
          </div>
        )) }
      </div>   
    </div>   
  )
}

export default Reference
