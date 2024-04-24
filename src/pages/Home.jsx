import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

// import Profile from "../components/Profile";

const Home = () => {
  const [animatedSect, setAnimatedSect] = useState(false)

  useEffect(()=>{
     // Trigger the animation when the component mounts
    setAnimatedSect(true)
  },)
  return (
    <div>
      <div className={`${style.homeContainer} ${animatedSect? style.show: ''}`}>
        <h6 className={style.h6}>CREATE A FREE</h6>
        <h1 className={style.h1}>
          QUIZ <span style={{ color: "rgb(245, 160, 3)" }}>NOW</span>
        </h1>
        <p id={style.paragraph1}>
          The versatile data collection tool for professionals. Typeform makes
          asking easy and answering refreshing
        </p>
        <div>
          <Link to={"/login"}>
            <button type="button" className={style.button}>Let's do it</button>
          </Link>
        </div>
      </div>

      <div className={`${style.footer} ${animatedSect? style.showfoot : ''}`}>
        <p>
          Copyright © 2024. All rights reserved.
        </p>
      </div>
    </div>
   
  );
};

export default Home;
