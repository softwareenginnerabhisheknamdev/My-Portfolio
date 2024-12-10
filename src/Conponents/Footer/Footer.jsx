import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
 import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a frontend developer from india looking for an new opportunity
            so feel free to ask me i am eager to contribute my skills and telent
            to the world
          </p>
        </div>
        <div className="footer-top-right">
          <h1>Available On</h1>
          <ul className="footer-icon">
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-namdev-software-engineer/"
                target="_blank"
              >
                <FaLinkedin className="linkdin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/softwareenginnerabhisheknamdev" target="_blank">
                <FaGithubSquare className="github" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@LearnSkillsabhisheknamdev-y7er" target="_blank">
                <IoLogoYoutube className="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Abhishek Namdev. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
