import React, { useEffect, useState } from "react";
import "./Styles/OverView.css";
// 컴포넌트
import PageTitle from "../Components/PageTitle";
import Genre from "../Components/Genre";
import PageSubTitle from "../Components/PageSubTitle";
import CoverChart from "../Components/CoverChart";

const OverView = ({ setCurrentPage, setColorMode }) => {
    useEffect(() => {
        setColorMode("light");
    }, []);
    const [genre, setGenre] = useState("발라드");
    const genreData = ["발라드", "힙합", "인디", "댄스"];
    const bChartData = [
        {
            imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/113/00/305/11300305_20230804162426_500.jpg?2f13fa7050e597be4905e4e3e00574d8/melon/resize/282/quality/80/optimize",
            songName: "다만 마음으로만",
            singerName: "카이",
        },
        {
            imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/113/00/116/11300116_20230804141401_500.jpg?1e8ab76550afbac77f083d1d0abe8138/melon/resize/282/quality/80/optimize",
            songName: "착한사람 콤플렉스",
            singerName: "윤도현",
        },
        {
            imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/113/00/397/11300397_20230804164948_500.jpg?7d5729d0c15cdcc3c8bc60e250871def/melon/resize/282/quality/80/optimize",
            songName: "Fall In Love",
            singerName: "Fleeky Bang",
        },
        {
            imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/99/718/11299718_20230803162644_500.jpg?26579474b275d1db569bc13b7ac4ca3c/melon/resize/282/quality/80/optimize",
            songName: "애인 있어요",
            singerName: "주호",
        },
        {
            imgUrl: "https://cdnimg.melon.co.kr/cm2/album/images/112/99/827/11299827_20230804101954_500.jpg?729ccfb55069de53cf241070dac7dc77/melon/resize/282/quality/80/optimize",
            songName: "Readt Set Go",
            singerName: "CRAVITY",
        },
    ];
    return (
        <div id="overView">
            <PageTitle text="둘러보기" />
            <Genre data={genreData} genre={genre} setGenre={setGenre} />
            <PageSubTitle text="차트" />
            <CoverChart
                title="발라드 커버 차트"
                subTitle="최근 24시간 집계, 최고 인기 커버 발라드곡을 만나보세요."
                data={bChartData}
            />
            <CoverChart
                title="힙합 커버 차트"
                subTitle="최근 24시간 집계, 최고 인기 커버 힙합곡을 만나보세요."
                data={bChartData}
            />
            <CoverChart
                title="인디 커버 차트"
                subTitle="최근 24시간 집계, 최고 인기 커버 인디곡을 만나보세요."
                data={bChartData}
            />
            <CoverChart
                title="댄스 커버 차트"
                subTitle="최근 24시간 집계, 최고 인기 커버 댄스곡을 만나보세요."
                data={bChartData}
            />
        </div>
    );
};

export default OverView;
