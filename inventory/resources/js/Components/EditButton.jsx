import React from "react";
import { FaEdit } from "react-icons/fa";

const EditButton = (props) => {
    return (
        <button className="bg-[#bdf6bd] border border-green-900 border-dashed px-2 py-2 flex items-center justify-center rounded">
            <FaEdit className="text-black" />
            {props.children}
        </button>
    );
};

export default EditButton;
