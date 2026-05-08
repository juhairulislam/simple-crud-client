import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserEditPage =async ({params}) => {

    const {userId} = await params ;

    const user = await getUserById(userId) ;


    return (
        <div>
            <h2>Editing User: {user.name} </h2>
        </div>
    );
};

export default UserEditPage;