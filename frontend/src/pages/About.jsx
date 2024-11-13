import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si"; // Icons for coding platforms
import TechSkill from "./TechnicalSkills";

// import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "./About.css"; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1 className="name">Arjun Singh</h1>
        <p className="title">Web Frontend Developer | Software Engineer</p>
        <p className="quote">
          "Building the future with every line of code, designing experiences
          that resonate."
        </p>
      </div>

      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I’m Arjun Singh, a passionate Web Frontend Developer and Software
          Engineer with a vision to bring the future closer to today. I
          specialize in creating sleek, responsive, and innovative web
          applications using modern tools like React, Vite, and much more. I
          don’t just code; I craft digital experiences. My journey began with an
          insatiable curiosity for technology, which has now evolved into a
          full-blown obsession with design, development, and everything in
          between.
        </p>
        <p className="about-text">
          Currently pursuing a Bachelor's in Computer Science at NIT Hamirpur,
          expected in 2025, I’ve worked on various projects that have tested and
          refined my skills. From building cutting-edge websites to solving
          complex algorithmic problems, I strive to constantly push boundaries
          in the tech world.
        </p>

        <TechSkill />
        <h2 className="section-title">Technical Skills</h2>
        <ul className="skills-list">
          <li>C++, Java, Python</li>
          <li>ReactJS, NodeJS, Vite</li>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Git, GitHub, Agile Methodologies</li>
          <li>Database Management (SQL, NoSQL)</li>
          <li>Cloudinary, File Upload Integration</li>
        </ul>
       
      </div>

      <footer className="footer">
        <p className="footer-text">
          "The only limit to your impact is your imagination and commitment." — Arjun Singh
        </p>
      </footer>
    </div>
  );
};

export default About;
