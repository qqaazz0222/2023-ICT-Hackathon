import { useState } from "react";
import "./Styles/SearchInput.css";
import Search from "./Svg/Search18.svg";
import { useSelector, useDispatch } from "react-redux";
import { getSearchData } from "./../API/Api";
const SearchInput = () => {
    const dispatch = useDispatch();
    const keyword = useSelector((state) => state.searchKeyword);
    const [isEmpty, setIsEmpty] = useState(true);
    const searchInputHandler = (e) => {
        if (e.target.value === "") {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
        dispatch({
            type: "SET_SEARCH_KEYWORD",
            payload: e.target.value,
        });
        dispatch({
            type: "CLEAR_SEARCH_DATA",
        });
    };
    const focusSearchHandler = async () => {
        if (keyword !== "") {
            const data = await getSearchData(keyword);
            console.log("SearchData", data);
            dispatch({
                type: "SET_SEARCH_DATA",
                payload: data,
            });
        }
    };
    const enterSearchHandler = async (e) => {
        if (e.key === "Enter" && keyword !== "") {
            const data = await getSearchData(keyword);
            e.target.blur();
            dispatch({
                type: "SET_SEARCH_DATA",
                payload: data,
            });
        }
    };
    return (
        <>
            <div id="searchInput">
                {isEmpty ? <img src={Search} alt="" /> : <></>}
                <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    onChange={searchInputHandler}
                    onBlur={focusSearchHandler}
                    onKeyDown={enterSearchHandler}
                ></input>
            </div>
        </>
    );
};

export default SearchInput;
