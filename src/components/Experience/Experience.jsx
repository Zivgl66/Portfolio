import React, { useState } from "react";
import "./Experience.style.css";
import { experienceArray } from "../../constants/expereinceArray";
import { Fade, JackInTheBox } from "react-awesome-reveal";

const Experience = () => {
  const [activeExp, setActiveExp] = useState(experienceArray[0]);
  const [isActive, setIsActive] = useState(0);

  return (
    <div id="experience">
      <Fade direction="up" delay={3} triggerOnce={true}>
        <div className="title">
          <h3>
            <span className="numbered_header">02. </span>
            My Experience
          </h3>
        </div>
      </Fade>
      <div className="content">
        <JackInTheBox delay={3} triggerOnce={true}>
          <span>
            <div className="left_menu">
              <ul>
                {experienceArray.map((exp, index) => {
                  return (
                    <li key={exp.name + index}>
                      <button
                        className={isActive == exp.id ? "active" : ""}
                        onClick={() => {
                          setIsActive(index);
                          setActiveExp(exp);
                        }}
                      >
                        {exp.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </span>
          <div className="right_description">
            <h3>
              {activeExp.title}{" "}
              <span className="work_header">{activeExp.workplace}</span>
            </h3>

            <h4>{activeExp.dates}</h4>
            {activeExp.description.map((desc, index) => (
              <span key={desc + index}>{desc}</span>
            ))}
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default Experience;
