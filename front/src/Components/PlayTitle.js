import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Styles/PlayTitle.css";
import BackIcon from "./Svg/Back.svg";

const FuncTitle = ({ text, close, preUrl }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "CLEAR_HISTORY",
        });
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "default",
        });
    }, [dispatch]);
    return (
        <>
            <div id="playTitle">
                <div className="left"></div>
                <div className="right">
                    <img src={BackIcon} alt="back" />
                </div>
            </div>
        </>
    );
};

export default FuncTitle;
