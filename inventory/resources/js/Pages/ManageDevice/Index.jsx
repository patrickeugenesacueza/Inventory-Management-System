import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import AddUserButton from "@/Components/AddUserButton";
const Index = ({ auth }) => {
    // const { deviceList } = usePage().props;
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Manage Device
                    </h2>
                }
            >
                <Head title="Manage Device" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-5 py-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            {/* <AddUserButton href={route("manageUser.create")} /> */}
                            <AddUserButton>Add Device</AddUserButton>
                            <table className="min-w-full mt-6 divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Product
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Serial Number
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            IT
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* {userList.length > 0 ? (
                                        userList.map((user) => ( */}
                                    {/* <tr key={user.id}> */}
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {/* {user.name} */}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {/* {user.email} */}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {/* {formatDate(
                                                            user.created_at
                                                        )} */}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                            {/* <EditButton
                                                        href={route(
                                                            "manageUser.edit",
                                                            user.id
                                                        )}
                                                    ></EditButton> */}
                                            {/* 
                                                    <DeleteButton
                                                        userId={user.id}
                                                    /> */}
                                        </td>
                                    </tr>
                                    {/* ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="px-6 py-4 text-center text-sm text-gray-500"
                                            >
                                                No users found.
                                            </td>
                                        </tr>
                                    )} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
