import React from "react";
import "./Styles/BestVoiceModel.css";

// SVG
import ArrowRight from "./Svg/arrowRight.svg";

const BestVoiceModel = ({ data }) => {
    return (
        <>
            <div id="bestVoiceModel">
                <div className="header">
                    <div className="title">인기 음성모델</div>
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
                                    <div className="modelName">
                                        {item.modelName}
                                    </div>
                                    <div className="uploaderName">
                                        업로더 : {item.uploaderName}
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

export default BestVoiceModel;
