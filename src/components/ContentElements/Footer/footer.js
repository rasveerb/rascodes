import React from 'react';

import data from '../../../data/contact.json';
import logo from "../../../images/logo_transparent.png";
import './footer.css';

const github = data.map((obj) => {
  return obj.details.github.githubLink
})

const linkedin = data.map((obj) => {
  return obj.details.linkedin.linkedinLink
})

const twitter = data.map((obj) => {
  return obj.details.twitter.twitterLink
})


function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
          <img className= "footerImage" src={logo} alt="Ras Codes Logo"/>
          <p className="footerText">Rasveer Bansi 2021</p>
        </div>
      <ul className="footerLinks">
        <li className="footerItem">
          <a href={github} rel="noreferrer" target="_blank">Github </a>
        </li>
        <li className="footerItem">
          <a href={linkedin} rel="noreferrer" target="_blank">Linkedin</a>
        </li>
        <li className="footerItem">
          <a href={twitter} rel="noreferrer" target="_blank">Twitter</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer