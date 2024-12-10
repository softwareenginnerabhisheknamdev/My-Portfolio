import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import image from "../../images/image.png";
// import  FontAwesomeIcon from 'react-icons'
function About() {
  return (
    <div id="about" className="about">
      {/* <h1>Introduction</h1> */}
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img style={{width:'400px', height:'500px'}} src={image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am Frontend Developer and As a fresher engineer, I am excited to
              introduce myself and take my first step into the professional
              world. I have always been fascinated by the field of engineering,
              and I am eager to contribute my skills and knowledge to make a
              positive impact.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="skills">
            <div className="language">
              <h1>Languages 💻 :-</h1>
              <p>
                HTML,CSS,JavaScript,
                <br />
                Java,React js ,redux <br />
                ,tailwind css,
                <br />
                bootstrap, git,gitHub,Sql,
                <br />
                firebase
              </p>
            </div>
            <div className="education">
              <h1>Education 🎓:-</h1>
              <p>B.Tech in Information Technology</p>
            </div>
            <div className="project">
              <h1>Projects 💼:-</h1>
              <p>Built more than 5 projects by using Frontend Technology </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About
