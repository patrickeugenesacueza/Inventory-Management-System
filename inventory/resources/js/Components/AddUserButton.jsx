import React from "react";
import { Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";

const AddUserButton = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="bg-[#bdf6bd] border border-green-900 border-dashed px-4 py-2 flex rounded w-[10em]"
        >
            <FaPlus className="mr-2" />
            {children}
        </Link>
    );
};

export default AddUserButton;
