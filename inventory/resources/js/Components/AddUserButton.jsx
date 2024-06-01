import React from "react";
import { FaUserPlus } from "react-icons/fa"; // Import the icon

const AddUserButton = () => {
    return (
        <>
            <button className="bg-[#bdf6bd] border border-green-900 border-dashed px-4 py-2 flex items-center">
                <FaUserPlus className="mr-2" /> {/* Add the icon */}
                Add new user
            </button>
        </>
    );
};

export default AddUserButton;
