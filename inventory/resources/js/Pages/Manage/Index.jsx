import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SuccessButton from '@/Components/SuccessButton';
import AddUserButton from '@/Components/AddUserButton';

export default function ManageUser({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manage User</h2>}
        >
            <Head title="Manage User" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-5 py-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900">Manage User</div> */}
                        <AddUserButton/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
