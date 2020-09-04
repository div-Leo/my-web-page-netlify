import React from "react";

import { FaGithub, FaLinkedinIn, FaBehance, FaMediumM } from 'react-icons/fa';

const socials = [
  ['https://github.com/Leon31', FaGithub, 'Github'], 
  ['https://www.linkedin.com/in/leonardo-di-vittorio/', FaLinkedinIn, 'LinkedIn'],
  ['https://www.behance.net/leonardodid6d0', FaBehance, 'Behance'],
  ['https://medium.com/@div.leo', FaMediumM, 'Medium'],
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
    <div className="footer_rights">© {new Date().getFullYear()} - Milano, all right reserved Leonardo Di Vittorio.</div>
  </div>
)

export default Footer
