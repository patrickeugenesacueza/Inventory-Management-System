import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import AddUserButton from "@/Components/AddUserButton";
import DangerButton from "@/Components/DangerButton";
import EditButton from "@/Components/EditButton";
import DefectiveButton from "@/Components/DefectiveButton";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ auth }) => {
    const { itemList } = usePage().props;

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
                            <div className="flex gap-4">
                                <AddUserButton
                                    href={route("manageDevice.createDevice")}
                                >
                                    Add Device
                                </AddUserButton>
                                <DangerButton href={route("manageDevice.defectivePage")}>View Defective</DangerButton>
                            </div>
                            <table className="min-w-full mt-6 divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            ID
                                        </th> */}
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
                                    {itemList.length > 0 ? (
                                        itemList.map((item) => (
                                            <tr key={item.id}>
                                                {/* <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {item.id}
                                                    </div>
                                                </td> */}
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {item.category}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {item.product}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {item.sn}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {item.price}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {item.personnel}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                                    <EditButton
                                                        href={route(
                                                            "manageDevice.edit",
                                                            {
                                                                device: item.id,
                                                            }
                                                        )}
                                                    />
                                                    <DefectiveButton
                                                        onClick={() =>
                                                            Inertia.post(
                                                                route(
                                                                    "manageDevice.moveToDefective",
                                                                    {
                                                                        device: item.id,
                                                                    }
                                                                )
                                                            )
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="px-6 py-4 text-center text-sm text-gray-500"
                                            >
                                                No devices found.
                                            </td>
                                        </tr>
                                    )}
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
