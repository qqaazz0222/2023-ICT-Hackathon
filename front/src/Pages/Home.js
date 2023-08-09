import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Styles/Home.css";
// 컴포넌트
import Promotion from "../Components/Promotion";
import NewCover from "../Components/NewCover";
import BestCover from "../Components/BestCover";
import BestVoiceModel from "../Components/BestVoiceModel";
import Banner from "../Components/Banner";
// 이미지
import VoiceModelStudio from "./../Components/Images/VoiceModelStudio.png";

const Home = ({ setCurrentPage, setColorMode }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "default",
        });
    }, [dispatch]);
    useEffect(() => {
        setColorMode("dark");
    }, []);
    const data = {
        newCoverData: [
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_500.jpg?0b3a98d363e31435d805d60e3041a54b/melon/resize/1024/quality/1024/optimize",
                songName: "Seven (feat. Latto) - Clean Ver.",
                singerName: "정국",
            },
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg?adcd1e7bd5800378cd55ef3b7b5ffb8f/melon/resize/1024/quality/80/optimize",
                songName: "Super Shy",
                singerName: "NewJeans",
            },
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg?f2aaefe2470b9694d40b0ad16df118a6/melon/resize/1024/quality/80/optimize",
                songName: "헤어지자 말해요",
                singerName: "박재정",
            },
        ],
        bestCoverData: [
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_500.jpg?0b3a98d363e31435d805d60e3041a54b/melon/resize/1024/quality/1024/optimize",
                songName: "Seven (feat. Latto) - Clean Ver.",
                singerName: "정국",
            },
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg?adcd1e7bd5800378cd55ef3b7b5ffb8f/melon/resize/1024/quality/80/optimize",
                songName: "Super Shy",
                singerName: "NewJeans",
            },
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg?f2aaefe2470b9694d40b0ad16df118a6/melon/resize/1024/quality/80/optimize",
                songName: "헤어지자 말해요",
                singerName: "박재정",
            },
        ],
        bestVoiceModel: [
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_500.jpg?0b3a98d363e31435d805d60e3041a54b/melon/resize/1024/quality/1024/optimize",
                modelName: "음성 모델 1",
                uploaderName: "업로",
            },
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg?adcd1e7bd5800378cd55ef3b7b5ffb8f/melon/resize/1024/quality/80/optimize",
                modelName: "음성 모델 2",
                uploaderName: "NewJeans",
            },
            {
                imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg?f2aaefe2470b9694d40b0ad16df118a6/melon/resize/1024/quality/80/optimize",
                modelName: "음성 모델 3",
                uploaderName: "박재정",
            },
        ],
    };
    return (
        <>
            <Promotion />
            <NewCover data={data.newCoverData} />
            <BestCover data={data.newCoverData} />
            <Banner link={"www.naver.com"} imgUrl={VoiceModelStudio} />
            <BestVoiceModel data={data.bestVoiceModel} />
        </>
    );
};

export default Home;
