import "./Styles/PlayInfo.css";
import FavoriteIcon from "./Svg/Favorite.svg";
import MenuIcon from "./Svg/Menu.svg";

const PlayInfo = ({ data }) => {
    return (
        <div id="playInfo">
            <div className="songName">노래명</div>
            <div className="singerName">가수명</div>
            <img
                className="thumb"
                src="https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg?f2aaefe2470b9694d40b0ad16df118a6/melon/resize/1024/quality/80/optimize"
                alt="thumbNail"
            />
            <div className="func">
                <img src={FavoriteIcon} alt="favorite" />
                <img src={MenuIcon} alt="menu" />
            </div>
        </div>
    );
};

export default PlayInfo;
