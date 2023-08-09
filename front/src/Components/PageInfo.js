import "./Styles/PageInfo.css";
const PageInfo = ({ text, subText }) => {
    return (
        <div id="pageInfo">
            <div class="subTitle">{text}</div>
            <div class="info">{subText}</div>
        </div>
    );
};
export default PageInfo;
