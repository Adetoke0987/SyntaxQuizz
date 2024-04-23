import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

// import Profile from "../components/Profile";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h6>CREATE A FREE</h6>
        <h1>
          {""}
          QUIZ <span style={{ color: "rgb(245, 160, 3)" }}>NOW</span>{" "}
        </h1>
        <p id="paragraph1">
          The versatile data collection tool for professionals. Typeform makes
          asking easy and answering refreshing
        </p>
        <div>
          <Link to={"/login"}>
            <button type="button">Let's do it</button>
          </Link>
        </div>
      </div>
<<<<<<< Updated upstream


=======
      
>>>>>>> Stashed changes
      <div className="footer">
        <p>
          Copyright © 2024. All rights reserved.
          <syntax />
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Home;
