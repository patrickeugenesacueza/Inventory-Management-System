import React from "react";
import { Link } from "@inertiajs/react";
import { FaTrashRestoreAlt  } from "react-icons/fa";

const DangerButton = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="bg-[#ffcccc] border border-green-900 border-dashed px-4 py-2 flex rounded w-auto"
        >
            <FaTrashRestoreAlt className="mr-2" />
            {children}
        </Link>
    );
};

export default DangerButton;
