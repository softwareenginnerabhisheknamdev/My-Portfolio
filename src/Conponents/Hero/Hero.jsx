import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import image from '../../assets/image';
import img from '../../images/img.png';
function Hero() {
  return (
    <div id="hero" className="hero">
      <img src={img} alt="" />
      <h1 className="hero_h1">
        {" "}
        <span>Hi ! 👋 I'm Abhishek Namdev</span>
      </h1>
      <h1 className="hero_h2">
        {" "}
        frontend web developer <br />
        based in India
      </h1>{" "}
      <p>
        {""} Hello everyone ! i am abhishek namdev a professional frontend
        developer from india having a experiance of some of the hand on projects
        and Internships{" "}
      </p>
      <div className="hero-action">
        <div className="hero_connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me📲
          </AnchorLink>
        </div>
        <div className="hero_resume">
          <a
            href="https://drive.google.com/file/d/1nhjw7V8C9ZQV8OdYPRJ1x26wYNr_dqb2/view"
            target="_blank"
          >
            My resume ⬇️
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero
