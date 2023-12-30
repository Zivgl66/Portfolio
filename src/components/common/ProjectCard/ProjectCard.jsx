import React from "react";
import "./ProjectCard.style.css";
import icon_github from "../../../assets/icons/github.svg";
import icon_live from "../../../assets/icons/live.svg";
import icon_download from "../../../assets/icons/download.svg";
import icon_folder from "../../../assets/icons/folder.svg";
import { Fade } from "react-awesome-reveal";

const ProjectCard = (props) => {
  return (
    <a href={props.links.github} target="_blank">
      <div id="project_card">
        <Fade direction="up" triggerOnce={true}>
          <div className="project_card_top">
            <div className="icon">
              <img src={icon_folder} alt="icon of folder" />
            </div>
            <div className="project_card_links">
              {props.links.github && (
                <button>
                  <a href={props.links.github} target="_blank">
                    <img src={icon_github} alt="icon for github href" />
                  </a>
                </button>
              )}
              {props.links.live && (
                <button>
                  <a href={props.links.live} target="_blank">
                    <img src={icon_live} alt="icon for live href" />
                  </a>
                </button>
              )}
              {props.links.download && (
                <button>
                  <a href={props.links.download} target="_blank">
                    <img src={icon_download} alt="icon for download href" />
                  </a>
                </button>
              )}
            </div>
          </div>
          <div className="project_card_bottom">
            <div className="project_card_title">
              <a href={props.links.github} target="_blank">
                <h3>{props.name}</h3>
              </a>
            </div>
            <div className="project_card_description">
              <h5>{props.description}</h5>
            </div>
            <div className="project_card_stack">
              <p>{props.stack}</p>
            </div>
          </div>
        </Fade>
      </div>
    </a>
  );
};

export default ProjectCard;
