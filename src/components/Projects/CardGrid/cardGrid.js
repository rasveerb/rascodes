import React from "react";

import "./cardGrid.css";
import data from "../../../data/projects.json";
import CardLink from "../cardLink";

function CardGrid() {
    const project1Title = data.map((obj) => {
        return obj.project1.title
      })

    const project1Desc = data.map((obj) => {
        return obj.project1.desc
      })

    const project1Repo= data.map((obj) => {
        return obj.project1.repo
      })


    const project1Demo= data.map((obj) => {
      return obj.project1.demo
    })

      const project2Title = data.map((obj) => {
        return obj.project2.title
      })

    const project2Desc = data.map((obj) => {
        return obj.project2.desc
      })

    const project2Link= data.map((obj) => {
        return obj.project2.repo
      })

      const project3Title = data.map((obj) => {
        return obj.project3.title
      })

    const project3Desc = data.map((obj) => {
        return obj.project3.desc
      })

    const project3Link= data.map((obj) => {
        return obj.project3.repo
      })

      return(
          <div className="cardgrid">
        <CardLink cardTitle={project1Title} cardDesc={project1Desc} text="Code" link={project1Repo} text2="Demo" link2={project1Demo}/>
        <CardLink cardTitle={project2Title} cardDesc={project2Desc} text="Code" link={project2Link} text2="Demo" link2={project1Demo}/>
        <CardLink cardTitle={project3Title} cardDesc={project3Desc} text="Code" link={project3Link}/>
        </div>
      )
}

export default CardGrid;