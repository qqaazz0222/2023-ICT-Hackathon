import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/Record.css";
import { getAudioData } from "./../API/Api";
// 컴포넌트

const Home = ({ setCurrentPage, setColorMode }) => {
    const dispatch = useDispatch();
    const nowPlayData = useSelector((state) => state.nowPlay);
    const [isPlaying, setIsPlaying] = useState(false);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);
    const [time, setTime] = useState("00:00");
    let sec = 0;
    const timer = setInterval(() => {
        if (isPlaying) {
            sec += 1;
            const mm = Math.floor(sec / 60);
            const ss = sec % 60;
            const MM = mm < 10 ? "0" + mm : mm;
            const SS = ss < 10 ? "0" + ss : ss;
            console.log(MM + ":" + SS);
            setTime(MM + ":" + SS);
        }
    }, 1000);
    useEffect(() => {
        if (count > 1) {
            setDisable(true);
        }
    }, [count]);
    useEffect(() => {
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "submitVoice",
        });
    }, [dispatch]);
    useEffect(() => {
        setColorMode("light");
    }, []);
    return (
        <>
            <div id="recordHeader">
                <div className="songName">{nowPlayData.music_name}</div>
                <div className="singerName">{nowPlayData.music_singer}</div>
            </div>
            <div id="recordBody">
                <div className="lyrics">
                    <div className="focusTop"></div>
                    <div className="focusBottom"></div>
                    <div className="rows">{nowPlayData.music_lyrics}</div>
                </div>
                <div className="record">
                    <div className="timer">{time}</div>

                    {!disable ? (
                        <div
                            className="funcBtn"
                            onClick={() => {
                                setIsPlaying(!isPlaying);
                                setCount(count + 1);
                            }}
                        >
                            {isPlaying ? (
                                <span className="stop"></span>
                            ) : (
                                <span className="start"></span>
                            )}
                        </div>
                    ) : (
                        <div className="disableBtn">
                            <span className="start"></span>
                        </div>
                    )}
                </div>
            </div>
            {/* <audio src={getAudioData(nowPlayData.id)} controls /> */}
        </>
    );
};

export default Home;
