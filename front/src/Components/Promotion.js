import React from "react";
import "./Styles/Promotion.css";

const Promotion = () => {
    return (
        <>
            <div id="promotion">
                <div className="title">
                    당신의 목소리로
                    <br />
                    노래를 만들어보세요.
                </div>
                <div className="recommend">
                    <div className="title">추천 음악</div>
                    <div className="list">
                        <div className="item">
                            <div className="thumb"></div>
                            <div className="info">
                                <div className="songName">노래명</div>
                                <div className="singerName">가수명</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="thumb"></div>
                            <div className="info">
                                <div className="songName">노래명</div>
                                <div className="singerName">가수명</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Promotion;
