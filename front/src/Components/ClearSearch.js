import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    console.log(pathname);

    useEffect(() => {
        dispatch({
            type: "CLEAR_SEARCH_KEYWORD",
        });
        dispatch({
            type: "CLEAR_SEARCH_DATA",
        });
    }, [pathname, dispatch]);

    return null;
}
