import React from "react";

function Card(props: any) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    }
    else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <img src={"/images/" + props.item.coverImg} alt="" className="picture" />
            {badgeText !== undefined && <div className="tag-container">
                <p className="tag">{badgeText}</p>
            </div>}

            <div className="info">
                <div className="rating">
                    <img src="/images/star.png" alt="" />
                    <p id="score">{props.item.stats.rating}</p>
                    <p>({props.item.stats.reviewCount})</p>
                    <p>&#x2022;</p>
                    <p>{props.item.location}</p>
                </div>
                <p className="description">{props.item.title}</p>
                <div className="price">
                    <p id="semibold">From ${props.item.price}</p>
                    <p>/ person</p>
                </div>
            </div>
        </div>
    );
}

export default Card;