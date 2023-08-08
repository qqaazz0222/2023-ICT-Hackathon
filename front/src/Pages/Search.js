import React, { useState, useEffect } from "react";
import "./Styles/Search.css";
// 컴포넌트
import PageTitle from "../Components/PageTitle";
import PageSubTitle from "../Components/PageSubTitle";
import SearchInput from "../Components/SearchInput";
import SearchItem from "../Components/SearchItem";
const Search = ({ setCurrentPage, setColorMode }) => {
    useEffect(() => {
        setColorMode("light");
    }, []);
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
            <div id="search">
                <PageTitle text="검색" />
                <SearchInput />
                <PageSubTitle text="급상승 검색어" />
                {data.map((item, idx) => (
                    <SearchItem no={idx + 1} value={item} />
                ))}
            </div>
        </>
    );
};

export default Search;
