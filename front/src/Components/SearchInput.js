import { useState } from "react";
import "./Styles/SearchInput.css";
import Search from "./Svg/Search18.svg";
import { useDispatch } from "react-redux";
const SearchInput = () => {
    const dispatch = useDispatch();
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
    };
    return (
        <>
            <div id="searchInput">
                {isEmpty ? <img src={Search} alt="" /> : <></>}
                <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    onChange={searchInputHandler}
                ></input>
            </div>
        </>
    );
};

export default SearchInput;
