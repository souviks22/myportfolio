import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MacIcon from '@mui/icons-material/LaptopMac';
import profile from '../assets/images/profile.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/souviks22" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/souviks22/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://leetcode.com/u/souviksarkar2k3/" target="_blank" rel="noreferrer"><MacIcon/></a>
            </div>
          <h1>Souvik Sarkar</h1>
          <p>Software Development Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/souviks22" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/souviks22/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://leetcode.com/u/souviksarkar2k3/" target="_blank" rel="noreferrer"><MacIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;