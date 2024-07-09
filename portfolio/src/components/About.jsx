import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
const About = ({ show, setShow }) => {
  return (
    <>
      <section className="page aboutPage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />

        <div className="banner">
          <div className="content">
            <div>
              <h1>ABOUT</h1>
              <h3>merndeveloper4@gmail.com</h3>
            </div>
            <div>
              Hello, I'm Muhammad Zeeshan Khan, a frontend developer with a
              versatile skill set that bridges the gap between captivating user
              interfaces and robust backend functionality. I specialize in
              crafting visually appealing and user-friendly websites using HTML,
              CSS, and JavaScript. Beyond the frontend, I also possess valuable
              insights into backend technologies, allowing me to create
              seamless, end-to-end web solutions.{" "}
              <span>
                {" "}
                My passion lies in creating interactive, responsive designs
                while ensuring efficient data handling and server-side
                processes. Let's collaborate to bring your web project to life,
                marrying design elegance with technical excellence!{" "}
              </span>
            </div>
            <div>
              <p>Karachi, Pakistan</p>
              <p>Near Gulshan-e-Maymar</p>
            </div>
          </div>
          <div className="profileImage">
            <img src="/my.png" alt="profilImage" />
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
