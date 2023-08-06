import "./Styles/CoverChart.css";
import PlayIcon from "./Svg/chartPlayBtn.svg";

const CoverChart = ({ title, subTitle, data }) => {
    return (
        <div id="coverChart">
            <div className="header">
                <div className="title">{title}</div>
                <div className="subTitle">{subTitle}</div>
            </div>
            <div className="body">
                {data.map((item, idx) => (
                    <div className="item">
                        <img className="thumb" src={item.imgUrl} alt="" />
                        <div className="rank">{idx + 1}</div>
                        <div className="info">
                            <div className="songName">{item.songName}</div>
                            <div className="singerName">{item.singerName}</div>
                        </div>
                        <div className="play">
                            <img src={PlayIcon} alt="Play" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CoverChart;
