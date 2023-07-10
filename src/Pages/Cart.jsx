import React, { useContext } from 'react';
import { AppDetails } from '../App';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, setCart } = useContext(AppDetails);

    console.log(cart);

    const deleteItem = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            const price = parseFloat(item.price);
            if (!isNaN(price)) {
                total += price;
            }
        });
        return total;
    };


    if (cart.length === 0) {
        return (
            <div className='container mt-5 pt-5 text-center'>
                <h1>Cart is empty</h1>
                <Link to='/cocktail'>Click here to shop</Link>
            </div>
        );
    }

    return (
        <div className='mt-5 p-5'>
                <h1 className='text-center'>Cart</h1>
            <table className='table table-hover w-100 border border-1'>
                <thead className=''>
                    <tr style={{ backgroundColor: "#570db1" }} className="text-center text-light">
                        <th>Sr. no.</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Descrption</th>
                        <th>Qty.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => {
                        const { strDrink, strDrinkThumb, strInstructions } = item;
                        return (
                            <tr className="text-center align-text-bottom" key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={strDrinkThumb}
                                        alt=""
                                        className="img-fluid"
                                        style={{ height: "50px", width: "50px", borderRadius: "5px" }}
                                    />
                                </td>
                                <td>{strDrink}</td>
                                <td>{item.price}</td>
                                <td className="text-truncate" style={{ maxWidth: "0px" }}>
                                    {strInstructions}
                                </td>
                                <td>
                                    <div className="input">
                                        <input style={{ width: "50px" }} defaultValue={1} className="" type="number" />
                                    </div>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteItem(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
            <div>
                <div className=' d-flex justify-content-between align-items-center p-3 total-bar '>
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='me-4'><h4 className='mb-0'>Total amount: </h4></div>
                    <div><h5 className='mb-0 me-4'>&#8377; {calculateTotal()} </h5></div>
                    </div>
                    <button className='btn btn-sm btn-primary'>Proceed to payment <span className='fa-solid fa-angles-right fa-fade'></span></button>
                </div>
            </div>

        </div>
    );
}

export default Cart;
