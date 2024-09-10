import React from "react";
import icon from "../assets/love-icon.png"

export default function Footer(props) {

    const forBackGroundColor = (m) => {
        switch (m) {
            case "dark":
                return "#212529";
            default:
                return "#f8f9fa";
        };
    };

    return (
        <div className="copyright" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: forBackGroundColor(props.mode) }}>
            <p>Copyright © Abhishek. Made with <img src={icon} alt='love' style={{filter: props.mode === "dark" ? "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(207deg) brightness(107%) contrast(103%)" : ""}} /> by Abhishek Jadhav</p>
        </div>
    )
}