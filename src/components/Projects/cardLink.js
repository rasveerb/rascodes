
import React from 'react';
import '../ContentElements/Card/card.css';

import LinkButton from '../ContentElements/LinkButton/linkButton';

function CardLink(props) {

    return (
        <div className="cardContainer">
            <p className="cardTitle">{props.cardTitle}</p>
            <p>{props.cardDesc}</p>
            <LinkButton text={props.text} link={props.link} />
            <LinkButton text={props.text2} link={props.link2} />
        </div>
    );
}

export default CardLink;