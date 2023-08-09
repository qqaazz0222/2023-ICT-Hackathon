import "./Styles/PageTitle.css";
import CloseIcon from "./Svg/Close.svg";

const PageTitle = ({ text, close }) => {
    return (
        <>
            <div id="pageTitle">
                {text}
                {close ? (
                    <div
                        id="closeBtn"
                        onClick={() => {
                            window.history.back();
                        }}
                    >
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
