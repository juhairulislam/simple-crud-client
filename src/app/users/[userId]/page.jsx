import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage =async ({params}) => {

    const {userId} = await params ;

    const user = await getUserById(userId) 

    console.log(user)

    return (
        <div>
            <h1>THis is user details page</h1>
        </div>
    );
};

export default UserDetailsPage;