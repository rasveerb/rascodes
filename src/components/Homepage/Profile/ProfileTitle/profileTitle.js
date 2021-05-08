import React from 'react';

import "./profileTitle.css";

function ProfileTitle(props) {
  return (
    <div className="headerContainer">
      <h1 className="profileTitle">{props.title}</h1>
      <h2 className="profileSubitle">{props.subtitle}</h2>
    </div>
  )
} 
export default ProfileTitle
