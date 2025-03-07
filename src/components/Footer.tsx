import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MacIcon from '@mui/icons-material/LaptopMac';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/souviks22" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/souviks22/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://leetcode.com/u/souviksarkar2k3/" target="_blank" rel="noreferrer"><MacIcon/></a>
      </div>
      <p>Souvik Sarkar</p>
    </footer>
  );
}

export default Footer;