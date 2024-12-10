import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
// import { useNavigate } from 'react-router-dom'
// import doctor from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
function MyWork() {
    // const navigate=useNavigate();
    
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img id="1" key={index} src={work.w_img} alt="" />;
        })}
        <div className="mywork-showmore">
          <p>Live Preview </p>
        </div>
        <ul className="ul">
          <a
            href="https://tangerine-mandazi-e2ad64.netlify.app/"
            target="_blank"
          >
            <li className="li">01</li>
          </a>
          <a
            href="https://frolicking-smakager-18aec6.netlify.app/ "
            target="_blank"
          >
            <li className="li">02</li>
          </a>
          <a
            href="https://imaginative-cranachan-33e9c7.netlify.app/"
            target="_blank"
          >
            <li className="li">03</li>
          </a>
          <a href="https://cool-phoenix-f33e29.netlify.app/" target="_blank">
            {" "}
            <li className="li">04</li>
          </a>
          <a
            href="https://clinquant-cassata-2c8c0b.netlify.app/"
            target="_blank"
          >
            <li className="li">05</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default MyWork
