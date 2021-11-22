import React from "react";
import Project, { projectList } from "./ProjectList";

const Projects = (props) => {

    const getprojects = projectList.map((projectObj, index) => {
        return <Project project={projectObj} key={index} />    
    });

    return (
        <section>
            <h2>Projects</h2>
            <div className="grid-wrapper articles">
                {getprojects}
            </div>
        </section>
    );
};
export default Projects;