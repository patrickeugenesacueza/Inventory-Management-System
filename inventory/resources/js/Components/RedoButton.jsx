import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { FaRedoAlt } from "react-icons/fa";

const RedoButton = ({ id }) => {
    const handleRedo = (e) => {
        e.preventDefault();
        Inertia.post(route('manageDevice.redoFromDefective', { id }));
    };

    return (
        <button
            onClick={handleRedo}
            className="bg-[rgb(189,246,189)] border border-green-900 border-dashed px-2 py-2 flex items-center justify-center rounded"
        >
            <FaRedoAlt className="text-black" />
        </button>
    );
};

export default RedoButton;
