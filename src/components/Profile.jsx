import React from 'react'
import '../pages/Home.css'
import { IoIosArrowForward } from "react-icons/io";
import akintomiwa from "../../src/assets/Akintomiwa.jpg"

const Profile = () => {
  return (
    <div>
             <div className="profilecard">
            <img src={akintomiwa} alt="Person 1 Profile Picture" />
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

  )
}

export default Profile