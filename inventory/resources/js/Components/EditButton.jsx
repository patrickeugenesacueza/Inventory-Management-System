import React from "react";
import { Link } from "@inertiajs/react";
import { FaEdit } from "react-icons/fa";

const EditButton = (props) => {
    return (
        <Link
            href={props.href}
            className="bg-[rgb(189,246,189)] border border-green-900 border-dashed px-2 py-2 flex items-center justify-center rounded"
        >
            <FaEdit className="text-black" />
            {props.children}
        </Link>
    );
};

export default EditButton;
