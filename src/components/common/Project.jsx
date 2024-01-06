import React from "react";
import "./Project.style.css";
import icon_github from "../../assets/icons/github.svg";
import icon_live from "../../assets/icons/live.svg";
import white_background from "../../assets/images/white_background.jpg";

const Project = (props) => {
  return (
    <div id="project">
      <div className="project_content">
        <div className="project_header">
          <h4>Featured Project</h4>
        </div>
        <div className="project_title">
          <a
            href={props.links.live ? props.links.live : props.links.github}
            target="_blank"
          >
            {props.title}
          </a>
        </div>

        <div className="project_description">
          <p>{props.description}</p>
        </div>
        <div className="project_stack">
          <p>{props.stack}</p>
        </div>
        <div className="project_links">
          <button>
            <a href={props.links.github} target="_blank">
              <img src={icon_github} alt="icon for github href" />
            </a>
          </button>
          {props.links.live && (
            <button>
              <a href={props.links.live} target="_blank">
                <img src={icon_live} alt="icon for live href" />
              </a>
            </button>
          )}
        </div>
      </div>
      <div
        className="image_cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>

      <div className="project_image" id="project_image">
        <a
          href={props.links.live ? props.links.live : props.links.github}
          target="_blank"
        >
          <div className="image_wrapper">
            <div className="overlay_image">
              <img src={white_background} alt="" />
            </div>
            <picture className="picture">
              <img src={props.image} alt="the project's image" />
            </picture>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
