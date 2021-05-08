import React from 'react';
import './profile.css';
import ProfileTitle from './ProfileTitle/profileTitle';
import picture from '../../../images/pp7.png';
import data from "../../../data/homepage.json";
import ProfileCard from './ProfileCard/profileCard';

function Profile(props) {
    const nameValue = data.map((obj) => {
        return obj.name
      })

      const job = data.map((obj) => {
            return obj.jobTitle
          })

    return (
        <div className="profileContainer">
            <img className="profilePic" src={picture} alt="profile" />
            <ProfileTitle title={nameValue} subtitle={job}/>
            <div className="profileCardContainer">
                <ProfileCard desc={props.desc} />
            </div>
        </div>
    )
}

export default Profile