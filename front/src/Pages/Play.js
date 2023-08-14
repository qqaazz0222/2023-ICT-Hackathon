import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Styles/Play.css";
import PlayTitle from "./../Components/PlayTitle";
import PlayInfo from "../Components/PlayInfo";
import PlayStatus from "../Components/PlayStatus";
import PlayControl from "../Components/PlayControl";
const Play = ({ setCurrentPage, setColorMode }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "empty",
        });
    }, []);

    return (
        <>
            <div id="play">
                <PlayTitle />
                <PlayInfo />
                <PlayStatus />
                <PlayControl />
            </div>
        </>
    );
};

export default Play;
