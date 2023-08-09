import "./Styles/OnProcess.css";

const OnProcess = ({ type, data }) => {
    return (
        <>
            {data.length > 0 ? (
                <div id="onProcess">
                    <>
                        <img className="thumb" src={data[0].thumbUrl} alt="" />
                        <div className="info">
                            <div className="songName">{data[0].songName}</div>
                            <div className="singerName">
                                {data[0].singerName}
                            </div>
                        </div>
                        <div className="status">
                            <div className="value">{data[0].status}%</div>
                            진행률
                        </div>
                    </>
                </div>
            ) : (
                <div className="onProcessNoData">
                    제작중인 {type}이 없습니다.
                </div>
            )}
        </>
    );
};
export default OnProcess;
