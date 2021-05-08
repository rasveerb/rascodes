import React from 'react';

import './linkButton.css';

function LinkButton(props) {

    if (!props.text) {
        return null;
    } else {
        return (
            <div className="buttonContainer">
            <a className="buttonLink" href={props.link} rel="noreferrer" target="_blank" >
                <button className="linkButton">
                    {props.text}
                </button>
            </a>
            </div>
        )
    }

}

export default LinkButton;