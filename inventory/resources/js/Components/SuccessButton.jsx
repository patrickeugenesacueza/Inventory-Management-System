import React from "react";

const SuccessButton = (props) => {
    return (
        <button className="bg-green-500 font-bold text-white py-2 px-2 " value={props.value}>
            {props.children}
        </button>
    );
}

export default SuccessButton;
