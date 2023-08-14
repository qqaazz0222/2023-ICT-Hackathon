import "./Styles/PlayControl.css";
import PlaySongIcon from "./Svg/PlaySong.svg";
import PreSongIcon from "./Svg/PreSong.svg";
import NextSongIcon from "./Svg/NextSong.svg";
import PlayListMenuIcon from "./Svg/PlayListMenu.svg";
import RepeatIcon from "./Svg/Repeat.svg";
const PlayControl = () => {
    return (
        <>
            <div id="playControl">
                <div className="func1">
                    <img src={RepeatIcon} alt="" />
                    <img src={PreSongIcon} alt="" />
                    <img src={PlaySongIcon} alt="" />
                    <img src={NextSongIcon} alt="" />
                    <img src={RepeatIcon} alt="" />
                </div>
                <div className="func2">
                    <img src={PlayListMenuIcon} alt="" />
                    <button className="btn-white-border">
                        현재곡 커버하기
                    </button>
                    <img src={PlayListMenuIcon} alt="" />
                </div>
            </div>
        </>
    );
};
export default PlayControl;
