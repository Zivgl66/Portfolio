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
      <div className="other_noteworthy">
        <h4>Other Noteworthy Projects</h4>
        <a href="https://github.com/Zivgl66?tab=repositories" target="_blank">
          <p>View the GitHub</p>
        </a>
        <ul className="projects_grid"></ul>
      </div>
    </div>
  );
};

export default Projects;
