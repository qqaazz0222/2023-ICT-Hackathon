import { Link } from "react-router-dom";
import "./Styles/Banner.css";

const Banner = ({ link, imgUrl }) => {
    return (
        <>
            <div id="banner">
                <img src={imgUrl} alt="banner" />
            </div>
        </>
    );
};

export default Banner;
