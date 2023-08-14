import "./Styles/MusicInfo.css";
import RecordPanImg from "./Images/recordPan.png";

const MusicInfo = ({ data }) => {
    return (
        <div id="musicInfo">
            <div className="songName">노래명</div>
            <div className="singerName">가수명</div>
            <div className="thumb">
                <img className="bg" src={RecordPanImg} alt="recordPan" />
                <img
                    className="thumbNail"
                    src="https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg?f2aaefe2470b9694d40b0ad16df118a6/melon/resize/1024/quality/80/optimize"
                    alt="thumbNail"
                />
            </div>
        </div>
    );
};

export default MusicInfo;
