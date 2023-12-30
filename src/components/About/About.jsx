import React from "react";
import "./About.style.css";
import profile_image from "../../assets/images/profile_image.jpeg";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="about">
      <div className="title">
        <Fade direction="up" triggerOnce={true}>
          <h3>
            <span className="numbered_header">01. </span>
            About Me
          </h3>
        </Fade>
      </div>
      <div className="content">
        <Slide direction="left" triggerOnce={true}>
          <div className="left_side">
            <div className="paragraph">
              <p>
                Hello! My name is <span className="numbered_header">Ziv</span>{" "}
                and I enjoy creating things that live on the internet. My
                interest in web development started back in 2012 when I decided
                to try editing
                <span className="numbered_header"> custom Tumblr themes</span> —
                turns out hacking together a custom reblog button taught me a
                lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>C</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>
        </Slide>
        <div className="right_side">
          <Slide direction="right" triggerOnce={true}>
            <div className="image_container">
              <img src={profile_image} alt="my profile image" />
              <div className="border"></div>
              <div className="overlay"></div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
