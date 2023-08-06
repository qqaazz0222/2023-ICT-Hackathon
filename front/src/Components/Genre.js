import "./Styles/Genre.css";

const Genre = ({ data, genre, setGenre }) => {
    const genreIdxHandler = (e) => {
        setGenre(e.target.innerHTML);
        console.log(e.target.key);
    };

    return (
        <div id="genre">
            {data.map((item, idx) => (
                <div
                    className={genre === item ? "sel-item" : "item"}
                    onClick={genreIdxHandler}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Genre;
