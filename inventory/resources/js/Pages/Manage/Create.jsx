import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function ManageUserCreate({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        repassword: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.password !== data.repassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        post(route('manageUser.create_process'));
    };

    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Manage User
                </h2>
            }
        >
            <Head title="Create User" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-5 py-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-xl font-medium text-green-700 mb-5">
                            Add New User
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="text-red-600">
                                    {error}
                                </div>
                            )}
                            {errors.email && (
                                <div className="text-[#fff] bg-red-200 py-3 px-3 w-[10em] border border-red-900 border-dashed">
                                    User already exists
                                </div>
                            )}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="repassword" className="block text-sm font-medium text-gray-700">
                                    Re-type Password:
                                </label>
                                <input
                                    type="password"
                                    name="repassword"
                                    id="repassword"
                                    value={data.repassword}
                                    onChange={(e) => setData("repassword", e.target.value)}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="flex items-center justify-end">
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    disabled={processing}
                                >
                                    Create User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
