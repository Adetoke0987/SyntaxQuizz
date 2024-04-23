import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h6>CREATE A FREE</h6>
        <h1>
          {""}
          QUIZ <span style={{ color: "#f8c35c" }}>NOW</span>{" "}
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
      <div className="teams">
        <h2>Meet the Team</h2>
        <div className="grid">
          <div className="profilecard">
            <img src="../../src/assets/Akintomiwa.jpg" alt="Person 1 Profile Picture" />
            <h2>Adedokun Peter Akintomiwa</h2>
            <p>Software Engineer</p>
            <a href="https://akintomiwa-portfolio.vercel.app"><IoIosArrowForward /></a>
          </div>
          <div className="profilecard">
            <img src="person1.jpg" alt="Person 1 Profile Picture" />
            <h2>Yusuf Olatunji</h2>
            <p>Software Engineer</p>
            <a href="https://akintomiwa-portfolio.vercel.app"><IoIosArrowForward /></a>
          </div>
          <div className="profilecard">
            <img src="person2.jpg" alt="Person 2 Profile Picture" />
            <h2>Roselyn </h2>
            <p>Marketing Manager</p>
            <a href="https://akintomiwa-portfolio.vercel.app"><IoIosArrowForward /></a>
          </div>
          <div className="profilecard">
            <img src="person3.jpg" alt="Person 3 Profile Picture" />
            <h2>David</h2>
            <p>Graphic Designer</p>
            <a href="https://akintomiwa-portfolio.vercel.app"><IoIosArrowForward /></a>
          </div>
          <div className="profilecard">
            <img src="person1.jpg" alt="Person 1 Profile Picture" />
            <h2>Adetoke</h2>
            <p>Software Engineer</p>
            <a href="https://akintomiwa-portfolio.vercel.app"><IoIosArrowForward /></a>
          </div>
          <div className="profilecard">
            <img src="person2.jpg" alt="Person 2 Profile Picture" />
            <h2>Helen Alabi</h2>
            <p>Marketing Manager</p>
            <a href="https://akintomiwa-portfolio.vercel.app"><IoIosArrowForward /></a>
          </div>
          <div className="profilecard">
            <img src="person3.jpg" alt="Person 3 Profile Picture" />
            <h2>Gbadebo Oyewunmi Nimot</h2>
            <p>Graphic Designer</p>
            <a href="https://akintomiwa-portfolio.vercel.app"><IoIosArrowForward /></a>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Copyright © 2024. All rights reserved.<syntax/></p>
      </div>
    </div>
  );
};

export default Home;
