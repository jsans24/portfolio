import React from "react";
import Project, { projectList } from "./ProjectList";

const Projects = (props) => {

    const getprojects = projectList.map((projectObj, index) => {
        return <Project project={projectObj} key={index} />    
    });

    return (
        <div className="grid-wrapper articles">
        {getprojects}
      </div>
    );
};
export default Projects;