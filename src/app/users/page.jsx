import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { deleteUser } from '../lib/actions';

const UsersPage =async () => {

    const users = await getUsers()
    return (
        <div className='p-15 space-y-4'>
            <h2 className='text-2xl font-bold text-center'>User Management: {users.length}</h2>
            <UsersTable users={users} deleteUserAction = {deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;