import React from "react";
import "../App.css";
import banner from "../assets/images/bg01.jpg";
import { Button } from "./Button";
import "./HeroSection.css";
import vid from "../assets/videos/vid1.mp4";
import {
  faLaughWink,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={vid} type="video/mp4"></source>
      </video>
      <h1>Roy Huang</h1>
      <p>Welcome to my site!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Me
          <FontAwesomeIcon icon={faLaughWink} />
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          My Experiences
          <FontAwesomeIcon icon={faGraduationCap} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
