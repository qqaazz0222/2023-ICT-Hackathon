import "./Styles/SearchItem.css";
const SearchItem = ({ no, value }) => {
    return (
        <>
            <div id="searchItem">
                <div className="no">{no}</div>
                <div className="value">{value}</div>
            </div>
        </>
    );
};

export default SearchItem;
