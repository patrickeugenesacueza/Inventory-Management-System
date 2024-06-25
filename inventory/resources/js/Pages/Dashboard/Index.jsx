// Dashboard.jsx

import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage} from '@inertiajs/react';
import CurrentUser from '@/Components/CurrentUser';
import TotalDevice from '@/Components/TotalDevice';
import LineChart from '@/Components/LineChart';
import AddedDeviceChart from '@/Components/AddedDeviceChart';

const NewDashboard = () => {
    const { defectiveCount } = usePage().props;
    console.log(defectiveCount);
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={
        //         <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        //             Dashboard
        //         </h2>
        //     }
        // >
            // <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex">
                        <div className="w-1/2 p-6 text-black-900 bg-[#e0ecdc] overflow-hidden shadow-sm sm:rounded-lg">
                            Welcome to Inventory Management System
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2em]">
                        {/* <CurrentUser /> */}
                        <div className="flex flex-col items-center justify-center p-4 bg-[#ff9c54] rounded shadow">
                            <div className="text-2xl font-bold text-[#fff]">
                                {defectiveCount}
                            </div>
                            <div className="text-[#fff]">Total Defective</div>
                        </div>
                        {/* <TotalDevice /> */}
                    </div>
                    {/* <div className="flex gap-2">
                        <div className="mt-8 p-4 bg-white shadow-sm sm:rounded-lg w-1/2">
                            <LineChart />
                        </div>
                        <div className="mt-8 p-4 bg-white shadow-sm sm:rounded-lg w-1/2">
                            <AddedDeviceChart />
                        </div>
                    </div> */}
                </div>
            </div>
        // </AuthenticatedLayout>
    );
};

export default NewDashboard;
