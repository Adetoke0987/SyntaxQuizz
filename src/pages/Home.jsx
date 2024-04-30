<<<<<<< HEAD
import React, { Children, useEffect, useState } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
// import Profile from "../components/Profile";

const Home = () => {
  const [animatedSect, setAnimatedSect] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimatedSect(true);
  });

  return (
    <>
      <div className={style.allComp}>
        <div>
          <div className={`${style.homeContainer} ${animatedSect ? style.show : ""}`}>
  
            <h6 className={style.h6}>CREATE A FREE</h6>
            
            <h1 className={style.h1}>
              QUIZ <span style={{ color: "rgb(245, 160, 3)" }}>NOW</span>
            </h1>
            <p id={style.paragraph1}>
              Professional courses often rely on professional quizzes to gauge
              your professional knowledge . Structure your organizational
              questions for your team to make better decision and promotions
            </p>

            <div className={style.btndiv}>
              <Link to={"/login"}>
                <button type="button" className={style.button}>
                  Let's do it
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.footer} ${animatedSect ? style.showfoot : ""}`}>
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Home;
=======
import React, { Children, useEffect, useState } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
// import Profile from "../components/Profile";

const Home = () => {
  const [animatedSect, setAnimatedSect] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimatedSect(true);
  });

  return (
    <>
      <div className={style.allComp}>
        <div>
          <div className={`${style.homeContainer} ${animatedSect ? style.show : ""}`}>
  
            <h6 className={style.h6}>CREATE A FREE</h6>
            
            <h1 className={style.h1}>
              QUIZ <span style={{ color: "rgb(245, 160, 3)" }}>NOW</span>
            </h1>
            <p id={style.paragraph1}>
              Professional courses often rely on professional quizzes to gauge
              your professional knowledge . Structure your organizational
              questions for your team to make better decision and promotions
            </p>

            <div className={style.btndiv}>
              <Link to={"/login"}>
                <button type="button" className={style.button}>
                  Let's do it
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.footer} ${animatedSect ? style.showfoot : ""}`}>
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Home;
>>>>>>> parent of f341fdb (update)
