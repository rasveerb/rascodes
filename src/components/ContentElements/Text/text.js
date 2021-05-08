import React from "react";

import "./text.css";

function Text(props){
    return(
        <p className="text">{props.text}</p>
    )
}

export default Text;