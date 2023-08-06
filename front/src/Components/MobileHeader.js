import React, { useEffect, useState } from "react";
import "./Styles/MobileHeader.css";
import Moment from "react-moment";
import { useInterval } from "use-interval";
import MobileHeaderStatusWhite from "./Images/MobileHeaderStatusWhite.png";
import MobileHeaderStatusBlack from "./Images/MobileHeaderStatusBlack.png";

const MobileHeader = ({ colorMode }) => {
    const [nowTime, setNowTime] = useState(Date.now());
    useInterval(() => {
        setNowTime(Date.now());
    }, 1000);
    return (
        <>
            <div
                id="mobileHeader"
                className={colorMode === "light" ? "light" : "dark"}
            >
                <div className="time">
                    <Moment format={"HH:mm"}>{nowTime}</Moment>
                </div>
                <div className="status">
                    {colorMode === "light" ? (
                        <img src={MobileHeaderStatusBlack} alt="" />
                    ) : (
                        <img src={MobileHeaderStatusWhite} alt="" />
                    )}
                </div>
            </div>
        </>
    );
};

export default MobileHeader;
