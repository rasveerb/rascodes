import React from "react";

import data from "../data/contact.json";
import Title from "../components/ContentElements/Title/title";
import FlippyCard from "../components/ContentElements/FlippyCard/flippyCard";


function Contact() {

    const title = data.map((obj) => {
        return obj.title
    })

    const emailLogo = data.map((obj) => {
        return obj.details.email.logo
    })

    const emailButton = data.map((obj) => {
        return obj.details.email.button
    })

    const emailLink = data.map((obj) => {
        return obj.details.email.emailLink
    })

    const phone = data.map((obj) => {
        return obj.details.phone.contact
    })

    const phoneLogo = data.map((obj) => {
        return obj.details.phone.logo
    })

    const linkedinLogo = data.map((obj) => {
        return obj.details.linkedin.logo
    })

    const linkedinButton = data.map((obj) => {
        return obj.details.linkedin.button
    })

    const linkedinLink = data.map((obj) => {
        return obj.details.linkedin.linkedinLink
    })

    const githubLogo = data.map((obj) => {
        return obj.details.github.logo
    })

    const githubButton = data.map((obj) => {
        return obj.details.github.button
    })

    const githubLink = data.map((obj) => {
        return obj.details.github.githubLink
    })

    const twitterLogo = data.map((obj) => {
        return obj.details.twitter.logo
    })

    const twitterButton = data.map((obj) => {
        return obj.details.twitter.button
    })

    const twitterLink = data.map((obj) => {
        return obj.details.twitter.twitterLink
    })

    return (
        <div>
            <Title title={title} />
            <div className="flippyWrapper">
            <div className="flippyRow">
                <div className="emailCard">
                    <FlippyCard logo={emailLogo} button={emailButton} buttonLink={emailLink}/>
                </div>
                <div className="phoneCard">
                    <FlippyCard details={phone} logo={phoneLogo} />
                </div>

                <div className="linkedinCard">
                    <FlippyCard logo={linkedinLogo} button={linkedinButton} buttonLink={linkedinLink}/>
                </div>

                <div className="githubCard">
                    <FlippyCard logo={githubLogo} button={githubButton} buttonLink={githubLink}/>
                </div>

                <div className="twitterCard">
                    <FlippyCard logo={twitterLogo} button={twitterButton} buttonLink={twitterLink}/>
                </div>
                {/* TODO add a card for dev.to blog and insta*/}
            </div>
            </div>
        </div>
    );

}

export default Contact