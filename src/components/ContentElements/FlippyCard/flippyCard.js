import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import LinkButton from "../LinkButton/linkButton";
import './flippyCard.css';

function FlippyCard(props) {

    return (
        <Flippy
            flipOnHover={true} //swap to true for production
            flipOnClick={true} // need to be true for mobile devices 
            flipDirection="vertical" // horizontal or vertical
        >
            <FrontSide>
                <img className="flippyLogo" src={props.logo} alt ={props.alt}/>
            </FrontSide>
            <BackSide>
                <div className="flippyBack">
                {props.details}
                <LinkButton text={props.button} link={props.buttonLink}/>
                </div>
            </BackSide>
        </Flippy>
    )

}

export default FlippyCard;