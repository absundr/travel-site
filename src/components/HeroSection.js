import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./video.mp4" autoPlay loop muted />
      <h1>Adventure starts here</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">
          Get Started
        </Button>
        <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary">
          Watch Trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
