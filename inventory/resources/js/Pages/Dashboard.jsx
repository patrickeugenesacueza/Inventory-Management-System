import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex">
                        <div className=" w-1/2 p-6 text-black-900 bg-[#e0ecdc] overflow-hidden shadow-sm sm:rounded-lg">
                            Welcome to Inventory Management System
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2em]">
                        <div className="flex flex-col items-center justify-center p-4 bg-[#ff7c54] rounded shadow">
                            <div className="text-2xl font-bold text-[#fff]">256</div>
                            <div className="text-[#fff]">Current Users</div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-[#ff9c54] rounded shadow">
                            <div className="text-2xl font-bold text-[#fff]">256</div>
                            <div className="text-[#fff]">Total Defective</div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-[#b0a484] rounded shadow">
                            <div className="text-2xl font-bold text-[#fff]">256</div>
                            <div className="text-[#fff]">Total Device</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
