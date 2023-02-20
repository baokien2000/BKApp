import React from "react";

export default function Square(props) {

    let WinnerMove = props.Winner == null ? [] : props.Winner[1];
    let currentMove = props.current == props.index ? "white" : "black"
    currentMove = WinnerMove.includes(props.index) ? "blue" : currentMove
    return (
        <button
            className="square"
            onClick={() => props.onClick()}
            style={{ color: currentMove }}
        >
            {props.value}
        </button>
    );
}
