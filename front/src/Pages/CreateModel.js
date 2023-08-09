import PageTitle from "../Components/PageTitle";
import PageInfo from "../Components/PageInfo";
import "./Styles/CreateModel.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CreateModel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "modelCreate",
        });
    }, [dispatch]);
    return (
        <div id="createModel">
            <PageTitle text={"음성모델 만들기"} close={true} />
            <PageInfo
                text={"나의 목소리"}
                subText={
                    "노래를 따라 부르고 나의 목소리를 업로드해 보세요. 인공지능이 회원님의 목소리를 특정하기 위해 최소 3곡 분량의 목소리가 필요합니다."
                }
            />
        </div>
    );
};

export default CreateModel;
