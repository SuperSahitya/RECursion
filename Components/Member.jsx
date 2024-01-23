"use client";
import React from "react";
import style from "./Member.module.css";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Member = ({ memName, imageurl, role, github, linkedin, phone }) => {
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(phone);
  };

  return (
    <>
      <div id={style.parent}>
        <div
          id={style.image}
          style={{ backgroundImage: `url(${imageurl})` }}
        ></div>
        <div id={style.data}>
          <div id={style.name}>{`${memName}`}</div>
          <div id={style.role}>{`${role}`}</div>
          <div id={style.links}>
            <div id={style.github}>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaSquareFacebook className={style.icons} />
              </a>
            </div>
            <div id={style.linkedin}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={style.icons} />
              </a>
            </div>
            <div onClick={copyToClipboard} id={style.phone}>
                <FaPhoneSquareAlt className={style.icons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
