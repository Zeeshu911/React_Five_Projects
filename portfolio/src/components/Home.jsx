import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGithubSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Home = ({ show, setShow }) => {
  return (
    <>
      <section className="page homePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <h1>MUHAMMAD</h1>
          <h1>ZEESHAN</h1>
          <p>Web Developer</p>
          <div className="btns">
            <Link
              to="https://res.cloudinary.com/didzyox00/image/upload/v1719226148/Job_Seekers_Resumes/syxfysbtqwqbp2vqgrhq.pdf"
              target="_blank"
            >
              Resume
            </Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <footer>
          <ul>
            <Link
              to={"https://www.instagram.com/z_4_zeeshuuu/"}
              target="_blank"
            >
              <AiFillInstagram />
            </Link>
            <Link
              to={
                "https://www.facebook.com/people/Muhammad-Zeeshan-Khan/pfbid0r2fy5gefN1sTvwFSJYMBHkbij6eXHwzZMKDYemTYVu6Y7H2A4vsuDukaPaYRAjozl/"
              }
              target="_blank"
            >
              <AiFillFacebook />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/muhammad-zeeshan-khan-dev/"}
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link to={"https://github.com/Zeeshu911"} target="_blank">
              <RiTwitterXLine />
            </Link>
            <Link to={"https://github.com/Zeeshu911"} target="_blank">
              <FaGithubSquare />
            </Link>
            <Link to={""} target="_blank">
              <FaWhatsapp />
            </Link>
            <Link
              to={"https://www.youtube.com/@CodeWithZeeshu"}
              target="_blank"
            >
              <FaYoutube />
            </Link>
          </ul>
          <a className="download-btn" href="/Resume.pdf" download="Resume.pdf">
            [Download CV]
          </a>
        </footer>
      </section>
    </>
  );
};

export default Home;
