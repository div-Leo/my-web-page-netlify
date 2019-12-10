import React, { useState, useEffect, useRef } from "react";
import useRandomText from "../utils/randomText";

const languages = [
  'We can speak in English if you want',
  'Possiamo anche parlare in italiano',
  'Si prefieres en Español sin problema',
];
const emojiLanguages = ['🇬🇧','🇮🇹','🇪🇸'];

const Languages = () => {
  const [selected, setSelected] = useState(0)
  const [text, setText] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    useRandomText(ref, languages[selected])
  }, [selected])
  return (
    <div className="languages_container">
      <h1 className="others_title">Let's have a chat!</h1>
      <div className="languages_buttons">
        {emojiLanguages.map((lang, i) =>
          <a key={lang}  onClick={() => setSelected(i)} className="languages">
            <span style={{fontSize: i === selected ? "1.9em" : '1.5em'}}>{lang}</span>
          </a>
        )}
      </div>
      <div className="languages_caption" ref={ref}>
          {text}
      </div>
    </div>
)}

export default Languages