import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Redux/InventorySlice';




function AddProductModal({ open, handleClose }) {
  let {addProductLoading,error}= useSelector((state)=>state.inventory)
  const dispatch = useDispatch();

  function formSubmit(value) {

    console.log("value", value);
    dispatch(addProduct({ formValue: value, handleClose: handleClose }));
    
  }
  


  const initialValues =
  {
    name: "",
    category: "",
    price: 0,
    qty: 0
  }

  const validationSchema = object({
    name: string().required("Name is required."),
    price: number().required("Price is required."),
    category: string().required("Category is required."),
    qty: number().required("Qty is required.")
  });


  return (
    <div>
      <Dialog maxWidth="sm" fullWidth open={open} >
        <div className="bg-light d-flex justify-content-between align-items-center pe-4">
          <DialogTitle className='fs-2  fw-bold'>Fill product details</DialogTitle>
          <CloseOutlinedIcon onClick={handleClose} />
        </div>
        <hr className='my-0'/>  


        <DialogContent>
          <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={formSubmit}>{
            () => {
              return <Form>
                <label htmlFor="name">Enter product name </label>
                <Field name="name" type="text" className="form-control mb-4" />
                <ErrorMessage
                    className="text-danger mt-1"
                    name="name"
                    component="div"
                  />


                <label htmlFor="category">Select Category </label>
                <Field as="select" className="form-control mb-4" name="category">
                  <option value="select">----select----</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Watches">Watches</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Grocery">Grocery</option>
                </Field> 
                <ErrorMessage
                  className="text-danger mt-1"
                  name="category"
                  component="div"
                />


                <label htmlFor="price">Enter Price </label>
                <Field name="price" type="number" className="form-control mb-4" />
                <ErrorMessage
                    className="text-danger mt-1"
                  name="price"
                    component="div"
                  />


                <label htmlFor="qty">Enter Qty </label>
                <Field name="qty" type="number" className="form-control mb-4" />
                <ErrorMessage
                    className="text-danger mt-1"
                  name="qty"
                    component="div"
                  />
                  <p className='text-danger'>
                  {error}
                </p>
                <button className='btn-primary btn w-100 mb-3' type='submit'>
                  {
                    addProductLoading ? "adding.." :"Add to inventory"
                  }
                </button>

              </Form>
            }
          }
          </Formik>
        </DialogContent>
        
      </Dialog>
    </div>
  )
}


export default AddProductModal