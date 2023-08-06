import React from "react";
import "./Styles/NewCover.css";

// SVG
import ArrowRight from "./Svg/arrowRight.svg";

const NewCover = ({ data }) => {
    return (
        <>
            <div id="newCover">
                <div className="header">
                    <div className="title">신규 커버곡</div>
                    <div className="btnMore">
                        <img src={ArrowRight} alt="" />
                    </div>
                </div>
                <div className="body">
                    <div className="list">
                        {data.map((item, idx) => (
                            <div className="item" key={idx}>
                                <img
                                    className="thumb"
                                    src={item.imgUrl}
                                    alt=""
                                />
                                <div className="info">
                                    <div className="songName">
                                        {item.songName}
                                    </div>
                                    <div className="singerName">
                                        {item.singerName}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewCover;
