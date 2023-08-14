import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Styles/CoverMusicItem.css";

const CoverMusicItem = ({ idx, sel, setSel, data }) => {
    const dispatch = useDispatch();
    const key = idx;
    const selectHandler = (e) => {
        setSel(key);
        dispatch({
            type: "SET_NOW_PLAY",
            payload: data,
        });
    };
    return (
        <>
            <div
                className={sel ? "musicItem sel" : "musicItem"}
                checked={sel ? "true" : ""}
                key={data.id}
                onClick={selectHandler}
            >
                <img className="thumb" src={data.music_image_path} alt="" />
                <div className="info">
                    <div className="songName">{data.music_name}</div>
                    <div className="singerName">{data.music_singer}</div>
                </div>
            </div>
        </>
    );
};

export default CoverMusicItem;
