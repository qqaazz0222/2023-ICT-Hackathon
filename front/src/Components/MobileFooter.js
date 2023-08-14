import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Styles/MobileFooter.css";
import HomeIcon from "./Svg/Home.svg";
import OverViewIcon from "./Svg/OverView.svg";
import VoiceModelIcon from "./Svg/VoiceModel.svg";
import SearchIcon from "./Svg/Search.svg";
import MyIcon from "./Svg/My.svg";
import PlayIcon from "./Svg/Play.svg";
import PlayListIcon from "./Svg/PlayList.svg";
import PreIcon from "./Svg/Pre.svg";
import NextIcon from "./Svg/Next.svg";
import PlusIcon from "./Svg/Plus.svg";
import VoiceSingIcon from "./Svg/VoiceSing.svg";
import MusicNoteIcon from "./Svg/MusicNote.svg";
import { useDispatch, useSelector } from "react-redux";

const MobileFooter = ({ colorMode }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const dockType = useSelector((state) => state.dockType);
    useEffect(() => {
        console.log(dockType);
    }, [dockType]);
    return (
        <>
            <div id="mobileFooter">
                {dockType === "default" ? (
                    <>
                        <div id="playList">
                            <div className="barWrap">
                                <span className="bar" />
                            </div>
                            <div className="nowPlay">
                                <div className="songName">
                                    재생목록이 비었습니다.
                                </div>
                                <div className="funcBtn">
                                    <img
                                        className="preBtn"
                                        src={PreIcon}
                                        alt="pre"
                                    />
                                    <img
                                        className="playBtn"
                                        src={PlayIcon}
                                        alt="play"
                                    />
                                    <img
                                        className="nextBtn"
                                        src={NextIcon}
                                        alt="next"
                                    />
                                    <img
                                        className="playListBtn"
                                        src={PlayListIcon}
                                        alt="playList"
                                    />
                                </div>
                            </div>
                        </div>
                        <div id="dock">
                            <Link
                                to="/home"
                                className={
                                    pathname === "/home" ? "selLink" : "link"
                                }
                            >
                                <div className="linkIcon">
                                    <img src={HomeIcon} alt="Home" />
                                </div>
                                <div className="linkInfo">홈</div>
                            </Link>
                            <Link
                                to="/overview"
                                className={
                                    pathname === "/overview"
                                        ? "selLink"
                                        : "link"
                                }
                            >
                                <div className="linkIcon">
                                    <img src={OverViewIcon} alt="OverView" />
                                </div>
                                <div className="linkInfo">둘러보기</div>
                            </Link>
                            <Link
                                to="/model"
                                className={
                                    pathname === "/voicemodel"
                                        ? "selLink"
                                        : "link"
                                }
                            >
                                <div className="linkIcon">
                                    <img
                                        src={VoiceModelIcon}
                                        alt="VoiceModel"
                                    />
                                </div>
                                <div className="linkInfo">음성모델</div>
                            </Link>
                            <Link
                                to="/search"
                                className={
                                    pathname === "/search" ? "selLink" : "link"
                                }
                            >
                                <div className="linkIcon">
                                    <img src={SearchIcon} alt="Search" />
                                </div>
                                <div className="linkInfo">검색</div>
                            </Link>
                            <Link
                                to="/my"
                                className={
                                    pathname === "/my" ? "selLink" : "link"
                                }
                            >
                                <div className="linkIcon">
                                    <img src={MyIcon} alt="My" />
                                </div>
                                <div className="linkInfo">마이</div>
                            </Link>
                        </div>
                        <div id="controlBar">
                            <span className="bar-black"></span>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {dockType === "modelCreate" ? (
                    <>
                        <div id="createModelFooter">
                            <div
                                className="addVoice"
                                onClick={() => {
                                    window.location.replace("/model/search");
                                }}
                            >
                                <img src={PlusIcon} alt="addVoice" />
                                목소리 추가하기
                            </div>
                            <div id="controlBar" style={{ background: "none" }}>
                                <span className="bar-white"></span>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {dockType === "modelSearch" ? (
                    <>
                        <div id="createModelFooter">
                            <div
                                className="addVoice"
                                onClick={() => {
                                    window.location.replace("/model/record");
                                }}
                            >
                                <img
                                    src={VoiceSingIcon}
                                    alt="addVoice"
                                    onClick={() => {
                                        dispatch({
                                            type: "CLAER_SEARCH_DATA",
                                        });
                                    }}
                                />
                                따라부르기
                            </div>
                            <div id="controlBar" style={{ background: "none" }}>
                                <span className="bar-white"></span>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {dockType === "submitVoice" ? (
                    <>
                        <div id="createModelFooter">
                            <div
                                className="addVoice"
                                onClick={() => {
                                    window.location.replace("/model/record");
                                }}
                            >
                                <img src={MusicNoteIcon} alt="addVoice" />
                                목소리 제출하기
                            </div>
                            <div id="controlBar" style={{ background: "none" }}>
                                <span className="bar-white"></span>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {dockType === "empty" ? (
                    <>
                        <div id="emptyFooter">
                            <div id="controlBar" style={{ background: "none" }}>
                                <span className="bar-black"></span>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

export default MobileFooter;
