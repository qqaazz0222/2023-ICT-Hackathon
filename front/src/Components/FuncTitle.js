import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Styles/FuncTitle.css";
import BackIcon from "./Svg/Back.svg";
import FavoriteIcon from "./Svg/Favorite.svg";
import MenuIcon from "./Svg/Menu.svg";

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
    const goBack = () => {
        document.location.replace(preUrl);
    };
    return (
        <>
            <div id="funcTitle">
                <div className="left">
                    <img src={BackIcon} alt="back" />
                </div>
                <div className="right">
                    <img src={FavoriteIcon} alt="favorite" />
                    <img src={MenuIcon} alt="menu" />
                </div>
            </div>
        </>
    );
};

export default FuncTitle;
