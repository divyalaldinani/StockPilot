import React, { useState } from 'react'
import { v4 } from 'uuid';
import Header from '../(components)/Header';

interface CreateProductModalProps {
    isOpen: boolean,
    onClose: () => void;
    onCreate: (formData : ProductFormData) => void;
}
type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
}

const createProductModal = ({isOpen, onClose, onCreate}: CreateProductModalProps) => {
    
    const [formData, setFormData ] = useState({
        productId: v4(),
        name:"",
        price:0,
        stockQuantity: 0,
        rating: 0,
    })
    const handleSubmit = (e:)
    if( !isOpen ) return null;
    
    return (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>
            <div className='relative top-20 mx-auto p-5 border-5 bg-white'>
                <Header name='Create new Product' />
                <form onSubmit={handleSubmit}></form>

            </div>
        </div>
    )
}

export default createProductModal;
