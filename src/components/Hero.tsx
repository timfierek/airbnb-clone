import React from "react";
import imageCollage from "../images/image-collage.png";

function Hero() {
    return(
        <div className="hero">
            <div className="image-container">
                <img src={imageCollage} alt="" id="image-collage"/>
            </div>

            <div className="hero-content">
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-body">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}

export default Hero;