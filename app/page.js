"use client";
import Image from "next/image";
import style from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Member from "@/Components/Member";

export default function Home() {
  const memberName = "Akshay A Baiju";
  return (
    <>
      <main id={style.page}>
        <Navbar></Navbar>
        <div id={style.teamMembersList}>
          <h1 id={style.heading}>Meet The Team</h1>
          <div id={style.members}>
            <Member
              memName="Akshay A Baiju"
              imageurl="/Akshay_A_Baiju.png"
              role="President"
              github="/github.com"
              linkedin="/linkedin.com"
              phone="964206969"
            ></Member>
            <Member
              memName="Akshay A Baiju"
              imageurl="/Akshay_A_Baiju.png"
              role="President"
              github="/github.com"
              linkedin="/linkedin.com"
              phone="964206969"
            ></Member>
            <Member
              memName="Akshay A Baiju"
              imageurl="/Akshay_A_Baiju.png"
              role="President"
              github="/github.com"
              linkedin="/linkedin.com"
              phone="964206969"
            ></Member>
            <Member
              memName="Akshay A Baiju"
              imageurl="/Akshay_A_Baiju.png"
              role="President"
              github="/github.com"
              linkedin="/linkedin.com"
              phone="964206969"
            ></Member>
            <Member
              memName="Akshay A Baiju"
              imageurl="/Akshay_A_Baiju.png"
              role="President"
              github="/github.com"
              linkedin="/linkedin.com"
              phone="964206969"
            ></Member>
          </div>
        </div>
      </main>
    </>
  );
}
