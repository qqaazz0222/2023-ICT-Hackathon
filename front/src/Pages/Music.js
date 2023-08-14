import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Styles/Music.css";
import FuncTitle from "../Components/FuncTitle";
import MusicInfo from "../Components/MusicInfo";
import TabCol2 from "../Components/TabCol2";
import MusicItem from "../Components/MusicItem";
const Music = ({ setCurrentPage, setColorMode }) => {
    const dispatch = useDispatch();
    const [selTab, setSelTab] = useState(0);
    const data = [
        {
            id: 15,
            music_name: "부동의 첫사랑",
            music_singer: "10CM",
            music_lyrics:
                "주인공은 아니었지누구의 시점에서도그냥 스쳐 지나가거나친구3이라거나이름 없는 역할 뿐너에게는 알 수 없는멋진 향기가 났었지지나칠 수 없는 마음을대사 한 줄 없지만말하고 싶었는데창가에 비친 너의 얼굴은나만을 위한 등장이었는지단 한 번의 명장면이빠르게 지나가고 있었지소리쳐 이름을 불러 볼까한 시간쯤은 기억해 줄까뒤를 돌아봐 주었지만너의 미소는 내게 와주지 않았지다음 편이 기대되지 않는예상 가능한 엔딩만 남은로맨스도 뭣도 아닌나의 부동의 첫사랑좋아하는 마음이란왜 감출 수가 없는지나는 바보 같은 말투로대본에도 없었던고백을 해버렸지대답이 없는 너의 표정은누구를 위한 연출이었는지웃기라도 해준다면이상한 애가 돼도 좋은데소리쳐 이름을 불러 볼까30분쯤은 기억해 줄까뒤를 돌아봐 주었지만너의 미소는 내게 와주지 않았지다음 편이 기대되지 않는예상 가능한 엔딩만 남은로맨스도 뭣도 아닌나의 부동의 첫사랑굳이 응원해 준 사람도 없었지만너를 향한 노래가 생겼어이젠 웃으며 부를 수 있어그저 흐릿한 조명처럼너의 미소를 빛내줄 수만 있다면예고편이 공개되지 않고뻔한 엔딩도 맺지 못했지만나의 마음속 언제나항상 빛나고 있는 부동의 첫사랑",
            music_image_path:
                "https://cdnimg.melon.co.kr/cm2/album/images/112/43/537/11243537_20230512161747_500.jpg/melon/resize/120/quality/80/optimize",
            music_path: null,
            vocal_path:
                "C:\\Users\\me\\Desktop\\diff-svc\\diff-svc-main\\raw\\부동의 첫사랑.mp3",
            vocal_gender: "m",
        },
        {
            id: 15,
            music_name: "부동의 첫사랑",
            music_singer: "10CM",
            music_lyrics:
                "주인공은 아니었지누구의 시점에서도그냥 스쳐 지나가거나친구3이라거나이름 없는 역할 뿐너에게는 알 수 없는멋진 향기가 났었지지나칠 수 없는 마음을대사 한 줄 없지만말하고 싶었는데창가에 비친 너의 얼굴은나만을 위한 등장이었는지단 한 번의 명장면이빠르게 지나가고 있었지소리쳐 이름을 불러 볼까한 시간쯤은 기억해 줄까뒤를 돌아봐 주었지만너의 미소는 내게 와주지 않았지다음 편이 기대되지 않는예상 가능한 엔딩만 남은로맨스도 뭣도 아닌나의 부동의 첫사랑좋아하는 마음이란왜 감출 수가 없는지나는 바보 같은 말투로대본에도 없었던고백을 해버렸지대답이 없는 너의 표정은누구를 위한 연출이었는지웃기라도 해준다면이상한 애가 돼도 좋은데소리쳐 이름을 불러 볼까30분쯤은 기억해 줄까뒤를 돌아봐 주었지만너의 미소는 내게 와주지 않았지다음 편이 기대되지 않는예상 가능한 엔딩만 남은로맨스도 뭣도 아닌나의 부동의 첫사랑굳이 응원해 준 사람도 없었지만너를 향한 노래가 생겼어이젠 웃으며 부를 수 있어그저 흐릿한 조명처럼너의 미소를 빛내줄 수만 있다면예고편이 공개되지 않고뻔한 엔딩도 맺지 못했지만나의 마음속 언제나항상 빛나고 있는 부동의 첫사랑",
            music_image_path:
                "https://cdnimg.melon.co.kr/cm2/album/images/112/43/537/11243537_20230512161747_500.jpg/melon/resize/120/quality/80/optimize",
            music_path: null,
            vocal_path:
                "C:\\Users\\me\\Desktop\\diff-svc\\diff-svc-main\\raw\\부동의 첫사랑.mp3",
            vocal_gender: "m",
        },
        {
            id: 15,
            music_name: "부동의 첫사랑",
            music_singer: "10CM",
            music_lyrics:
                "주인공은 아니었지누구의 시점에서도그냥 스쳐 지나가거나친구3이라거나이름 없는 역할 뿐너에게는 알 수 없는멋진 향기가 났었지지나칠 수 없는 마음을대사 한 줄 없지만말하고 싶었는데창가에 비친 너의 얼굴은나만을 위한 등장이었는지단 한 번의 명장면이빠르게 지나가고 있었지소리쳐 이름을 불러 볼까한 시간쯤은 기억해 줄까뒤를 돌아봐 주었지만너의 미소는 내게 와주지 않았지다음 편이 기대되지 않는예상 가능한 엔딩만 남은로맨스도 뭣도 아닌나의 부동의 첫사랑좋아하는 마음이란왜 감출 수가 없는지나는 바보 같은 말투로대본에도 없었던고백을 해버렸지대답이 없는 너의 표정은누구를 위한 연출이었는지웃기라도 해준다면이상한 애가 돼도 좋은데소리쳐 이름을 불러 볼까30분쯤은 기억해 줄까뒤를 돌아봐 주었지만너의 미소는 내게 와주지 않았지다음 편이 기대되지 않는예상 가능한 엔딩만 남은로맨스도 뭣도 아닌나의 부동의 첫사랑굳이 응원해 준 사람도 없었지만너를 향한 노래가 생겼어이젠 웃으며 부를 수 있어그저 흐릿한 조명처럼너의 미소를 빛내줄 수만 있다면예고편이 공개되지 않고뻔한 엔딩도 맺지 못했지만나의 마음속 언제나항상 빛나고 있는 부동의 첫사랑",
            music_image_path:
                "https://cdnimg.melon.co.kr/cm2/album/images/112/43/537/11243537_20230512161747_500.jpg/melon/resize/120/quality/80/optimize",
            music_path: null,
            vocal_path:
                "C:\\Users\\me\\Desktop\\diff-svc\\diff-svc-main\\raw\\부동의 첫사랑.mp3",
            vocal_gender: "m",
        },
    ];
    return (
        <>
            <div id="music">
                <FuncTitle />
                <MusicInfo />
                <TabCol2
                    tabList={["커버곡", "음성모델"]}
                    sel={selTab}
                    chg={setSelTab}
                />
                {data.map((item, idx) => (
                    <MusicItem data={item} img={false} idx={idx} />
                ))}
            </div>
        </>
    );
};

export default Music;
