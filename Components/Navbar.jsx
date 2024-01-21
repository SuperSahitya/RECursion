import React from "react";
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <div id={style.navbar}>
        <div id={style.logo}>
          <div id={style.logoImage}></div>
          <div id={style.logoText}>RECursion</div>
        </div>
        <ul id={style.navLinks}>
          <li class={style.links}>AskREC</li>
          <li class={style.links}>Blog</li>
          <li class={style.links}>Event</li>
          <li class={style.links}>Team</li>
          <li class={style.links}>Login</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
