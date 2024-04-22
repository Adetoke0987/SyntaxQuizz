import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

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
          <Link to={"/login"}><button type="button">Let's do it</button></Link>
        </div>
        
        
      </div>
      <div className="teams">
        <h2>Meet the Team</h2>
        <div className="grid">
          <div className="profilecard">
            <img src="person1.jpg" alt="Person 1 Profile Picture" />
            <h2>John Doe</h2>
            <p>Software Engineer</p>
          </div>
          <div className="profilecard">
            <img src="person1.jpg" alt="Person 1 Profile Picture" />
            <h2>John Doe</h2>
            <p>Software Engineer</p>
          </div>
          <div className="profilecard">
            <img src="person2.jpg" alt="Person 2 Profile Picture" />
            <h2>Jane Smith</h2>
            <p>Marketing Manager</p>
          </div>
          <div className="profilecard">
            <img src="person3.jpg" alt="Person 3 Profile Picture" />
            <h2>Alice Lee</h2>
            <p>Graphic Designer</p>
          </div>
          <div className="profilecard">
            <img src="person1.jpg" alt="Person 1 Profile Picture" />
            <h2>John Doe</h2>
            <p>Software Engineer</p>
          </div>
          <div className="profilecard">
            <img src="person2.jpg" alt="Person 2 Profile Picture" />
            <h2>Jane Smith</h2>
            <p>Marketing Manager</p>
          </div>
          <div className="profilecard">
            <img src="person3.jpg" alt="Person 3 Profile Picture" />
            <h2>Alice Lee</h2>
            <p>Graphic Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
