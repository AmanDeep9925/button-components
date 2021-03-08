import React from "react";
import Button from "../Button/ButtonsWrapper";
import MenuBar from "../Menu/Menu";

import "./main.css";

function MainLayout() {
    return (
        <div className="main">
            <MenuBar></MenuBar>
            <Button></Button>
        </div>
    );
}

export default MainLayout;
