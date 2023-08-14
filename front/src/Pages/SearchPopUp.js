import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/Search.css";
// 컴포넌트
import PageTitle from "../Components/PageTitle";
import PageSubTitle from "../Components/PageSubTitle";
import SearchInput from "../Components/SearchInput";
import SearchItem from "../Components/SearchItem";
import CoverMusicItem from "../Components/CoverMusicItem";
const SearchPopUp = ({ setCurrentPage, setColorMode }) => {
    const keyword = useSelector((state) => state.searchKeyword);
    const searchData = useSelector((state) => state.searchData);
    const [selItem, setSelItem] = useState(-1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "empty",
        });
        setSelItem(-1);
    }, [keyword]);
    useEffect(() => {
        dispatch({
            type: "SET_DOCK_TYPE",
            payload: "empty",
        });
    }, [dispatch]);
    useEffect(() => {
        if (selItem === -1) {
            dispatch({
                type: "SET_DOCK_TYPE",
                payload: "empty",
            });
        } else {
            dispatch({
                type: "SET_DOCK_TYPE",
                payload: "modelSearch",
            });
        }
    }, [selItem]);
    useEffect(() => {
        setColorMode("light");
    }, []);
    const selItemHandler = (e) => {
        setSelItem(e.target.key);
    };
    const data = [
        "노래제목1",
        "노래제목2",
        "노래제목3",
        "노래제목4",
        "노래제목5",
        "노래제목6",
        "노래제목7",
        "노래제목8",
        "노래제목9",
        "노래제목10",
    ];
    return (
        <>
            <div id="searchPopUp">
                <PageTitle text="검색" close={true} preUrl={"/model/create"} />
                <SearchInput />
                {searchData.length > 0 ? (
                    <>
                        {searchData.map((item, idx) => (
                            <CoverMusicItem
                                key={idx}
                                idx={idx}
                                data={item}
                                sel={selItem === idx ? true : false}
                                setSel={setSelItem}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <PageSubTitle text="급상승 검색어" />
                        {data.map((item, idx) => (
                            <SearchItem no={idx + 1} value={item} />
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default SearchPopUp;
