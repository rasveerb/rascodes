import React from "react";
import data from "../data/projects.json";

import Title from "../components/ContentElements/Title/title";
import CardGrid from "../components/Projects/CardGrid/cardGrid";

function Projects() {

    const title = data.map((obj) => {
        return obj.title
      })

    return (
        <div>
            <Title title={title} />
            <CardGrid />
        </div>
    );

}

export default Projects

//TODO: make clickable demo links via github pages 
//TODO: add some more projects 