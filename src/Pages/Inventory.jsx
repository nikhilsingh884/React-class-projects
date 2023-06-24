import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInventory } from '../Redux/InventorySlice';
import Button from '@mui/material/Button';
import AddProductModal from '../Components/AddProductModal';



function Inventory() {

    const { loading, inventoryList } = useSelector((state) => state.inventory)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getInventory());

    },[])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    if (loading) {

        return <div className="container d-flex justify-content-center align-items-center  pt-5">{
            loading && <div>
                <div className="loader">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                    <div className="bar7"></div>
                    <div className="bar8"></div>
                    <div className="bar9"></div>
                    <div className="bar10"></div>
                    <div className="bar11"></div>
                    <div className="bar12"></div>
                </div>Loading...
            </div>
        }
        </div>
    }
    return (

        <div className='container py-5 mt-5'>
            <AddProductModal open={open} handleClose={handleClose}/>
            <h1 className='text-center mb-4 fw-bolder'>Available inventory in store</h1>

            <div className="text-end">
                <Button size='small' className='mb-3 text-capitalize' variant="contained" onClick={handleClickOpen}>Add Product</Button>
            </div>

            <div className="border border-2 p-4 rounded-3 shadow">
                <table className='table table-hover'>
                    <thead className='border border-2 bg-light'>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Qty</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventoryList &&
                            inventoryList.map((item, index) => {
                                const { price, name, qty, category } = item;
                                return <tr key={index}>
                                    <td style={{fontSize:"14px"}}>{index + 1}</td>
                                    <td style={{fontSize:"14px"}}>{name}</td>
                                    <td style={{fontSize:"14px"}}>{category}</td>
                                    <td style={{fontSize:"14px"}}>{price}</td>
                                    <td style={{fontSize:"14px"}}>{qty}</td>
                                    <td className='d-flex justify-content-between '> 
                                    <button className="btn btn-sm btn-primary w-50 me-1">Edit</button>
                                        <button className="btn btn-sm btn-danger w-50">Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Inventory
