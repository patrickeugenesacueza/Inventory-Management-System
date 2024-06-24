import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const CreateDevice = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        category: "",
        product: "",
        sn: "",
        price: "",
        personnel: auth.user.name, // Set the default value to the authenticated user's name
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('manageDevice.createDeviceProcess'));
    };

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                         <a  className="underline" href={route('manageDevice.index')}>Manage Device</a> {">"} Add Device
                    </h2>
                }
            >
                <Head title="Add New Device" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-5 py-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="text-xl font-medium text-green-700 mb-5">
                                Add New Device
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                        Category:
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        id="category"
                                        value={data.category}
                                        onChange={(e) => setData("category", e.target.value)}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                                        Product:
                                    </label>
                                    <input
                                        type="text"
                                        name="product"
                                        id="product"
                                        value={data.product}
                                        onChange={(e) => setData("product", e.target.value)}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="sn" className="block text-sm font-medium text-gray-700">
                                        Serial Number:
                                    </label>
                                    <input
                                        type="text"
                                        name="sn"
                                        id="sn"
                                        value={data.sn}
                                        onChange={(e) => setData("sn", e.target.value)}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Price:
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        value={data.price}
                                        onChange={(e) => setData("price", e.target.value)}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="personnel" className="block text-sm font-medium text-gray-700">
                                        IT:
                                    </label>
                                    <input
                                        type="text"
                                        name="personnel"
                                        id="personnel"
                                        value={data.personnel}
                                        onChange={(e) => setData("personnel", e.target.value)}
                                        readOnly
                                        className="cursor-not-allowed mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        type="submit"
                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        disabled={processing}
                                    >
                                        Create Device
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default CreateDevice;
