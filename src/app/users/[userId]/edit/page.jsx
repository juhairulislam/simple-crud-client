import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditPage = async ({ params }) => {

    const { userId } = await params;

    const user = await getUserById(userId);


    const updateUserWrapper = (formData) =>{
        return updateUser(userId , formData ) ;
    }


    return (
        <div className='p-5 md:p-15'>
            <h2 className='text-xl md:text-4xl text-center font-bold my-6'>Editing User: {user.name} </h2>

            <div className='w-1/3 mx-auto'>
                <form action={updateUserWrapper} className="flex flex-col gap-4">
                    <TextField defaultValue={user?.name} className="w-full" name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField defaultValue={user.email} className="w-full" name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField defaultValue={user.role} className="w-full" name="role" type="tel">
                        <Label>Role</Label>
                        <Input placeholder="Enter user role" />
                    </TextField>

                    <div className='flex justify-between'>                 <Button slot="close" variant="danger">
                        Cancel
                    </Button>
                        <Button variant='secondary' type='submit' slot="close">Update User</Button></div>

                </form>
            </div>
        </div>
    );
};

export default UserEditPage;