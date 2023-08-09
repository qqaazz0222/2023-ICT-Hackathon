import { persistReducer } from "redux-persist"; // 추가
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const initialState = {
    dockType: "default",
    userData: {},
    searchKeyword: "",
    searchData: [],
};

const rootReducer = (state = initialState, action) => {
    let temp = { ...state };
    switch (action.type) {
        case "SET_DOCK_TYPE":
            temp.dockType = action.payload;
            return temp;
        case "CLEAR_DOCK_TYOE":
            temp.dockType = "default";
            return temp;
        case "SET_USER_DATA":
            temp.userData = action.payload;
            return temp;
        case "CLEAR_USER_DATA":
            temp.userData = {};
            return temp;
        case "SET_SEARCH_KEYWORD":
            temp.searchKeyword = action.payload;
            return temp;
        case "CLEAR_SEARCH_KEYWORD":
            temp.searchKeyword = {};
            return temp;
        case "SET_SEARCH_DATA":
            temp.searchData = action.payload;
            return temp;
        case "CLEAR_SEARCH_DATA":
            temp.searchData = {};
            return temp;
        case "CLEAR_ALL_DATA":
            temp = {
                userData: {},
                searchKeyword: "",
                searchData: [],
            };
            return temp;
        default:
            return state;
    }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
