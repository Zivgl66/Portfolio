import React from "react";
import "./Projects.style.css";
import { projectsArray } from "../../constants/projectsArray";
import { otherProjectsArray } from "../../constants/otherProjectsArray";
import Project from "../common/Project";
import ProjectCard from "../common/ProjectCard/ProjectCard";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <div className="margin">
        <Fade direction="up"  triggerOnce={true}>
          <div className="title">
            <h3>
              <span className="numbered_header">03. </span>
              Things I've built
            </h3>
          </div>{" "}
        </Fade>
      </div>
      <Fade direction="up" duration={3000} triggerOnce={true}>
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
      </Fade>
      <div className="other_noteworthy">
        <h4>Other Noteworthy Projects</h4>
        <a href="https://github.com/Zivgl66?tab=repositories" target="_blank">
          <p>View the GitHub</p>
        </a>
        <ul className="projects_grid">
          {otherProjectsArray.map((p) => (
            <li>
              <ProjectCard
                links={p.links}
                name={p.name}
                description={p.description}
                stack={p.stack}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
