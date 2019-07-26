import React from "react";

import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';

const A = ({ children, href }) =>  {
  return (
    <a rel="noopener noreferrer" href={href} target="_blank"> 
      {children}
    </a>
  )}

const socials = [
  ['https://github.com/Leon31', FaGithub], 
  ['https://www.linkedin.com/in/leonardo-di-vittorio/', FaLinkedinIn],
  ['https://www.behance.net/leonardodid6d0', FaBehance],
]

const Footer = (props) => (
  <div className="footer">
    <div className="footer_socials">
      {socials.map(([url, Icon])=> <A {...props} key={url} href={url}><Icon/></A>)}
    </div>
    <div className="footer_rights">© {new Date().getFullYear()} - Milano, all right reserved Leonardo Di Vittorio.</div>
  </div>
)

export default Footer
