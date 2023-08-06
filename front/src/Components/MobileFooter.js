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

const MobileHeader = ({ colorMode }) => {
    const { pathname } = useLocation();
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [pathname]);

    return (
        <>
            <div id="mobileFooter">
                <div id="playList">
                    <div className="barWrap">
                        <span className="bar" />
                    </div>
                    <div className="nowPlay">
                        <div className="songName">재생목록이 비었습니다.</div>
                        <div className="funcBtn">
                            <img className="preBtn" src={PreIcon} alt="pre" />
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
                        className={pathname === "/home" ? "selLink" : "link"}
                    >
                        <div className="linkIcon">
                            <img src={HomeIcon} alt="Home" />
                        </div>
                        <div className="linkInfo">홈</div>
                    </Link>
                    <Link
                        to="/overview"
                        className={
                            pathname === "/overview" ? "selLink" : "link"
                        }
                    >
                        <div className="linkIcon">
                            <img src={OverViewIcon} alt="OverView" />
                        </div>
                        <div className="linkInfo">둘러보기</div>
                    </Link>
                    <Link
                        to="/voicemodel"
                        className={
                            pathname === "/voicemodel" ? "selLink" : "link"
                        }
                    >
                        <div className="linkIcon">
                            <img src={VoiceModelIcon} alt="VoiceModel" />
                        </div>
                        <div className="linkInfo">음성모델</div>
                    </Link>
                    <Link
                        to="/search"
                        className={pathname === "/search" ? "selLink" : "link"}
                    >
                        <div className="linkIcon">
                            <img src={SearchIcon} alt="Search" />
                        </div>
                        <div className="linkInfo">검색</div>
                    </Link>
                    <Link
                        to="/my"
                        className={pathname === "/my" ? "selLink" : "link"}
                    >
                        <div className="linkIcon">
                            <img src={MyIcon} alt="My" />
                        </div>
                        <div className="linkInfo">마이</div>
                    </Link>
                </div>
                <div id="controlBar">
                    <span className="bar"></span>
                </div>
            </div>
        </>
    );
};

export default MobileHeader;
