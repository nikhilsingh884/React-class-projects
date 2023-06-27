import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getInventory, removeErrorMsg, searchInventory } from '../Redux/InventorySlice';
import Button from '@mui/material/Button';
import AddProductModal from '../Components/AddProductModal';
import EditProductModal from '../Components/EditProductModal';



function Inventory() {

    const { loading, inventoryList, filterInventoryList } = useSelector((state) => state.inventory)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editValue, setEditValue] = useState({});
    const [searchText, setSearchText]= useState("")

    useEffect(() => {
        dispatch(getInventory());

    }, [])

    useEffect(()=>{
        if (searchText){
            dispatch(searchInventory(searchText))
        }
    },[searchText])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleEditOpen = (values) => {
        setEditValue(values)
        setEditOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        dispatch(removeErrorMsg())
    };

    const editHandleClose = () => {
        setEditOpen(false);
    };

    return (
        <div className="main-body">

            <div className='container py-5 mt-5'>

                <AddProductModal open={open} handleClose={handleClose} />
                <EditProductModal editOpen={editOpen} editHandleClose={editHandleClose} editValue={editValue} />

                <h1 className='text-center mb-5 fw-bolder'>Available inventory in store</h1>

                <div className='d-flex justify-content-between align-items-center mb-4'>

                    <input type="text" placeholder='search products' className=' form-control border border-1 rounded-0 border-dark w-25' onChange={(e) => setSearchText(e.target.value)} value={searchText} />

                    <div className="text-end">
                        <Button size='small' className='text-capitalize rounded-0' variant="contained" onClick={handleClickOpen}>Add Product</Button>  
                    </div>
                    
                </div>

                {loading && <div className="container d-flex justify-content-center align-items-center  pt-5"><div>
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
                    </div>
                </div>
                </div>

                }

                <div className="border border-2 p-4 rounded-0 shadow">
                    <table className='table table-hover rounded-0'>
                        <thead className='border border-2 bg-light mb-3'>
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
                                filterInventoryList &&
                                filterInventoryList.map((item, index) => {
                                    const { _id, price, name, qty, category } = item;
                                    return <tr key={index}>
                                        <td style={{ fontSize: "14px" }}>{index + 1}</td>
                                        <td style={{ fontSize: "14px" }}>{name}</td>
                                        <td style={{ fontSize: "14px" }}>{category}</td>
                                        <td style={{ fontSize: "14px" }}>{price}</td>
                                        <td style={{ fontSize: "14px" }}>{qty}</td>
                                        <td className='d-flex justify-content-between '>
                                            <button className="btn btn-sm btn-primary w-50 me-1" onClick={() => handleEditOpen(item)}>Edit</button>
                                            <button className="btn btn-sm btn-danger w-50" onClick={() => dispatch(deleteProduct({ id: _id }))}>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Inventory
