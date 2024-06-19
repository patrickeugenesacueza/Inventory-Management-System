import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { FaRegWindowClose  } from "react-icons/fa";

const DefectiveButton = ({ onClick }) => {
     return (
        <button
            onClick={onClick}
            className="bg-[#eeb2b2] border border-red-900 border-dashed px-2 py-2 flex items-center justify-center rounded"
        >
            <FaRegWindowClose className="text-black" />
        </button>
    );
};

export default DefectiveButton;
