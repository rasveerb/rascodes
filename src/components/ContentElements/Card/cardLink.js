
import React from 'react';
import './card.css';
import LinkButton from '../LinkButton/linkButton';

function CardLink(props) {
    return (
        <div className="cardContainer">
            <p>{props.cardTitle}</p>
            <p>{props.cardDesc}</p>
            <LinkButton text={props.text} link={props.link}/>
        </div>
    );
}

export default CardLink;