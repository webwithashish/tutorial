import React from "react";

function TabButton(props) {
    return (
        <li>
            <button
                value={props.label}
                onClick={props.onClick}
                className={props.isSelected && "active"}
            >
                {props.label}
            </button>
        </li>
    );
}

export default TabButton;
