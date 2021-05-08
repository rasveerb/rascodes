import React from "react";

import "./profileCard.css"
import asos from "../../../../images/asos.png";

function ProfileCard(props) {

    return(
        <div className="pcContainer">
        <p className="pcText"> {props.desc}</p> {/* change this font to a more readable one */}
        <div className="pcImg">
            <img className="asosLogo" src={asos} alt="ASOS logo" />
        </div>
        </div>
    )
}

export default ProfileCard;