import React from "react";
import katieZaferes from "../images/katie-zaferes.png";
import star from "../images/star.png";

function Card() {
    return (
        <div className="card">
            <img src={katieZaferes} alt="" className="picture" />
            <div className="tag-container">
                <p className="tag">sold out</p>
            </div>

            <div className="info">
                <div className="rating">
                    <img src={star} alt="" />
                    <p id="score">5.0</p>
                    <p>(6)</p>
                    <p>&#x2022;</p>
                    <p>USA</p>
                </div>
                <p className="description">Life lessons with Katie Zaferes</p>
                <div className="price">
                    <p id="semibold">From $136</p>
                    <p>/ person</p>
                </div>
            </div>
        </div>
    );
}

export default Card;