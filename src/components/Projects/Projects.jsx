import React from "react";
import "./Projects.style.css";
import { projectsArray } from "../../constants/projectsArray";
import Project from "../common/Project";

const Projects = () => {
  return (
    <div id="projects">
      <div className="margin">
        <div className="title">
          <h3>
            <span className="numbered_header">03. </span>
            Things I've built
          </h3>
        </div>
      </div>
      <div className="projects_display">
        {projectsArray.map((project) => (
          <Project
            image={project.image}
            title={project.title}
            description={project.description}
            stack={project.stack}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
