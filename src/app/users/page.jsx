import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { deleteUser } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';

const UsersPage =async () => {

    const users = await getUsers()
    return (
        <div className='p-15 '>
            <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-center'>User Management: {users.length}</h2>
<AddUserModal></AddUserModal>

            </div>
            <UsersTable users={users} deleteUserAction = {deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;