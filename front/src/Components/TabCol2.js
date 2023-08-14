import { useState } from "react";
import "./Styles/TabCol2.css";

const TabCol2 = ({ tabList, sel, chg }) => {
    return (
        <>
            <div id="tab2">
                {tabList.map((item, idx) => (
                    <div
                        className={idx === sel ? "selTabItem" : "tabItem"}
                        onClick={() => {
                            chg(idx);
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
};
export default TabCol2;
