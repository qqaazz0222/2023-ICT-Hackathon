import { useState } from "react";
import "./Styles/Tab.css";

const Tab = ({ tabList, sel, chg }) => {
    return (
        <>
            <div id="tab">
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
export default Tab;
