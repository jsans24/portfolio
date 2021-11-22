import React from "react";
import awepng from "../images/anywhereelselandingpage.png";
import awegif from "../images/anywhereelse.gif";

export const projectList = [
    {
        image: awepng,
        gif: awegif,
        title: "Anywhere. Else.",
        description: "A travel community site mockup built by a team of four devs using the django platform.",
    },
    {
        image: awepng,
        gif: awegif,
        title: "Game Picker",
        description: "A solo project cataloging site to keep track of your videogame library with a function to randomly pick a game to play. Built in React with auth using the Auth0 API.",
    },
    {
        image: awepng,
        gif: awegif,
        title: "GeoQuakes",
        description: "A solo project using Google Maps API and the USGS earthquakes API to give a visual of all of the earthquakes that have occured within the last week and month. Built in React",
    },
]


const Project = (props) => {
    return (
        <div className="col-third">
            <img src={props.project.image} alt="image of Anywhere. Else. landing page"
                onMouseOver={e => (e.currentTarget.src = props.project.gif)}
                onMouseOut={e => (e.currentTarget.src = props.project.image)}></img>
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
            
        </div>
    );
};

export default Project;