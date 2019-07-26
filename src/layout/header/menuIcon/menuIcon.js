import React, { useState }  from "react";
import { Link } from "gatsby";

const MenuIcon = () => {
  const [menu, setMenu] = useState(window.location.pathname === '/menu');
  const toggleMenu = () => setMenu(state => !state);
  return (
    <Link to={menu ? "/" : "/menu"}
      className={menu ? "menu_close" : "menu_burger"} 
      onClick={toggleMenu}>
      <div/><div/><div/><div/>
    </Link>
  )
}

export default MenuIcon
