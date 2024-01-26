import React from "react";
import style from "./Alumni.module.css";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";

const Alumni = ({ memName, imageurl, linkedin, department, year }) => {
  return (
    <>
      <div id={style.parent}>
        <div
          id={style.image}
          style={{ backgroundImage: `url(${imageurl})` }}
        ></div>
        <div id={style.data}>
          <div id={style.name}>{`${memName}`}</div>
          <div id={style.role}>{`${department}`}</div>
          <div id={style.role}>{`${year}`}</div>
          <div id={style.links}>
            <div id={style.linkedin}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={style.icons} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumni;
