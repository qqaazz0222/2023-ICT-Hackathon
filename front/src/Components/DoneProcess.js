import PlayIcon from "./Svg/PlayBlack.svg";
import "./Styles/DoneProcess.css";

const DoneProcess = ({ type, data }) => {
    return (
        <>
            {data.length > 0 ? (
                data.map((item, idx) => (
                    <div id="doneProcess">
                        <img className="thumb" src={item.thumbUrl} alt="" />
                        <div className="info">
                            <div className="songName">{item.songName}</div>
                            <div className="singerName">{item.singerName}</div>
                        </div>
                        <div className="func">
                            <img src={PlayIcon} alt="play" />
                        </div>
                    </div>
                ))
            ) : (
                <>
                    <div className="doneNoData">
                        제작중인 {type}이 없습니다.
                    </div>
                    <button
                        className="btn-white-border"
                        onClick={() => {
                            document.location.replace(
                                type === "커버곡"
                                    ? "/cover/create"
                                    : "/model/create"
                            );
                        }}
                    >
                        {type} 만들기
                    </button>
                </>
            )}
        </>
    );
};
export default DoneProcess;
