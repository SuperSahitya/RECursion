"use client";
import Image from "next/image";
import style from "./page.module.css";
import Navbar from "@/Components/Navbar";
import Member from "@/Components/Member";
import { useEffect, useState } from "react";
import Alumni from "@/Components/Alumni";

export default function Home() {
  const [data, setData] = useState([]);
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setloading] = useState(true);
  const [alumniLoading, setalumniLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8000/members/2024").then(async (res) => {
      const myData = await res.json();
      // console.log(myData[0].name);
      setData(myData);
      setloading(false);
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/alumni").then(async (res) => {
      const myData = await res.json();
      setAlumniData(myData);
      setalumniLoading(false);
    });
  }, []);
  return (
    <>
      <main id={style.page}>
        <Navbar></Navbar>
        <div id={style.teamMembersList}>
          <h1 id={style.heading}>Meet The Team</h1>
          <div className={style.members}>
            {loading ? (
              <img
                className={style.loading}
                src="/loading2.gif"
                alt="Loading..."
              />
            ) : (
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
              })
            )}
          </div>
          {alumniLoading ? "" : <h1 id={style.heading2}>Meet The Alumni</h1>}
          <div className={style.members}>
            {alumniLoading
              ? ""
              : alumniData.map((d) => {
                  return (
                    <>
                      <Alumni
                        memName={d ? d.name : ""}
                        imageurl={d ? d.image : ""}
                        department={d ? d.department : ""}
                        year={d ? d.year : ""}
                        linkedin={d ? d.linkedin : ""}
                      ></Alumni>
                    </>
                  );
                })}
          </div>
        </div>
      </main>
    </>
  );
}
