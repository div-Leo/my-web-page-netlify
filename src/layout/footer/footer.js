import React from "react";

import { FaGithub, FaLinkedinIn, FaBehance, FaMediumM, FaCodepen } from 'react-icons/fa';

const socials = [
  ['https://github.com/div-Leo', FaGithub, 'Github'], 
  ['https://www.linkedin.com/in/leonardo-di-vittorio/', FaLinkedinIn, 'LinkedIn'],
  ['https://www.behance.net/leonardodid6d0', FaBehance, 'Behance'],
  ['https://medium.com/@div.leo', FaMediumM, 'Medium'],
  ['https://codepen.io/div-Leo', FaCodepen, 'Codepen'],
];

function renderSocials () { 
  return socials.map(([url, Icon, alt]) => (
    <a className="pointer" key={url} rel="noopener noreferrer" data-alt={alt} href={url} target="_blank"> 
      <Icon/>
    </a>
  ))
}

const Footer = () => (
  <div className="footer">
    <div className="footer_socials">
      {renderSocials()}
    </div>
    <div className="footer_rights">
      <p>
        © {new Date().getFullYear()} - Milano, all right reserved Leonardo Di Vittorio.
      </p> 
    </div>
  </div>
)

export default Footer
