import React from "react";
import { Outlet } from "react-router-dom";
import "./Styles/BaseLayout.css";
import MobileHeader from "../Components/MobileHeader";
import MobileFooter from "../Components/MobileFooter";

const BaseLayout = ({ currentPage, colorMode }) => {
    return (
        <>
            <div id="baseLayout">
                <MobileHeader colorMode={colorMode} />
                <MobileFooter colorMode={colorMode} />
                <div id="content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default BaseLayout;
