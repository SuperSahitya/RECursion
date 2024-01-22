"use client";
import Image from "next/image";
import style from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Member from "@/Components/Member";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8000/members").then(async (res) => {
      const myData = await res.json();
      // console.log(myData[0].name);
      setData(myData);
      setloading(false);
    });
  }, []);
  return (
    <>
      <main id={style.page}>
        <Navbar></Navbar>
        <div id={style.teamMembersList}>
          <h1 id={style.heading}>Meet The Team</h1>
          <div id={style.members}>
            { loading ? (<img className={style.loading} src="/loading2.gif" alt="Loading..." />):
            data.map((d) => {
              return (
                <Member
                  key={d ? d.id : ""}
                  memName={d ? d.name : ""}
                  imageurl={d ? d.image : ""}
                  role={d ? d.role : ""}
                  github={d ? d.facebook : ""}
                  linkedin={d ? d.linkedin : ""}
                  phone={d ? d.phone : ""}
                ></Member>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
