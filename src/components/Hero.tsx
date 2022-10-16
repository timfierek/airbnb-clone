import React from "react";

function Hero() {
    return(
        <div className="hero">
            <div className="image-container">
                <img src="/images/image-collage.png" alt="" id="image-collage"/>
            </div>

            <div className="hero-content">
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-body">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}

export default Hero;