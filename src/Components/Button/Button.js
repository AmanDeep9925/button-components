import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const handleSize = (size) => {
    switch (size) {
        case "sm":
            return "6px 12px";
        case "md":
            return "12px 24px";
        case "lg":
            return "16px 32px";
        default:
            return "8px 16px";
    }
};

const StyledButton = styled.button`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap");
    background: ${({ variant, color }) =>
        variant ? "white" : color ? color : "#E0E0E0"};
    border: ${({ variant, color }) =>
        variant === "outline"
            ? `1px solid ${color ? color : "#3F3F3F"}`
            : `none`};
    color: ${({ variant, color }) =>
        variant ? (color ? color : "#3F3F3F") : color ? "white" : "#3F3F3F"};
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: ${({ disableShadow }) =>
        disableShadow ? "none" : "0px 2px 3px rgba(51, 51, 51, 0.2)"};
    padding: ${({ size }) => handleSize(size)};
    outline: none;
    &:hover,
    &:focus {
        background: ${({ variant, color }) =>
            variant === "text" || variant === "outline"
                ? lighten(0.45, color ? color : "#757575")
                : darken(0.1, color ? color : "#E0E0E0")};
    }
    &:disabled {
        background: #e0e0e0;
        color: #9e9e9e;
        cursor: no-drop;
        &:hover,
        &:focus {
            background: white;
        }
    }
`;

function Button(props) {
    return (
        <StyledButton {...props}>
            {props.startIcon ? <AddShoppingCartIcon /> : null}
            {props.children}
            {props.endIcon ? <AddShoppingCartIcon /> : null}
        </StyledButton>
    );
}

export default Button;
