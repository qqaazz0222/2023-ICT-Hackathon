import "./Styles/MusicItem.css";
import PlayIcon from "./Svg/chartPlayBtn.svg";

const MusicItem = ({ data, img, idx }) => {
    return (
        <>
            <div id="musicItem" key={data.id}>
                {!img ? (
                    <div className="no">{idx}</div>
                ) : (
                    <img className="thumb" src={data.music_image_path} alt="" />
                )}

                <div className="info">
                    <div className="songName">{data.music_name}</div>
                    <div className="singerName">{data.music_singer}</div>
                </div>
                <div className="play">
                    <img src={PlayIcon} alt="Play" />
                </div>
            </div>
        </>
    );
};

export default MusicItem;
