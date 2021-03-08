import React from "react";
import "./menu.css";

function MenuBar() {
    return (
        <div className="menu">
            <h1 className="heading">
                <span>Dev</span>Challenges.io
            </h1>
            <ul className="menu--list">
                <li className="list--item">Colors</li>
                <li className="list--item">Typography</li>
                <li className="list--item">Spaces</li>
                <li className="list--item">Buttons</li>
                <li className="list--item active">Inputs</li>
                <li className="list--item">Grid</li>
            </ul>
        </div>
    );
}

export default MenuBar;
