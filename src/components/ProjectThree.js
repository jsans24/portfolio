import React from "react";
import awepng from "../images/anywhereelselandingpage.png";


const ProjectOne = () => {
    return (
        <div>
            <h3>Anywhere. Else.</h3>
            <p>
                A travel community site mockup built by a team of four devs using the django platform.
            </p>
            <img src={awepng} alt="image of Anywhere. Else. landing page" width="25%"></img>
        </div>
    );
};

export default ProjectOne;