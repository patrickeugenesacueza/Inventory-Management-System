import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = (props) => {
    return (
        <button className="bg-[#eeb2b2] border border-red-900 border-dashed px-2 py-2 flex items-center justify-center rounded">
            <FaRegTrashAlt className="text-black" />
            {props.children}
        </button>
    );
};

export default DeleteButton;
