import React from "react";
import data from "../data/homepage.json";

import Profile from "../components/Homepage/Profile/profile"

function Homepage() {

    const desc = data.map((obj) => {
        return obj.cardDesc
      })

    // const myBio = data.map((obj) => {
    //     return obj.bio
    // })

    //uncomment when added a bio section ie next bit - section 1 

    return(
        <div id="homepage">
         <Profile desc={desc}/>
        {/* //add asos logo here into card */}

        <p>brief about me</p>
        <p>why and how i made the site</p>
        <p>experience panel</p>
        <p>"education - msc"</p>
        <p>get in touch box with phone and email</p>
        <p>download cv button</p>
        </div>
    );

}

export default Homepage