import React from 'react';

import "./title.css";

function ProfileTitle(props) {
  return (
    <div className="titleContainer">
      <h1 className="pageTitle">{props.title}</h1>
    </div>
  )
}
export default ProfileTitle
