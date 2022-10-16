import React from "react";

function Card(props: any) {
    return (
        <div className="card">
            <img src={props.img} alt="" className="picture" />
            {props.openSpots === 0 && <div className="tag-container">
                <p className="tag">sold out</p>
            </div>}

            <div className="info">
                <div className="rating">
                    <img src="/images/star.png" alt="" />
                    <p id="score">{props.rating}</p>
                    <p>{props.reviewCount}</p>
                    <p>&#x2022;</p>
                    <p>{props.location}</p>
                </div>
                <p className="description">{props.title}</p>
                <div className="price">
                    <p id="semibold">From ${props.price}</p>
                    <p>/ person</p>
                </div>
            </div>
        </div>
    );
}

export default Card;