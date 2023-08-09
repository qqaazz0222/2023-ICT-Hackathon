import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PageTitle from "../Components/PageTitle";
import PageSubTitle from "../Components/PageSubTitle";
import Tab from "../Components/Tab";
import OnProcess from "../Components/OnProcess";
import DoneProcess from "../Components/DoneProcess";
import "./Styles/My.css";

const My = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "default",
        });
    }, [dispatch]);
    const [tabIdx, setTabIdx] = useState(0);
    const tabList = ["나의 커버곡", "나의 음성모델"];
    const data = {
        onProcessCover: [
            {
                songName: "노래1",
                singerName: "가수1",
                status: 0,
                thumbUrl:
                    "https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/120/quality/80/optimize",
            },
        ],
        onProcessModel: [],
        doneCover: [
            {
                songName: "노래1",
                singerName: "가수1",
                thumbUrl:
                    "https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_500.jpg/melon/resize/120/quality/80/optimize",
            },
            {
                songName: "노래2",
                singerName: "가수2",
                thumbUrl:
                    "https://cdnimg.melon.co.kr/cm2/album/images/112/34/678/11234678_20230502162327_500.jpg/melon/resize/120/quality/80/optimize",
            },
            {
                songName: "노래3",
                singerName: "가수3",
                thumbUrl:
                    "https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg/melon/resize/120/quality/80/optimize",
            },
            {
                songName: "노래4",
                singerName: "가수4",
                thumbUrl:
                    "https://cdnimg.melon.co.kr/cm2/album/images/112/11/297/11211297_20230410151046_500.jpg/melon/resize/120/quality/80/optimize",
            },
        ],
        doneModel: [],
    };
    return (
        <>
            <div id="my">
                <PageTitle text="마이" />
                <Tab tabList={tabList} sel={tabIdx} chg={setTabIdx} />
                {tabIdx === 0 ? (
                    <>
                        <PageSubTitle text={"제작중"} />
                        <OnProcess
                            type={tabList[tabIdx].split(" ")[1]}
                            data={data.onProcessCover}
                        />
                        <PageSubTitle text={"제작완료"} />
                        <DoneProcess
                            type={tabList[tabIdx].split(" ")[1]}
                            data={data.doneCover}
                        />
                    </>
                ) : (
                    <>
                        <PageSubTitle text={"제작중"} />
                        <OnProcess
                            type={tabList[tabIdx].split(" ")[1]}
                            data={data.onProcessModel}
                        />
                        <PageSubTitle text={"제작완료"} />
                        <DoneProcess
                            type={tabList[tabIdx].split(" ")[1]}
                            data={data.doneModel}
                        />
                    </>
                )}
            </div>
        </>
    );
};
export default My;
