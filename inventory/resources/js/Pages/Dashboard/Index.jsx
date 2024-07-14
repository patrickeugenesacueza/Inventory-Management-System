import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const NewDashboard = ({ auth }) => {
    const { defectiveCount, totalUserCount, deviceCount, defectivePerMonth, devicePerMonth } = usePage().props;

    // Debug: Log data to the console
    console.log('defectivePerMonth:', defectivePerMonth);
    console.log('devicePerMonth:', devicePerMonth);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const defectiveData = Array(12).fill(0);
    const deviceData = Array(12).fill(0);

    for (const [month, count] of Object.entries(devicePerMonth || {})) {
        deviceData[month - 1] = count; // month is 1-indexed
    }

    for (const [month, count] of Object.entries(defectivePerMonth || {})) {
        defectiveData[month - 1] = count; // month is 1-indexed
    }

    const chartDataDefective = {
        labels: months,
        datasets: [
            {
                label: "Defective Count",
                data: defectiveData,
                fill: false,
                backgroundColor: "rgba(255,99,132,1)",
                borderColor: "rgba(255,99,132,1)",
            },
        ],
    };

    const chartDataDevice = {
        labels: months,
        datasets: [
            {
                label: "Device Count",
                data: deviceData,
                fill: false,
                backgroundColor: "rgba(54, 162, 235, 1)",
                borderColor: "rgba(54, 162, 235, 1)",
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Devices and Defective Devices Per Month in 2024",
            },
        },
    };

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
                        <div className="w-1/2 p-6 text-black-900 bg-[#e0ecdc] overflow-hidden shadow-sm sm:rounded-lg">
                            Welcome to Inventory Management System
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2em]">
                        <div className="flex flex-col items-center justify-center p-4 bg-[#ff9c54] rounded shadow">
                            <div className="text-2xl font-bold text-[#fff]">
                                {totalUserCount}
                            </div>
                            <div className="text-[#fff]">Total User</div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-[#ff9c54] rounded shadow">
                            <div className="text-2xl font-bold text-[#fff]">
                                {defectiveCount}
                            </div>
                            <div className="text-[#fff]">Total Defective</div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-[#ff9c54] rounded shadow">
                            <div className="text-2xl font-bold text-[#fff]">
                                {deviceCount}
                            </div>
                            <div className="text-[#fff]">Total Device</div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="mt-8 p-4 bg-white shadow-sm sm:rounded-lg w-1/2">
                            <Line
                                data={chartDataDefective}
                                options={chartOptions}
                            />
                        </div>
                        <div className="mt-8 p-4 bg-white shadow-sm sm:rounded-lg w-1/2">
                            <Line
                                data={chartDataDevice}
                                options={chartOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default NewDashboard;
