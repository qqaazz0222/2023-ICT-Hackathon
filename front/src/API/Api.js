import axios from "axios";

const API = process.env.REACT_APP_API;

const getSearchData = async (keyword) => {
    try {
        const data = await axios.get(`${API}/search/${keyword}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
};

const getAudioData = (id) => {
    try {
        const srcUrl = `${API}/model/sample/${id}`;
        return srcUrl;
    } catch (error) {
        console.log(error);
    }
};

export { getSearchData, getAudioData };
