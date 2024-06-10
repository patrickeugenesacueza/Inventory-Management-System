import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = ({ userId }) => {
    const handleDelete = () => {
        Inertia.delete(route("manageUser.delete_process", userId))
            .then(() => {
                console.log("User deleted successfully");
                // Optionally, you can trigger a page reload or update the UI
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
                // Optionally, you can display an error message to the user
            });
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-[#eeb2b2] border border-red-900 border-dashed px-2 py-2 flex items-center justify-center rounded"
        >
            <FaRegTrashAlt className="text-black" />
        </button>
    );
};

export default DeleteButton;
