"use client";

<<<<<<< HEAD
import { useGetProductsQuery } from '../state/api';
=======
import { useGetProductsQuery } from '../../state/api';
>>>>>>> b60ca50 (idk)
import Header from '../(components)/Header';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Icon } from 'lucide-react';

const columns : GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90}, // property that we are gettting from usegetProductsQuery() is field, what we wanna display is headerName
    { field: "name", headerName: "Product Name", width: 200},
    { 
        field: "price", 
        headerName: "Price", 
        width: 110, type: "number", 
        valueGetter: (value, row) => `$${row.price}`
    },
    { 
        field: "rating", 
        headerName: "Rating", 
        width: 110, type: "number", 
        valueGetter: (value, row) => row.rating ? row.rating : "N/A",
    },
    { 
        field: "stockQuantity", 
        headerName: "Stock Quantity", 
        width: 150, 
        type: "number", 
    },
]


const Inventory = () => {
    const { data: products, isError, isLoading } = useGetProductsQuery();
    console.log("Products :", products);
    if( isLoading ) {
        return <div className='py-4'>Loading...</div>
    }
    if( isError || !products ) {
        return (
            <div className='text-center text-red-500 py-4'>
                Failed to fetch products..
            </div>
        )
    }
    return (
        <div className='flex flex-col'>
            <Header name="Inventory"></Header>
            <DataGrid
            rows= {products}
            columns={columns}
            getRowId={(row) => row.productId }
            className='bg-white shadow rounded-lg border border-gray-200 mt-5 pl-5 !text-gray-700'
            />
        </div>
    )
}

export default Inventory;
