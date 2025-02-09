"use client";

import { useGetUsersQuery } from '../state/api';
import Header from '../(components)/Header';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Icon } from 'lucide-react';

const columns : GridColDef[] = [
    { field: "userId", headerName: "ID", width: 90}, // property that we are gettting from usegetProductsQuery() is field, what we wanna display is headerName
    { field: "name", headerName: "Name", width: 200},
    { field: "email", headerName:"Email", width: 200},
]


const Users = () => {
    const { data: users, isError, isLoading } = useGetUsersQuery();
    console.log("users :", users);
    if( isLoading ) {
        return <div className='py-4'>Loading...</div>
    }
    if( isError || !users ) {
        return (
            <div className='text-center text-red-500 py-4'>
                Failed to fetch users..
            </div>
        )
    }
    return (
        <div className='flex flex-col'>
            <Header name="Users"></Header>
            <DataGrid
            rows= {users}
            columns={columns}
            getRowId={(row) => row.userId }
            className='bg-white shadow rounded-lg border border-gray-200 mt-5 pl-5 !text-gray-700'
            checkboxSelection
            />
        </div>
    )
}

export default Users;
