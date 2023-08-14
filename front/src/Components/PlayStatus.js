import "./Styles/PlayStatus.css";
const PlayStatus = () => {
    return (
        <>
            <div id="playStatus">
                <div className="barWrap">
                    <div className="bar"></div>
                </div>
                <div className="time">
                    <div className="curTime">00:00</div>
                    <div className="totTime">03:10</div>
                </div>
            </div>
        </>
    );
};
export default PlayStatus;
