import "./Styles/PageTitle.css";
import CloseIcon from "./Svg/Close.svg";

const PageTitle = ({ text, close, preUrl }) => {
    const goBack = () => {
        document.location.replace(preUrl);
    };
    return (
        <>
            <div id="pageTitle">
                {text}
                {close ? (
                    <div id="closeBtn" onClick={goBack}>
                        <img src={CloseIcon} alt="close" />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

export default PageTitle;
