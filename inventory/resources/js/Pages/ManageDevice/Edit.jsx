import React from "react";
import { usePage, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Edit = () => {
    const { auth, errors, device } = usePage().props;
    const { data, setData, put, processing } = useForm({
        category: device.category || "",
        product: device.product || "",
        sn: device.sn || "",
        price: device.price || "",
        personnel: device.personnel || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("manageDevice.update", device.id), {
            data,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Manage Device - Edit Device
                </h2>
            }
        >
            <Head title="Edit Device" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-5 py-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-xl font-medium text-green-700 mb-5">
                            Edit Device
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* {errors && (
                                <div className="text-[#fff] bg-red-200 py-3 px-3 w-[10em] border border-red-900 border-dashed">
                                    {Object.keys(errors).map((key) => (
                                        <div key={key}>{errors[key]}</div>
                                    ))}
                                </div>
                            )} */}
                            <div>
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                <label
                                    htmlFor="product"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                <label
                                    htmlFor="sn"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Price:
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    value={data.price}
                                    onChange={(e) => setData("price", e.target.value)}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="personnel"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    IT Personnel:
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
                                    Update Device
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
