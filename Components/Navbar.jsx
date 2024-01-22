import React, { useState } from "react";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [panel, showPanel] = useState(false);
  const handleClick = () => {
    showPanel(!panel);
  };
  return (
    <>
      <div id={style.navbar}>
        <div id={style.logo}>
          <div id={style.logoImage}></div>
          <div id={style.logoText}>RECursion</div>
        </div>
        <ul id={style.navLinks}>
          <li className={style.links}>AskREC</li>
          <li className={style.links}>Blog</li>
          <li className={style.links}>Event</li>
          <li className={style.links}>Team</li>
          <li className={style.links}>Login</li>
        </ul>
        <div id={style.hamburger}>
          <GiHamburgerMenu id={style.hamburgericon} onClick={handleClick} />
          {panel ? <div id={style.overlay} onClick={handleClick}></div> : ""}
          {panel ? (
            <ul
              id={style.panel}
              className={panel ? "" : style.closed}
            >
              <li className={style.hamLinks}>AskREC</li>
              <li className={style.hamLinks}>Blog</li>
              <li className={style.hamLinks}>Event</li>
              <li className={style.hamLinks}>Team</li>
              <li className={style.hamLinks}>Login</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
